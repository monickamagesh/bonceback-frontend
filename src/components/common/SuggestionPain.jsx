import React from "react";
import { Link } from "react-router-dom"
import img1 from '../../assets/bypain/backpain.jpg'
import img2 from '../../assets/bypain/jointpain.jpg'
import img3 from '../../assets/bypain/chronicpain.jpg'
import img4 from '../../assets/bypain/kneepain.jpg'
import img5 from '../../assets/bypain/neckpain.jpg'

import SecondarySmallBtn from "./button/SecondarySmallBtn";

export default function SuggestionPain(props){
    return(
        <div className="suggestionchips suggestionpain hide">
            <h3 className="suggestion_subtitle">By Pain</h3>
            <div>
                <div className="chipgroup">
                    <Link to="/login" className="suggestionchip">
                                <img className="chipimg" src={img1} alt="avatar" />
                                <p>Back Pain</p>
                    </Link>
                    <Link to="pain" className="suggestionchip">
                                <img className="chipimg" src={img2} alt="avatar" />
                            <p>Joint Pain</p>
                    </Link>
                    <Link to="pain" className="suggestionchip">
                            <img className="chipimg" src={img3} alt="avatar" />
                            <p>Chronic Pain</p>
                    </Link>
                    <Link to="pain" className="suggestionchip">
                                <img className="chipimg" src={img4} alt="avatar" />
                                <p>Knee Pain</p>
                    </Link>
                    <Link to="pain" className="suggestionchip">
                                <img className="chipimg" src={img5} alt="avatar" />
                            <p>Neck Pain</p>
                    </Link>
                     <SecondarySmallBtn url="pain" btntext="view more" class="secondary_small_btn"/>
                </div>
            </div>
        </div>
    )
}