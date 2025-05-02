---
layout: page
title: contact
subtitle: get in touch
permalink: /contact/
---

<div class="contact-wrapper">
  <p>Have a question about DevOps, container orchestration, or just want to chat about coding playlists? I'd love to hear from you!</p>

  <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <div class="form-group">
      <label for="name">name</label>
      <input type="text" name="name" id="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">email</label>
      <input type="email" name="_replyto" id="email" required>
    </div>
    
    <div class="form-group">
      <label for="subject">subject</label>
      <input type="text" name="subject" id="subject">
    </div>
    
    <div class="form-group">
      <label for="message">message</label>
      <textarea name="message" id="message" rows="6" required></textarea>
    </div>
    
    <button type="submit" class="submit-btn">send message</button>
  </form>
  
  <div class="contact-alt">
    <h3 class="text-gradient">or connect elsewhere</h3>
    
    <div class="social-links">
      {% if site.social.github %}
      <a href="https://github.com/{{ site.social.github }}" class="social-link" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GitHub</span>
      </a>
      {% endif %}
      
      {% if site.social.linkedin %}
      <a href="https://linkedin.com/in/{{ site.social.linkedin }}" class="social-link" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span>LinkedIn</span>
      </a>
      {% endif %}
      
      {% if site.social.tiktok %}
      <a href="https://tiktok.com/@{{ site.social.tiktok }}" class="social-link" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm10-9v5a5 5 0 0 1-5 5v-1a4 4 0 0 0 4-4v-5h-4a4 4 0 0 1-4 4H9a5 5 0 0 0-5 5v1H3a6 6 0 0 1 6-6h1a5 5 0 0 0 5-5z"></path></svg>
        <span>TikTok</span>
      </a>
      {% endif %}
      
      {% if site.social.youtube %}
      <a href="https://youtube.com/{{ site.social.youtube }}" class="social-link" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        <span>YouTube</span>
      </a>
      {% endif %}
    </div>
  </div>
</div>

<style>
  .contact-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-form {
    margin: 2rem 0;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
    background-color: #F8FAFC;
    transition: all 0.3s ease;
  }
  
  .dark-mode .form-group input,
  .dark-mode .form-group textarea {
    background-color: #374151;
    border-color: #4B5563;
    color: #F8FAFC;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4F46E5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
  
  .submit-btn {
    background-color: #4F46E5;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
  }
  
  .contact-alt {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #E5E7EB;
  }
  
  .dark-mode .contact-alt {
    border-color: #4B5563;
  }
  
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background-color: #F8FAFC;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .dark-mode .social-link {
    background-color: #374151;
    border-color: #4B5563;
  }
  
  .social-link:hover {
    background-color: #4F46E5;
    color: white;
    border-color: #4F46E5;
    transform: translateY(-2px);
  }
</style>