---
layout: page
title: about
subtitle: the person behind loopstate.dev
permalink: /about/
---

<div class="about-wrapper">
  <div class="about-header">
    <div class="about-image">
      <img src="{{ site.baseurl }}/assets/images/profile.jpg" alt="Profile picture" class="rounded-lg">
    </div>
    <div class="about-intro">
      <h2>hey, i'm chris</h2>
      <p class="subtitle">DevOps Director • Coder • Playlist Curator</p>
    </div>
  </div>

  <div class="about-content">
    <h3 class="text-gradient">my story</h3>
    
    <p>I'm a technology enthusiast who's passionate about building efficient systems, writing clean code, and finding the perfect playlist for every coding session. With over two decades working in tech, I've worked to streamline deployment pipelines, implement infrastructure as code, and cultivate collaborative engineering cultures.</p>
    
    <p>When I'm not orchestrating containers or debugging production issues, you'll find me creating AI-generated playlists that match different coding moods or sharing quick tech tips on TikTok and YouTube Shorts.</p>
    
    <h3 class="text-gradient">what I do</h3>
    
    <div class="skills-grid">
      <div class="skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
        </div>
        <h4>DevOps Engineering</h4>
        <p>Building CI/CD pipelines, managing cloud infrastructure, and implementing automation that scales.</p>
      </div>
      
      <div class="skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h4>Software Development</h4>
        <p>Writing clean, maintainable code with a focus on reliability and performance.</p>
      </div>
      
      <div class="skill-card">
        <div class="skill-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
        </div>
        <h4>Playlist Creation</h4>
        <p>Curating the perfect soundtrack for deep work or play, using AI to discover new music that enhances productivity.</p>
      </div>
    </div>
    
    <h3 class="text-gradient">tech stack</h3>
    
    <div class="tech-tags">
      <span class="tag">Kubernetes</span>
      <span class="tag">Docker</span>
      <span class="tag">Terraform</span>
      <span class="tag">Google Cloud</span>
      <span class="tag">GitHub</span>
      <span class="tag">Python</span>
      <span class="tag">Go</span>
      <span class="tag">Node.js</span>
      <span class="tag">Ruby</span>
      <span class="tag">GitLab</span>
    </div>
    
    <h3 class="text-gradient">get in touch</h3>
    
    <p>I'm always interested in connecting with other tech enthusiasts, DevOps practitioners, or anyone passionate about the intersection of technology and creativity.</p>
    
    <div class="contact-buttons">
      <a href="https://github.com/{{ site.social.github }}" class="hero-btn secondary" target="_blank">GitHub</a>
      {% if site.social.linkedin %}
      <a href="https://linkedin.com/in/{{ site.social.linkedin }}" class="hero-btn secondary" target="_blank">LinkedIn</a>
      {% endif %}
      <a href="{{ site.baseurl }}/contact" class="hero-btn primary">Contact Me</a>
    </div>
  </div>
</div>

<style>
  .about-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .about-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    flex-direction: column;
    text-align: center;
  }
  
  @media (min-width: 640px) {
    .about-header {
      flex-direction: row;
      text-align: left;
    }
  }
  
  .about-image {
    width: 150px;
    height: 150px;
    margin-bottom: 1.5rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  
  @media (min-width: 640px) {
    .about-image {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }
  
  .about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .about-intro h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  @media (min-width: 640px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .skill-card {
    padding: 1.5rem;
    background: rgba(var(--color-primary-rgb), 0.05);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .dark-mode .skill-card {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .skill-card:hover {
    transform: translateY(-5px);
  }
  
  .skill-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #4F46E5, #8B5CF6);
    border-radius: 50%;
    margin-bottom: 1rem;
    color: white;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.5rem 0 2rem;
  }
  
  .contact-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
</style>