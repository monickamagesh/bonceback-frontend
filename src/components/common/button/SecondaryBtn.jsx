import React from "react"
import { Link } from "react-router-dom"
export default function SecondaryBtn(props){
    return(
        <Link to="/" className="secondary_btn">
        
            <p className="material-symbols-outlined">{props.icon}</p>
            <p>{props.btntext}</p>
      </Link>
    )
}