import React from "react";
import { Link } from "react-router-dom"
import img1 from "../../assets/byspec/ppt.jpg"
import img2 from "../../assets/byspec/gpt.jpg"
import img3 from "../../assets/byspec/cpt.jpg"
import img4 from "../../assets/byspec/spt.jpg"
import img5 from "../../assets/byspec/wpt.jpg"
import SecondarySmallBtn from "./button/SecondarySmallBtn";

export default function SuggestionSpecialization(props){
    return(
        <div className="suggestionchips suggestionspecialization hide">
            <h3 className="suggestion_subtitle">By Specialization</h3>
            <div>
                <div className="chipgroup">
                    <Link to="specialization" className="suggestionchip">
                                <img className="chipimg" src={img1} alt="avatar" />
                                <p>Pedatrician</p>
                    </Link>
                    <Link to="specialization" className="suggestionchip">
                                <img className="chipimg" src={img2} alt="avatar" />
                            <p>Neurological </p>
                    </Link>
                    <Link to="specialization" className="suggestionchip">
                            <img className="chipimg" src={img3} alt="avatar" />
                            <p>Oncological </p>
                    </Link>
                    <Link to="specialization" className="suggestionchip">
                                <img className="chipimg" src={img4} alt="avatar" />
                                <p>Orthopedic </p>
                    </Link>
                    <Link to="specialization" className="suggestionchip">
                                <img className="chipimg" src={img5} alt="avatar" />
                            <p>Gyno</p>
                    </Link>
                  <SecondarySmallBtn url="specialization" btntext="view more" class="secondary_small_btn"/>
                </div>
            </div>
        </div>
    )
}