import React from "react"
export default function PrimaryBtn(props){
    return(
        <div className='primary_btn '>
            <p className="material-symbols-outlined">{props.icon}</p>
            <p>{props.btntext}</p>
      </div>
    )
}