import "./Events.css";
import Tilt from 'react-parallax-tilt';
import { db } from "../../firebase";
import {onValue, ref} from "firebase/database";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Events = () => {
    const params = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const query = ref(db, "Events");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            setEvents(Object.values(data));
          }

          console.log(1)
        });

      }, [params]);

    return(
        <div className="workshop">
                {
                    events && events.map((event,key)=>{
                        return(
                        <Tilt key={key} glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                            <div className="app-big-card" style={{ width:"280px", minHeight: '450px'}}>
                                <div className="app-big-card-image-container">
                                    <img className="app-big-card-poster" src={event.poster} alt="poster"></img>
                                </div>
                                <h3 style={{margin: "5px 10px"}}>{event.title}</h3>
                                <p style={{margin: "5px 10px",color: "var(--app-gray)",fontSize: "14px"}}>{event.description.substring(0, Math.min(event.description.length, 97))}...</p>
                                {event.link && <button disabled={event.link === ""} style={{margin: "5px 10px", background: event.link === "" && "var(--app-gray)"}} className="floating-container-button">
                                    <a target="_blank" href={event.link}>Register</a>
                                </button>}
                            </div>
                        </Tilt>
                        );
                    })
                }
            <div className="team-dummy-container"></div>
        </div>
    );
}

export default Events;