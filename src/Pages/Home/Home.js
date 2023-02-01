import React from "react";
import Particle from "../../Components/Particles/Particles";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <Particle/>
            <div className='floating-home-container'>
                <img className='floating-home-container-title' src="/asserts/images/resonance.png" alt="resonance '23"/>
                <p className="floating-home-container-description">
                    RESONANCE is an intra college symposium which is organized by the students. It is particularly conducted for freshers to help them adapt to college and mingle with their friends and seniors. It has multiple events and workshops. This symposium helps students to get more engaged in the field of electronics and communication
                </p>
                <button style={{margin: "30px 0px"}} className="floating-container-button">
                    <Link to="/about">Know more</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;