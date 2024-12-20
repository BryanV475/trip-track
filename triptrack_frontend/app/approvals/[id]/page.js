'use client';
import ExpenseForm from '@/app/components/ExpenseForm';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ApprovalForm from '@/app/components/ApprovalForm';

export default function ExpenseaApprovalDetail({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [expense, setExpense] = useState(null);
  const [approval, setApproval] = useState(null);

  useEffect(() => {
    if (id !== 'new') {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/approvals/expense/${id}`)
        .then((res) => {
          setApproval(res.data);
          setExpense(res.data.expense);
        })
        .catch((err) => {
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`)
            .then((res) => setExpense(res.data))
            .catch((err) => {
              router.push('/');
            });
          setApproval({
            approverName: '',
            approverId: '',
            approverEmail: '',
          });
        });

    } else {
      router.push('/expenses/new');
    }
  }, [id, router]);

  const handleSubmit = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/approvals/expense/${id}`, data);
      router.push('/approvals');
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
      <ExpenseForm expense={expense} isDisabled={true} />
      <div className="flex flex-col my-2 w-3/4 md:flex-row justify-between">
        <h1 className="text-2xl text-white font-bold py-2 px-8">
          Aprobación del Viático
        </h1>
      </div>
      <ApprovalForm approval={approval} onSubmit={handleSubmit} isDisabled={false} />
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