import React from "react";

const howItWorks = () => {
  return (
    <section className="hiw-wrap-content">
      <section className="block01-h-i-w">
        <div className="container">
          <article>
            <div className="heading-sx-1 text-center ">
              <div className="col-sm-12">
                <h2>How It Works?</h2>
                <div className="hd-border-sx"></div>
                <p className="h-i-w-p">
                  Private cab owners or carpooling parents can register school
                  transport services
                  <br />
                  with proper details. When the registration procedure is
                  completed with
                  <br />
                  approval from relevant authority, the vehicle booking can be
                  done by parents
                  <br />
                  or guardians, trainers, coach, and tutors. According to the
                  customer’s
                  <br />
                  requirement, booking is done for selected days or a fixed
                  period.
                </p>
              </div>
            </div>
            <div className="col-sm-12 row row-2-col">
              <div className="col-md-6 col-sm-6 img-ctr row-2-col-1">
                <div className="h-i-w-img-sx">
                  <img src="/Images/how-it-works.png" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 row-2-col-2">
                <div className="hiw-wrap-content-ctr-text-sx">
                  <h2>Vehicle booking procedure</h2>
                  <ul className="ul-h-sx">
                    <li>
                      Search, book cabs and complete the payment procedures via
                      app
                    </li>
                    <li>
                      Listed drivers who are closest to the pickup location will
                      get notification about the open trip. They can accept or
                      reject the trip.
                    </li>
                    <li>
                      Once a driver accepts, the customer will get notification
                      and ETA(estimated time of arrival)
                    </li>
                    <li>
                      Trip listing can be viewed by drivers and the trip begins
                      once the student boards the selected vehicle from the
                      pickup point location
                    </li>
                    <li>
                      As the student boards the vehicle, driver can mark “picked
                      up” via the app, which is instantly notified to every app
                      users (parent, tutors, etc.)
                    </li>
                    <li>
                      On reaching the destination, driver marks “reached” option
                      through the app and the “unboarded” notification will be
                      sent to all the app users
                    </li>
                    <li>
                      Final verification is done by the kids, who can mark the
                      trip as completed, and notification regarding the same
                      will be sent to parents or tutors or coach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default howItWorks;
