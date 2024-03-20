// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { DAYS } from "../dicctionary/days";
import { Ejercicios } from "../data/rutina.json";
import Card from "./card";
import { Data } from "../types/data";
import BackwardIcon from "./backward-icon";
import ForwardIcon from "./fordward-icon";
import TodayIcon from "./today-icon";

export default function Rutina() {
  const [diaSemana, setDiaSemana] = useState("...");
  const [date, setDate] = useState(new Date().getDay());
  const exercises = Ejercicios[diaSemana];

  const handleClickIconNavigate = (increment: number) => () => {
    let sum = date + increment;
    //0->domingo 1 -> lunes  6->sabado
    if (sum < 0) sum = 6;
    if (sum > 6) sum = 0;
    setDate(sum);
  };

  const handleClickTodayButton = () => {
    setDate(new Date().getDay());
  };

  useEffect(() => {
    setDiaSemana(DAYS[date]);
  }, [date]);

  return (
    <>
      <section className="flex flex-col items-center justify-center py-5">
        <nav className="flex flex-col items-center justify-center">
          <h2 className="flex text-5xl font-medium gap-x-5">
            <button onClick={handleClickIconNavigate(-1)}>
              <BackwardIcon className="w-10 h-10" />
            </button>
            {diaSemana}
            <button onClick={handleClickIconNavigate(+1)}>
              <ForwardIcon className="w-10 h-10" />
            </button>
          </h2>
          <h3>
            <button
              className="my-4 font-semibold text-md"
              onClick={handleClickTodayButton}
            >
              <TodayIcon className="w-6 h-6" />
            </button>
          </h3>
        </nav>
        <article className="flex flex-col gap-5 my-5">
          {exercises ? (
            exercises.map((entrenamiento: Data, index: number) => (
              <Card key={index} entrenamiento={entrenamiento} />
            ))
          ) : (
            <p>Descanso</p>
          )}
        </article>
      </section>
    </>
  );
}
