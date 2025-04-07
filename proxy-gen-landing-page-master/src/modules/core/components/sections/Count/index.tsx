import React from "react";
import CountUp from "./count";
import { Typography } from "../../typography";

const CountComponent: React.FC = () => {
  return (
    <div className="container">
      <div className="count-liniar count-mobile-liniar relative -mt-32 rounded-[2.50rem] px-10 py-10 md:-mt-20 md:py-20 lg:px-20">
        <div className="grid md:grid-cols-3 ">
          <div className="mb-8 text-center md:mb-0">
            <CountUp
              start={0}
              end={99.5}
              decimal={","}
              decimals={1}
              duration={5}
              text={"%"}
            />
            <Typography Tag="p" variant="infoSubText" className="mt-1">
              Tempo di operatività della rete
            </Typography>
          </div>
          <div className="mb-8 text-center md:mb-0">
            <CountUp start={0} end={5} duration={4} text={"Anni"} />
            <Typography Tag="p" variant="infoSubText" className="mt-1">
              Esperienza in ambito <b> Matched Betting</b>
            </Typography>
          </div>
          <div className="text-center">
            <CountUp start={0} end={7} duration={3} text={"Su 7"} />
            <Typography Tag="p" variant="infoSubText" className="mt-1">
              Assistenza dedicata <b> 7 giorni su 7</b>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountComponent;
