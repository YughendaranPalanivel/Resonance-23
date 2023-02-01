import "./Team.css"
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import {onValue, ref} from "firebase/database";
import Tilt from 'react-parallax-tilt';

const Team = () => {
    const params = useParams();
    const [members, setMembers] = useState([]);

    useEffect(() => {
        setMembers([]);
        const query = ref(db, "Team/"+params.teamId);
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            setMembers(Object.values(data));
          }
        });

      }, [params]);

    return(
        <div className="team">
            {console.log(members)}
            <h2 className="team-header">
                {params.teamId === "Office Bearers" && "Office Bearers"}
                {params.teamId === "OS" && "Organizing Secretary"}
                {params.teamId === "JS" && "Joint Secretary"}
            </h2>
            <nav className="team-floating-button">
                <Link style={{borderRight:"1px solid var(--app-light-gold)"}} className="team-floating-button-content" to = "/team/Office Bearers">OBS</Link>
                <Link style={{borderRight:"1px solid var(--app-light-gold)"}} className="team-floating-button-content" to = "/team/OS">OS</Link>
                <Link className="team-floating-button-content" to = "/team/JS">JS</Link>
            </nav>
            <div className="team-container">
                {
                    members && members.map((member,key)=>{
                        return(<Tilt key={key} glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                            <div className="app-small-card" style={{ width:"260px", height: '260px'}}>
                                <img className="app-small-card-poster" src={member.photo} alt="poster"></img>
                                <h3 style={{margin: "5px 10px"}}>{member.name}</h3>
                                {member.designation && <p style={{color : "var(--app-gray)"}}>{member.designation}</p>}
                                <div className="app-small-button-container">
                                    {member.instagram && <button disabled={member.instagram === ""} style={{margin: "5px 10px",padding: "5px 15px",background: member.instagram === "" && "var(--app-gray)"}} className="floating-container-button">
                                        <a target="_blank" href={member.instagram}>Instagram</a>
                                    </button>}
                                    {member.linkedin &&
                                    <button disabled={member.linkedin === ""}  style={{margin: "5px 10px",padding: "5px 15px",background: member.linkedin === "" && "var(--app-gray)"}} className="floating-container-button">
                                        <a target="_blank" href={member.linkedin}>Linkedin</a>
                                    </button>}
                                </div>
                            </div>
                        </Tilt>);
                    })
                }
            </div>
            <div className="team-dummy-container"></div>
        </div>
    );
}

export default Team;