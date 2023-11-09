import React from "react";

import HeadingText from "../HeadingText";
import Highlight from "../Highlight";

import { Calendar2Event, ClockFill, Pin } from "react-bootstrap-icons";

interface InfoTextProps {
  days: number[];
  month: string;
  beginningTime: string;
  endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({
  days,
  month,
  beginningTime,
  endTime,
}) => {
  return (
    <section className="z-10 flex min-h-[50vh] flex-col gap-y-12">
      <HeadingText text="Fallstack" />

      <section className="flex flex-col items-center justify-between gap-x-24 gap-y-12 text-center text-2xl md:flex-row md:gap-y-6 md:text-left">
        <article className="flex w-full flex-col gap-y-6">
          <div className="flex items-center gap-x-6">
            <div className="h-[40px] w-[40px]">
              <Calendar2Event width={40} height={40} />
            </div>
            <Highlight color="primary" tilt="left" height={7} largeHeight={9}>
              {days.join(" e ")} de {month}
            </Highlight>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="h-[40px] w-[40px]">
              <ClockFill width={40} height={40} />
            </div>
            <Highlight color="accent" tilt="right" height={7} largeHeight={9}>
              {beginningTime} - {endTime}
            </Highlight>
          </div>
          <div className="flex w-full items-center gap-x-6">
            <div className="h-[40px] w-[40px]">
              <Pin width={40} height={40} />
            </div>
            Instituto Superior de Engenharia do Porto
          </div>
        </article>
        <article className="flex flex-col gap-y-6 text-2xl">
          <p>
            O <span className="font-bold text-primary">Fallstack</span>{" "}
            aproxima, todos os anos, estudantes do curso de Engenharia
            Informática do{" "}
            <span className="font-bold">
              Instituto Superior de Engenharia do Porto
            </span>{" "}
            de empresas que atuam no setor informático.
          </p>

          <p>
            Graças a este evento, os estudantes têm uma oportunidade única de
            <span className="font-bold text-primary"> interagir</span> com
            empresas diretamente ao longo de dois dias de evento repletos de
            <span className="font-bold text-primary"> partilha</span> de
            conhecimento e experiências.
          </p>
        </article>
      </section>
    </section>
  );
};

export default InfoText;
