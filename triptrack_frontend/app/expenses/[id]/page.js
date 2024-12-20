'use client';
import ExpenseForm from '@/app/components/ExpenseForm';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ExpenseDetail({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    if (id !== 'new') {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`)
        .then((res) => setExpense(res.data))
        .catch((err) => {
          router.push('/');
        });
    } else {
      setExpense({
        reason: '',
        clientName: '',
        type: 'NATIONAL',
        status: 'PENDING',
        tripDate: '',
        invitationDate: '',
      });
    }
  }, [id, router]);

  const handleSubmit = async (data) => {
    try {
      if (id === 'new') {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, data);
      } else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`, data);
      }
      router.push('/');
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  };

  return expense ? (
    <div className="flex flex-col items-center justify-center mt-2 p-2">
      <div className="flex flex-col my-2 w-3/4 md:flex-row justify-between">
        <h1 className="text-2xl text-white font-bold py-2 px-8">
          Informacion del Viático
        </h1>
      </div>
      <ExpenseForm expense={expense} onSubmit={handleSubmit} isDisabled={false}></ExpenseForm>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center mt-2 p-2">
      <div className="flex flex-col my-2 w-3/4 md:flex-row justify-center items-center">
        <h1 className="text-2xl text-white font-bold py-2 px-8 ">
          Cargando...
        </h1>
      </div>
    </div>
  );
}