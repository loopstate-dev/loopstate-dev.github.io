---
layout: post
title: "Creating a Self-Hosted n8n Instance on Google Cloud Using Cloud Run and Cloud SQL"
date: 2025-05-02 12:00:00 -0500
categories: [cloud, automation, devops]
tags: [n8n, google-cloud, cloud-run, cloud-sql, terraform, automation]
image: 
  path: /assets/images/posts/n8n-gcp-header.png
  alt: "n8n on Google Cloud"
description: "A step-by-step guide on setting up a self-hosted n8n workflow automation platform using Google Cloud Run and Cloud SQL for optimal performance and control."
---

# Creating a Self-Hosted n8n Instance on Google Cloud Using Cloud Run and Cloud SQL

## Introduction

I recently decided to self-host n8n, an open-source workflow automation tool, on Google Cloud to take full control of my automation capabilities. n8n enables users to connect various applications and automate repetitive tasks with ease. My primary goal in this project was to set up a fully functional and efficient automation workflow that I could manage directly.

## What is n8n?

n8n is a powerful, extendable tool that provides a visual interface for creating complex workflows. With triggers and actions, I can automate processes without needing extensive programming knowledge. The active community surrounding n8n constantly contributes integrations that enhance the platform's functionalities.

## Google Cloud Services Overview

For this self-hosting project, I chose to utilize Google Cloud services, specifically Cloud Run for the application deployment and Cloud SQL for managing the database.

### Google Cloud Run

Cloud Run is a serverless computing platform that automatically scales to meet traffic demands. Its key advantages include:
- **Simplified Server Management:** Allows me to focus on workflow development without managing underlying infrastructure.
- **Cost Efficiency:** I only pay for the resources I consume, making it financially suited for my needs.

### Google Cloud SQL

I utilized Cloud SQL to handle the database requirements for my n8n instance. Notable features include:
- **Seamless Integration with Cloud Run:** Streamlines the deployment process.

## Setting Up n8n on Google Cloud

### Step-by-Step Guide

1. **Creating a Google Cloud Project**
   - I created a new project in the Google Cloud Console to serve as the foundation for my application.

2. **Setting up Cloud SQL**
   - I used Terraform to configure the Cloud SQL instance as follows:
   ```hcl
   resource "google_sql_database_instance" "n8n_db_instance" {
     name             = "${var.cloud_run_service_name}-db"
     project          = var.gcp_project_id
     region           = var.gcp_region
     database_version = "POSTGRES_13"
     settings {
       tier              = var.db_tier
       availability_type = "ZONAL"
       disk_type         = "PD_HDD"
       disk_size         = var.db_storage_size
     }
     deletion_protection = false
     depends_on          = [google_project_service.sqladmin]
   }

   resource "google_sql_database" "n8n_database" {
     name     = var.db_name
     instance = google_sql_database_instance.n8n_db_instance.name
     project  = var.gcp_project_id
   }
   ```

3. **Configuring Cloud Run**
   - Next, I deployed the n8n application using Terraform with the following configuration:
   ```hcl
   locals {
     n8n_image_name = "${var.gcp_region}-docker.pkg.dev/${var.gcp_project_id}/${var.artifact_repo_name}/${var.cloud_run_service_name}:latest"
     service_url    = "https://${var.cloud_run_service_name}-${google_project_service.run.project}.run.app"
   }

   resource "google_cloud_run_v2_service" "n8n" {
     name     = var.cloud_run_service_name
     location = var.gcp_region
     project  = var.gcp_project_id

     ingress             = "INGRESS_TRAFFIC_ALL"
     deletion_protection = false
   }

   resource "google_cloud_run_service_iam_member" "n8n_public_invoker" {
     project  = google_cloud_run_v2_service.n8n.project
     location = google_cloud_run_v2_service.n8n.location
     name     = google_cloud_run_v2_service.n8n.name
     role     = "roles/run.invoker"
     member   = "allUsers"
   }

   resource "google_cloud_run_domain_mapping" "n8n" {
     name     = "n8n.loopstate.dev"
     location = google_cloud_run_v2_service.n8n.location
     metadata {
       namespace = data.google_project.project.project_id
     }
     spec {
       route_name = google_cloud_run_v2_service.n8n.name
     }
   }
   ```

4. **Deploying n8n**
   - I completed the entire deployment process using Terraform, ensuring all resources were provisioned and configured as needed.

## Conclusion

Self-hosting my n8n instance on Google Cloud using Cloud Run and Cloud SQL has empowered me to manage automation workflows efficiently. I encourage anyone interested in automation to check out n8n for their own projects.

## Additional Resources
- [n8n Documentation](https://docs.n8n.io)
- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Terraform Documentation](https://www.terraform.io/docs)
