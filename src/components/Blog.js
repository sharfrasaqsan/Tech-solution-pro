// src/components/Blog.js
import React from "react";
import "./blog.css"; // Import custom CSS for Blog styling

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2>Latest Blog Posts</h2>
        <div className="blog-posts">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <img
              src="https://hyperlex.ai/wp-content/uploads/2022/07/boost-productivity.png"
              alt="Blog Post 1"
              className="blog-image"
            />
            <h3>How to Boost Your Productivity</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              condimentum tortor et magna blandit dapibus.
            </p>
            <a href="/blog-post-1" className="read-more">
              Read More
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/643016813686d8eafca00875/0x0.jpg?format=jpg&width=1200"
              alt="Blog Post 2"
              className="blog-image"
            />
            <h3>The Future of Artificial Intelligence</h3>
            <p>
              Curious about AI and its impact on our lives? Dive into the world
              of artificial intelligence in this insightful post.
            </p>
            <a href="/blog-post-2" className="read-more">
              Read More
            </a>
          </div>

          {/* Blog Post 3 (New Post) */}
          <div className="blog-post">
            <img
              src="https://www.snapsurveys.com/blog/wp-content/uploads/2020/04/work-from-home-image.jpg"
              alt="Blog Post 3"
              className="blog-image"
            />
            <h3>10 Tips for Effective Remote Work</h3>
            <p>
              With the rise of remote work, discover valuable tips to enhance
              your productivity and work-life balance from home.
            </p>
            <a href="/blog-post-3" className="read-more">
              Read More
            </a>
          </div>

          {/* Blog Post 4 (New Post) */}
          <div className="blog-post">
            <img
              src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/Featured-Image-5.jpg"
              alt="Blog Post 4"
              className="blog-image"
            />
            <h3>The Art of Web Design</h3>
            <p>
              Explore the principles and aesthetics of modern web design in this
              in-depth blog post.
            </p>
            <a href="/blog-post-4" className="read-more">
              Read More
            </a>
          </div>
          {/* End of new blog post */}
        </div>
      </div>
    </section>
  );
}

export default Blog;
