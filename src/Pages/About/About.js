import "./About.css"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/asserts/images/about-slide-1.jpg" },
  { url: "/asserts/images/about-slide-2.jpg" },
  { url: "/asserts/images/about-slide-3.jpg" },
  { url: "/asserts/images/about-slide-4.jpg" }
];

const About = () => {
    return(
        <div className="about">
            <h1 className="about-floating-text">About Us</h1>
            <div className="about-left-container">
            <SimpleImageSlider
                width={"100%"}
                height={"60%"}
                images={images}
                autoPlay={true}
            />
            </div>
            <div className="about-right-container">
                <div className="about-container">
                    <div className="about-text-container">
                        <h3 className="about-inner-container-title">CEG</h3>
                        <p className="about-inner-container-description">
                            College of Engineering, Guindy, one of the renowned and prestigious institutions in India, aimed at creating students with high competence skills and rightfulness by providing the finest education and research program. Being one of the oldest technical institutions in India, it has always been an inspiration for a lot of inventive projects which are helpful in shaping a better tomorrow for our future world.
                        </p>
                        <button style={{marginTop: "30px"}} className="floating-container-button">
                            <a target="_blank" href="https://ceg.annauniv.edu/">Know more</a>
                        </button>
                    </div>
                </div>
                <div className="about-container">
                    <div className="about-text-container">
                        <h3 className="about-inner-container-title">ECEA</h3>
                        <p className="about-inner-container-description">
                            ECEA was set up with an objective to organize various activities that contribute to the academic and professional development of students, along with leadership qualities, teamwork, and other essential employability skills for nearly three decades. ECEA functions mainly as a student organization comprising around 1000 students headed by our most revered HOD Dr. M. Meenakshi.
                        </p>
                        <button style={{marginTop: "30px"}} className="floating-container-button">
                            <a target="_blank" href="https://youtube.com/@ecea_ceg">Know more</a>
                        </button>
                    </div>
                </div>
                <div className="about-dummy-container"></div>
            </div>
        </div>
    );
}

export default About;