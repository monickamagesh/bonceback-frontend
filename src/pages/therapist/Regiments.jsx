import React from "react";
import line from "../../assets/regimen.png";

const Regimens = () => {
  return (
    <section>
      <div>
        {" "}
        <img
          src={line}
          alt="Therapist"
          className="w-[1080px]  h-72 lg:h-auto object-fill"
        />
      </div>
    </section>
  );
};

export default Regimens;
