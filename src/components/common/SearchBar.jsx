import React from 'react'

const SearchBar = () => {

  const openrecommendation = () =>{
    document.querySelector(".suggestionpain").classList.remove('hide');
    document.querySelector(".suggestionspecialization").classList.remove('hide');
    document.querySelector('.selectby').classList.remove('hide');
  }


  return (
    <>
    <div className='searchbar' onClick={openrecommendation}>
        <button className='material-symbols-outlined searchicon'>search</button>
      <input className='searchfield' id="searchfield" type='text' placeholder='Search by Specialization, Pain'/>
    </div>
    </>
  )
}

export default SearchBar