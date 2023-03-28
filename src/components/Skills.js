import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Top 10 Petitions that changed 2022</h2>
                        <p>Petitions are crucial in bringing about a change in today's world. Here are the ones that made an impact in 2022.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Images" />
                                <h5>Cancel Student Loan Debt</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Images" />
                                <h5>Emergency Money</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Images" />
                                <h5>Save the USPs</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imagse" />
                                <h5>Tree lives matter</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Images" /> */}
    </section>
  )
}
