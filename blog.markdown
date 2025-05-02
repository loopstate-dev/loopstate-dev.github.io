---
layout: default
title: "Blog"
---
<section class="blog-index">
  <div class="container">
    <h1>Blog</h1>
    <ul>
      {% for post in paginator.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
        <p><small>{{ post.date | date: "%B %d, %Y" }} • {{ post.reading_time }} min read</small></p>
      </li>
      {% endfor %}
    </ul>
    <div class="pagination">
      {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}">Previous</a>
      {% endif %}
      {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}">Next</a>
      {% endif %}
    </div>
  </div>
</section>