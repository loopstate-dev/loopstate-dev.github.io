---
layout: default
title: "Home"
---
<section class="hero">
  <div class="container">
    <h1>Welcome to loopstate.dev</h1>
    <p class="tagline">Code. Flow. Repeat.</p>
    <a href="/blog" class="cta">Read the Blog</a>
  </div>
</section>
<section class="featured">
  <div class="container">
    <h2>Featured Projects</h2>
    <p>Coming soon...</p>
  </div>
</section>
<section class="recent-posts">
  <div class="container">
    <h2>Recent Posts</h2>
    <ul>
      {% for post in site.posts limit:3 %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
