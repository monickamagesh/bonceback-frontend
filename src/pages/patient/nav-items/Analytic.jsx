import React from "react";
import line from "../../../assets/line.png";
import pie from "../../../assets/pie.png";
import reward from "../../../assets/reward.png";
import emote from "../../../assets/emote-card.png";

const Analytic = () => {
  return (
    <section>
      <div className="flex items-start gap-4  ">
        <div className="flex flex-col  gap-4">
          <div> <img
                    src={line}
                    alt="Therapist"
                    className="w-[630px]  h-72 lg:h-auto object-fill"
                  /></div>
          <div><img
                    src={pie}
                    alt="Therapist"
                    className="w-[630px]  h-72 lg:h-auto object-fill"
                  /></div>
        </div>
        <div className="flex flex-col  gap-4 ">
          <div><img
                    src={reward}
                    alt="Therapist"
                    className="w-[420px]  h-72 lg:h-auto object-fill"
                  /></div>
          <div><img
                    src={emote}
                    alt="Therapist"
                    className="w-[420px]  h-72 lg:h-auto object-fill"
                  /></div>
        </div>
      </div>
    </section>
  );
};

export default Analytic;
