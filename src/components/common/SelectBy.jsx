import React from "react"
import SecondarySmallBtn from "./button/SecondarySmallBtn"

export default function SelectBy(){

    const closerecommendation = () =>{
        document.querySelector(".suggestionpain").classList.add('hide');
        document.querySelector(".suggestionspecialization").classList.add('hide');
        document.querySelector('.selectby').classList.add('hide');
      }

    return(
    <div className="selectby hide">
                <p>select by</p>
                <SecondarySmallBtn url="pain" btntext="Pain" class="secondary_small_btn"/>
                <SecondarySmallBtn url="specialization" btntext="Specialization" class="secondary_small_btn"/>
                <SecondarySmallBtn url="top-therapist" btntext="All" class="secondary_small_btn"/>
                <button class="secondary_small_btn secondary_small_btn-active" onClick={closerecommendation}>
                        <p>close</p>
                </button>
    </div>
    )
}