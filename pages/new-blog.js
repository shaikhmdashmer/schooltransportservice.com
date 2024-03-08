import React from "react";

const newBlog = () => {
  return (
    <section className="blogWrap">
      <section className="blog-block01 fabric-bg-sx fabric-squares-patten-img-sx">
        <div className="container centr-sx">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <article>
                <div className="boxSx">
                  <div className="blockSx">
                    <img src="/Images/blog1.jpg" />
                    <div className="blockInfoSx">
                      <h2>new blog</h2>
                      <ul className="post-meta-sx">
                        <li>
                          <i className="fa fa-clock-o"></i> Posted On: August 7,
                          2017
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet.Lorem ipsum dolor sit
                        amet,Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet.Lorem ipsum dolor sit
                        amet,
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-4">
              <article>
                <div className="boxSx">
                  <div className="blockSx">
                    <div className="blockInfoSx">
                      <div className="widgetSx categoriesSx">
                        <h3>Recent Post</h3>
                        <div className="single_comments-sx">
                          <a href="/blogs/new-blog/">
                            <img src="/Images/blog1.jpg" />
                          </a>
                          <p>new blog</p>
                          <div className="entry-meta-sx small muted">
                            <span>
                              <i className="fa fa-clock-o"></i> Posted On:
                              August 7, 2017
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default newBlog;
