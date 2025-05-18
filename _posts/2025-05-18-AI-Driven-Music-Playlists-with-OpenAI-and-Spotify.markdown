---
layout: post
title: "AI-Driven Music Playlists with OpenAI and Spotify"
date: 2025-05-18 09:00:00 -0500
categories: [development, ai, music]
tags: [spotify, openai, flask, python, api, music-generation, ai-playlist]
description: "A walkthrough of creating a web application that integrates Spotify and OpenAI to generate AI-driven music playlists based on natural language user prompts."
image: /assets/images/posts/genai-playlists.jpg
image_alt: "GenAI and Spotify"
---

# AI-Driven Music Playlists with OpenAI and Spotify

## Introduction
Combining music and technology has always been a passion of mine. In this blog post, I'm excited to share my journey in creating a web application that integrates with Spotify and OpenAI to deliver AI-driven music-related features. The primary focus of this application is to generate Spotify playlists based on natural language user prompts, merging creativity with technology.

## Project Overview
This application allows users to log in with their Spotify accounts and unleash their creativity by requesting AI-generated playlists using simple text prompts. The backend, built with Flask, efficiently handles user authentication and seamlessly communicates with both the Spotify and OpenAI APIs while providing users with an intuitive web interface.

## Design and Architecture
The architecture of my application consists of various components that work harmoniously to deliver a delightful user experience. Let's delve into these key components and their functionalities.

## Key Components and Their Roles

1. **app.py** (Main Application & Routing):
   * The central Flask application that defines the routes for user interaction.
     * **Login (`/login`, `/callback`)**: Manages Spotify OAuth authentication.
     * **Logout (`/logout`)**: Clears user sessions.
     * **Main page (`/`)**: Displays options for AI interaction post-login.
     * **AI Playlist Generation (`/generate_playlist`)**: Accepts user prompts to trigger playlist creation.
   * Manages user sessions to store Spotify access tokens and orchestrates calls to other components.

2. **auth.py** (Spotify Authentication):
   * Implements the Spotify OAuth 2.0 Authorization Code Flow.
   * Functions to generate authorization URLs and request access/refresh tokens from Spotify, securely managing token information.

3. **utils.py** (Core Logic & API Interactions):
   * Contains helper functions for interactions with external APIs.
     * **Spotify Interaction (using Spotipy)**: Initializes Spotipy clients, fetches user data, searches for tracks, and creates new playlists.
     * **OpenAI Interaction**: Sends user prompts to OpenAI's model, processes responses, and translates AI suggestions into actionable Spotify queries.

4. **config.py** (Configuration Management):
   * Loads application settings and sensitive credentials from environment variables, ensuring a secure configuration setup.

5. **decorators.py** (Request Handling Enhancements):
   * Contains customization for handling requests, including decorators like `@login_required` to ensure user authentication.

6. **Frontend (templates and static files)**:
   * **login.html** and **index.html**: Provide user interfaces for login and playlist generation, employing Jinja2 for dynamic content rendering.
   * **style.css**: Contains styles for the application’s frontend.

7. **requirements.txt** (Dependencies):
   * Lists all necessary Python packages needed for the application, such as Flask, Spotipy, OpenAI SDK, and others.

## Core Functionality Breakdown
1. **Spotify Authentication**:
   * Users initiate the process by clicking "Login with Spotify,” leading to the Spotify authorization page for access permission. Upon granting permissions, they are redirected back with an authorization code.
2. **AI-Powered Playlist Generation**:
   * After authentication, users can submit text prompts (e.g., "Create a high-energy workout playlist with 80s rock anthems") which are processed by the application.
   * The application interacts with OpenAI, receiving track suggestions based on the prompts, which it then searches for on Spotify and adds to a new playlist.

## User Experience
The application’s simple yet effective user interface ensures that users can easily generate their desired playlists with a few clicks and textual inputs.

## Conclusion
I invite you to explore this type of technology and experience the fusion of AI and music. Collectively, we're stepping into a new era of music curation driven by artificial intelligence that can enhance our listening experiences.

## Future Enhancements
Looking forward, I aim to add more features such as user recommendations based on listening habits, collaborative playlist functionalities, and support for additional music streaming platforms. Let me know your interest!

---