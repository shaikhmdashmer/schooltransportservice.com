import React from "react";

const blog = () => {
  return (
    <section className="blogWrap">
      <section className="blogBgWrap">
        <div className="bgImgWrap">
          <img src="/Images/blog_img.jpg" />
          <div className="container">
            <h2>Blog</h2>
          </div>
        </div>
      </section>
      <section className="blog-block01 fabric-bg-sx fabric-squares-patten-img-sx">
        <div className="container centr-sx">
          <div className="row">
            <article>
              <div className="boxSx">
                <div className="col-md-4 col-sm-4">
                  <div className="blockSx">
                    <a href="/blogs/new-blog/">
                      <img src="/Images/blog1.jpg" />
                    </a>
                    <div className="blockInfoSx">
                      <h2>
                        <a href="/blogs/new-blog/">new blog</a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.Lorem ipsum dolor sit amet,Lorem
                      </p>
                      <div className="text-center">
                        <a href="/blogs/new-blog/">
                          Read more<i className="fa fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
};

export default blog;
