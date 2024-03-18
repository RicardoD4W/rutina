import { Data } from "../types/data";

export default function Card({ entrenamiento }: { entrenamiento: Data }) {
  return (
    <>
      <article className="max-w-96 min-w-72 bg-white p-2  flex flex-col gap-y-3 justify-between items-center rounded- shadow-md">
        <p className="text-sm">
          {entrenamiento.Series && entrenamiento.Series + " x "}
          {entrenamiento.Repeticiones && entrenamiento.Repeticiones}
        </p>
        <p>{entrenamiento.Ejercicio && entrenamiento.Ejercicio}</p>
        <p>
          <img
            className="aspect-square w-52 object-center object-contain"
            src={entrenamiento.Gif}
            alt={entrenamiento.Ejercicio}
          />
        </p>
        <p className="italic text-center max-w-64">
          {entrenamiento.Notas && entrenamiento.Notas}
        </p>
      </article>
    </>
  );
}
