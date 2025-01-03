import React from 'react';
import ResLib from '../../../components/patient/nav-items/ResLibrary';
import '../../../pages/patient/nav-items/reslibrary.css';

import burpees from "../../../assets/reslibrary/burpees.jpg"
import deadlift from "../../../assets/reslibrary/deadlift.jpg"
import hamstrings from "../../../assets/reslibrary/hamstrings.jpg"
import highknees from "../../../assets/reslibrary/highknees.jpg"
import jumpingjacks from "../../../assets/reslibrary/jumpingjacks.jpg"
import kettleball from "../../../assets/reslibrary/kettlebell.jpg"
import leglifts from "../../../assets/reslibrary/leglifts.jpg"
import lunges from "../../../assets/reslibrary/lunges.jpg"
import russiantwist from "../../../assets/reslibrary/russiantwist.jpg"
import squats from "../../../assets/reslibrary/squats.jpg"
import tricepdip from "../../../assets/reslibrary/tricepdip.jpg"
import pushup from "../../../assets/reslibrary/pushup.jpg"


const videos = [
  { 
    title: "How to do pushup properly for the beginners", 
    duration: "4:30 mins", 
    timeAgo: "1 yr ago", 
    image: pushup
  },
  { 
    title: "How to perform squats correctly to avoid knee pain", 
    duration: "3:30 mins", 
    timeAgo: "2 yrs ago", 
    image: squats
  },
  { 
    title: "How to do lunges safely for beginner", 
    duration: "4:10 mins", 
    timeAgo: "1 yr ago", 
    image: lunges 
  },
  { 
    title: "What’s the proper form for burpees", 
    duration: "5:20 mins", 
    timeAgo: "3 yrs ago", 
    image: burpees
  },
  { 
    title: "How to stretch hamstrings effectively", 
    duration: "4:50 mins", 
    timeAgo: "1 yr ago", 
    image: hamstrings
  },
  { 
    title: "What’s the correct way to do jumping jacks", 
    duration: "3:20 mins", 
    timeAgo: "2 yrs ago", 
    image: jumpingjacks 
  },
  { 
    title: "What’s the correct way to do high knees", 
    duration: "4:00 mins", 
    timeAgo: "1 yr ago", 
    image: highknees 
  },
  { 
    title: "How to perform deadlifts safely for beginners", 
    duration: "6:00 mins", 
    timeAgo: "2 yrs ago", 
    image: deadlift 
  },
  { 
    title: "What's the right technique for kettleball swings", 
    duration: "2:30 mins", 
    timeAgo: "6 months ago", 
    image: kettleball 
  },
  { 
    title: "What's the right way to do a side leg lifts", 
    duration: "7:20 mins", 
    timeAgo: "3 yrs ago", 
    image: leglifts 
  },
  { 
    title: "How to do russian twists without straining the back", 
    duration: "3:10 mins", 
    timeAgo: "1 yr ago", 
    image: russiantwist 
  },
  { 
    title: "How to do tricep dips safely for beginners", 
    duration: "3:50 mins", 
    timeAgo: "2 yrs ago", 
    image: tricepdip
  },
];

const ResLibrary = () => {
  return <ResLib videos={videos} />;
};

export default ResLibrary;