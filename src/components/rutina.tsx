// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from "react";
import { DAYS } from "../dicctionary/days";
import { Ejercicios } from "../data/rutina.json";
import Card from "./card";
import { Data } from "../types/data";

export default function Rutina() {
  const [diaSemana, setDiaSemana] = useState("...");
  const exercises = Ejercicios[diaSemana];

  useEffect(() => {
    const date = new Date();
    const numberDay = date.getDay();

    setDiaSemana(DAYS[numberDay]);
  }, []);

  return (
    <>
      <section className="flex justify-center flex-col items-center  py-5">
        <h2 className="text-5xl font-medium">{diaSemana}</h2>
        <article className="my-12 flex  flex-col gap-5">
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
