import "./Workshops.css";
import Tilt from 'react-parallax-tilt';
import { db } from "../../firebase";
import {onValue, ref} from "firebase/database";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Workshop = () => {
    const params = useParams();
    const [workshops, setWorkshps] = useState([]);

    useEffect(() => {
        const query = ref(db, "Workshops/");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            setWorkshps(Object.values(data));
          }
        });

      }, [params]);

    return(
        <div className="workshop">
                {
                    workshops && workshops.map((workshop,key)=>{
                        return(
                        <Tilt key={key} glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                            <div className="app-big-card" style={{ width:"280px", minHeight: '450px'}}>
                                <div className="app-big-card-image-container">
                                    <img className="app-big-card-poster" src={workshop.poster} alt="poster"></img>
                                </div>
                                <h3 style={{margin: "5px 10px"}}>{workshop.title}</h3>
                                <h4 style={{margin: "5px 10px",color: "var(--app-gray)"}}>{workshop.faciliator}</h4>
                                <p style={{margin: "5px 10px",color: "var(--app-gray)",fontSize: "14px"}}>{workshop.description.substring(0, Math.min(workshop.description.length, 97))}...</p>
                                <button disabled={workshop.register_link === ""} style={{margin: "5px 10px", background: workshop.register_link === "" && "var(--app-gray)"}} className="floating-container-button">
                                    <a target="_blank" href={workshop.register_link}>Register</a>
                                </button>
                            </div>
                        </Tilt>
                        );
                    })
                }
            <div className="team-dummy-container"></div>
        </div>
    );
}

export default Workshop;