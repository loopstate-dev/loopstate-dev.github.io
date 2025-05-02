---
layout: default
title: "Blog"
---

<section class="blog-index">
  <h1>Blog</h1>
  <ul>
    {% for post in paginator.posts %}
      <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
        <p><small>{{ post.date | date: "%B %d, %Y" }} • {{ post.reading_time }} min read</small></p>
      </li>
    {% endfor %}
  </ul>

  <nav class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}">&laquo; Previous</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}">Next &raquo;</a>
    {% endif %}
  </nav>
</section>