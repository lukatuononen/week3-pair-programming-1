import tour1 from '../images/tour-1.jpeg' 
import tour2 from '../images/tour-2.jpeg' 
import tour3 from '../images/tour-3.jpeg' 
import tour4 from '../images/tour-4.jpeg'

function Tours() {
  return (
    <div>
      <section class="section" id="tours">
          <div class="section-title">
            <h2>featured <span>tours</span></h2>
          </div>
          <div class="section-center featured-center">
            <article class="tour-card">
              <div class="tour-img-container">
                <img
                  src={tour1}
                  class="tour-img"
                  alt="Tibet Adventure"
                />
                <p class="tour-date">august 26th, 2020</p>
              </div>
              <div class="tour-info">
                <div class="tour-title"><h4>Tibet Adventure</h4></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div class="tour-footer">
                  <p>
                    <span><i class="fas fa-map"></i></span>china
                  </p>
                  <p>from $2100</p>
                  <p>6 days</p>
                </div>
              </div>
            </article>
            <article class="tour-card">
              <div class="tour-img-container">
                <img
                  src={tour2}
                  class="tour-img"
                  alt="best of java"
                />
                <p class="tour-date">october 1th, 2020</p>
              </div>
              <div class="tour-info">
                <div class="tour-title"><h4>best of java</h4></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div class="tour-footer">
                  <p>
                    <span><i class="fas fa-map"></i></span>indonesia
                  </p>
                  <p>from $1400</p>
                  <p>11 days</p>
                </div>
              </div>
            </article>
            <article class="tour-card">
              <div class="tour-img-container">
                <img
                  src={tour3}
                  class="tour-img"
                  alt="explore hong kong"
                />
                <p class="tour-date">september 15th, 2020</p>
              </div>
              <div class="tour-info">
                <div class="tour-title"><h4>explore hong kong</h4></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div class="tour-footer">
                  <p>
                    <span><i class="fas fa-map"></i></span>hong kong
                  </p>
                  <p>from $5000</p>
                  <p>8 days</p>
                </div>
              </div>
            </article>
            <article class="tour-card">
              <div class="tour-img-container">
                <img
                  src={tour4}
                  class="tour-img"
                  alt="kenya highlights"
                />
                <p class="tour-date">december 5th, 2019</p>
              </div>
              <div class="tour-info">
                <div class="tour-title"><h4>kenya highlights</h4></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div class="tour-footer">
                  <p>
                    <span><i class="fas fa-map"></i></span>kenya
                  </p>
                  <p>from $3300</p>
                  <p>20 days</p>
                </div>
              </div>
            </article>
          </div>
        </section>
    </div>
  );
}

export default Tours;
