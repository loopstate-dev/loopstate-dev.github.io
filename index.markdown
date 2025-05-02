---
layout: default
title: "Home"
---

<section class="hero">
  <h1 class="tagline">Code. Flow. Repeat.</h1>
  <p>Welcome to loopstate.dev — blending tech, creativity, and personal branding.</p>
</section>

<section class="featured">
  <h2>Featured Project</h2>
  <div class="project">
    <h3><a href="/projects/featured">Project Name</a></h3>
    <p>A brief description of the featured project goes here.</p>
  </div>
</section>

<section class="recent-posts">
  <h2>Recent Posts</h2>
  <ul>
    {% for post in site.posts limit:3 %}
      <li>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="cta">
  <h2>Stay Connected</h2>
  <p>Follow me on social media or <a href="/contact">get in touch</a>.</p>
</section>
