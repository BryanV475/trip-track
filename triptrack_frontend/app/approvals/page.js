'use client';
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Approvals() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/expenses`)
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error("Error fetching expenses:", err));
  }, []);

  const filteredExpenses = expenses.filter((expense) =>
    expense.authorId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center mt-2 p-2">
      <div className="flex flex-col w-3/4 md:flex-row justify-center">
        <h1 className="text-2xl text-white font-bold py-2">
          Aprobacion de Viáticos
        </h1>
      </div>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-3/4">
        {filteredExpenses.map((expense) => (
          <Card key={expense.id} expense={expense} link={`/approvals/${expense.id}`} />
        ))}
      </div>
    </div>
  );
}
