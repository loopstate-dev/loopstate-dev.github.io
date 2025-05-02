---
layout: default
title: blog
permalink: /blog-overview/
redirect_to: /blog/
---

<div class="content-wrapper">
  <div class="container">
    <header class="page-header">
      <h1 class="page-title">{{ page.title }}</h1>
      <p class="subtitle">Redirecting to blog...</p>
    </header>
    
    <script>
      window.location.href = "{{ '/blog/' | relative_url }}";
    </script>
  </div>
</div>