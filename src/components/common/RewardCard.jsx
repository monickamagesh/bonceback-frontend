import React from "react";
import ProfileChip from "./ProfileClip";

export default function RewardCard(){
    return(
        <div className="reward relative bg-[linear-gradient(45deg,_#DDBAF1_30%,_#FFFFFF_50%,_#DDBAF1_70%)]">
            <div className="reward_point">
                <p className="point">5000</p>
                <p className="rewardtitle">REWARDS</p>
            </div>
            <ProfileChip className="absolute bottom-0 left-0 w-full" />
        </div>
    )
}