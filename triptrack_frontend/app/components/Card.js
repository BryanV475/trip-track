import Link from "next/link";
import React from "react";

export default function Card({ expense, link }) {
  const statusInSpanish = expense.status === "PENDING" ? "Pendiente" : "Aprobado";

  return (
    <Link href={link}>
      <div className="bg-white shadow-md border-1 border-black rounded-lg p-5">
        <h2 className="text-lg font-bold mb-2">{expense.clientName}</h2>
        <p className="text-gray-600">Creado: {expense.registrationDate}</p>
        <p className="text-gray-600">Estado: {statusInSpanish}</p>
        <div className="flex flex-col justify-between ">
          <h3 className="text-md font-semibold">Autor:</h3>
          <p className="text-gray-600 pl-1">Nombre: {expense.author}</p>
          <p className="text-gray-600 pl-1">Identificación: {expense.authorId}</p>
        </div>
      </div>
    </Link>
  );
}
