import React from "react";

const features = () => {
  return (
    <section className="blogWrap">
      <section className="blogBgWrap">
        <div className="bgImgWrap">
          <img src="/Images/blog_img.jpg" />
          <div className="container">
            <h2>Features</h2>
          </div>
        </div>
      </section>
      <section className="features-block02">
        <div className="container ">
          <article className="row">
            <div className="col-md-5 col-sm-5 offset-0">
              <img src="/Images/f_car.png" className="width-sx" />
            </div>
            <div className="col-md-7 col-sm-7">
              <div className="wrap-content-sx drk-clr-text-sx">
                <div className="wrap-content-ctr-text-sx offset-rt-4em">
                  <h2>Safety, Convenience & Peace of Mind</h2>
                  <p>
                    The services offered by STS include car pooling, private cab
                    or shared transportation service. These services are
                    provided through mobile apps available for download in the
                    Google Play Store or App Store. The purpose of STS is to
                    reduce parental anxiety when transporting their children to
                    school and elsewhere by private transport vehicles. STS has
                    a multitude of features which are described below.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="features-block01 light-bg-sx">
        <div className="container">
          <div className="row">
            <article>
              <div className="heading-sx text-center">
                <div className="col-sm-12">
                  <h2>What are the features STS offers?</h2>
                  <div className="hd-border-sx"></div>
                </div>
              </div>
              <div className="box-sx">
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-md-4 col-sm-4 text-center">
                      <img
                        src="/Images/f_mob_1.png"
                        className="img-responsive a-f-img-res-sx"
                      />
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="info-icon-lt-sx">
                        <i className="fa fa-child"></i>
                        <div className="col-icon-lt-sx">
                          <h3 className="media-heading-sx">
                            Safe transportation of students
                          </h3>
                          <p>
                            Students will have a safe transportation to and from
                            school. They will be accompanied by a care taker or
                            nanny to ensure transportation safety for students.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="info-icon-lt-sx">
                        <i className="fa fa-microphone"></i>
                        <div className="col-icon-lt-sx">
                          <h3 className="media-heading-sx">
                            Voice announcements
                          </h3>
                          <p>
                            All the users can receive important voice
                            announcements via apps. This assists them to remain
                            updated regarding the school transportation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="info-icon-lt-sx">
                        <i className="fa fa-mobile"></i>
                        <div className="col-icon-lt-sx">
                          <h3 className="media-heading-sx">
                            Enhanced communication{" "}
                          </h3>
                          <p>
                            School transportation services avoid the
                            communication gap between parents or tutors or coach
                            and owners of private cab owners. Also, parents can
                            communicate with drivers easily.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="info-icon-lt-sx">
                        <i className="fa fa-creative-commons"></i>
                        <div className="col-icon-lt-sx">
                          <h3 className="media-heading-sx">Rate card </h3>
                          <p>
                            Rate card facility is strictly dependent on the
                            distance covered by each vehicle. Using the GPS
                            technology, the distance covered by the vehicle is
                            determined and thereby, rate for transportation is
                            estimated.
                          </p>
                        </div>
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
export default features;
