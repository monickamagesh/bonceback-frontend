import React from "react";
import SearchBar from "./SearchBar";
import SelectBy from "./SelectBy";
import SuggestionSpecialization from "./SuggestionSpecialization";
import SuggestionPain from "./SuggestionPain";

export default function RecommendationBar(){
    return(
        <div className="recommendationbar">
        <SearchBar/>
        <SelectBy/>
        <SuggestionSpecialization/>
        <SuggestionPain/>
        </div>
    )
}