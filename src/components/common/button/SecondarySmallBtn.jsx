import React from "react"
import { Link } from "react-router-dom"
export default function SecondarySmallBtn(props){

    const closerecommendation = () =>{
        document.querySelector(".suggestionpain").classList.add('hide');
        document.querySelector(".suggestionspecialization").classList.add('hide');
        document.querySelector('.selectby').classList.add('hide');
      }

    return(

            <Link to={props.url} className={props.class} onClick={closerecommendation}>
                        <p>{props.btntext}</p>
                  </Link>
    )
}