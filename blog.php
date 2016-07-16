<?php include( 'partials/header.php' ); ?>

<section class="blog subpage">

  <section class="hero">
  </section>

  <section class="module module--white">
    <div class="row">
      <div class="medium-12 columns">
        <h2>Blog</h2>
      </div>
    </div>
    <div class="row">
      <div class="small-12 medium-12 large-8 columns blog-list">
        <ul class="blog-list">
          <li>
            <a href="#"><img class="blog-image" src="assets/img/blog-image.jpg" alt="Blog Title" /></a>
            <div class="blog-description">
              <a href="#"><h3>Lorem Ipsum Dolor Sit Amet</h3></a>
              <small>January 14, 2015 / By John Smith / 2 Comments</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis, nulla ac ultrices aliquam, justo felis varius dolor, vitae hendrerit lacus dui at ligula. Ut id sapien ut dolor eleifend suscipit. Nullam id pulvinar ex. Pellentesque vestibulum rhoncus tempus. Fusce consequat elementum porta.</p>
              <a class="button primary" href="#">Read More</a>
            </div>
          </li>
          <li>
            <a href="#"><img class="blog-image" src="assets/img/blog-image.jpg" alt="Blog Title" /></a>
            <div class="blog-description">
              <a href="#"><h3>Lorem Ipsum Dolor Sit Amet</h3></a>
              <small>January 14, 2015 / By John Smith / 2 Comments</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis, nulla ac ultrices aliquam, justo felis varius dolor, vitae hendrerit lacus dui at ligula. Ut id sapien ut dolor eleifend suscipit. Nullam id pulvinar ex. Pellentesque vestibulum rhoncus tempus. Fusce consequat elementum porta.</p>
              <a class="button primary" href="#">Read More</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="small-12 medium-12 large-4 columns blog-nav">
        <div class="search">
          <form class="sidebar-form" id="search" method="get" name="blog-search">
            <div class="row collapse">
              <div class="small-10 medium-9 columns">
                <input type="search" name="search" placeholder="Search">
              </div>
              <div class="small-2 medium-3 columns">
                <button class="button small-button thick" type="submit">Go</button>
              </div>
            </div>
          </form>
        </div>
        <div class="categories">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Entrepreneurship</a></li>
            <li><a href="#">Marriage</a></li>
            <li><a href="#">Family</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Data Nuggets</a></li>
            <li><a href="#">Goal Setting</a></li>
            <li><a href="#">Appreciation</a></li>
            <li><a href="#">Communication Techniques</a></li>
          </ul>
        </div>
        <div class="email-signup">
          <h4>Join Our Email List</h4>
          <form class="sidebar-form" id="email-list" method="post" name="email-list">
            <div class="row collapse">
              <div class="small-10 medium-9 columns">
                <input type="email" name="email" required placeholder="Email">
              </div>
              <div class="small-2 medium-3 columns">
                <button class="button small-button thick" type="submit">Go</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

</section>

<?php include( 'partials/footer.php' ); ?>
