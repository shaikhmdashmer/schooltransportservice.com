import React from "react";

const aboutUs = () => {
  return (
    <section className="blogWrap">
      <section className="blogBgWrap">
        <div className="bgImgWrap">
          <img src="/Images/blog_img.jpg" />
          <div className="container">
            <h2>About Us</h2>
          </div>
        </div>
      </section>
      <section className="block01-a-u">
        <div className="container">
          <div className="row">
            <article>
              <div className="inner-box-a-u row row-2-col">
                <div className="col-xs-12 col-sm-6 row-2-col-1 text-center">
                  <img src="/Images/a_mob_1.png" className="img-res" />
                </div>
                <div className="col-xs-12 col-sm-6 row-2-col-1">
                  <p>
                    School transport services (STS) is yet another venture by
                    Trackschoolbus,
                    {/* <br /> */}
                    which is a dominant brand in providing school bus tracking
                    software. The prime
                    {/* <br /> */}
                    aim of STS is to serve a safe transportation for school
                    going kids. Similar to
                    {/* <br /> */}
                    Trackschoolbus, STS is also having a robust, proficient and
                    skilled developers.
                    {/* <br /> */}
                    As part of company policy, they adopt strict quality control
                    measures and
                    {/* <br /> */}
                    hence, users will be able to have wondrous experience with
                    our services.
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-top-mrgn-sx ">
                  <h2>Vision and Mission</h2>
                  <h3>Vision</h3>
                  <p>
                    Our vision is to deliver a superior service, assuage the
                    demand of customers, and provide an excellent competition
                    for school transportation industry.
                  </p>
                  <h3>Mission</h3>
                  <p>
                    To provide an exceptional service to our clients by
                    transporting them safely and build a long term bond with the
                    clients. And, this bond is created upon trust, expertise,
                    and affinity towards disseminating quality service. School
                    transport services team guarantee a compact solution for
                    ensuring safety with a careful consideration to route
                    management, vehicle management and scheduling, and
                    effortless rapport creation with parents and authorities.
                    The dominant goals of our service includes:
                  </p>
                  <ul className="a-u-inner-page-ul">
                    <li>Student safety</li>
                    <li>
                      Affordable and dynamic means of student transportation
                    </li>
                    <li>Smooth integration of GPS technology</li>
                    <li>
                      Enhanced communication facility with cab owners, drivers,
                      parents and relevant authorities
                    </li>
                  </ul>
                  <div className="row text-center">
                    <div className="col-xs-12 col-sm-4">
                      <div className="media box-sx-1 f-mh-au">
                        <div className="a-u-b">
                          <i className="fa fa-search"></i>
                        </div>
                        <div className="media-body ">
                          <h3 className="media-heading text-center">
                            Our focus
                          </h3>
                          <p>
                            School Transport Services focuses on propounding
                            solutions for safely transporting school students,
                            and assure their safety with the aid of GPS
                            technology.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <div className="media box-sx-1 f-mh-au">
                        <div className="a-u-b">
                          <i className="fa fa-building"></i>
                        </div>
                        <div className="media-body">
                          <h3 className="media-heading text-center">
                            Our Business Strategy
                          </h3>
                          <p>
                            The strategy implemented in our business is quite
                            uncomplicated, we administrate business for creating
                            complete integrity, delivering quality service and
                            ultimately entice pleasure in customers by rendering
                            their demands.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <div className="media box-sx-1 f-mh-au">
                        <div className="a-u-b">
                          <i className="fa fa-bullseye"></i>
                        </div>
                        <div className="media-body">
                          <h3 className="media-heading text-center">
                            Our goal
                          </h3>
                          <p>
                            Eventually, our goal is to provide an exceptional
                            service to all our clients, and thence the clients
                            acknowledge our efforts and acquire its benefits.
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

export default aboutUs;
