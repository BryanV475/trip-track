import React, { useState, useEffect } from 'react';

export default function ApprovalForm({ approval, onSubmit }) {
    const [formData, setFormData] = useState(approval);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        setFormData(approval);
        setDisabled(approval.approverId !== "");
    }, [approval]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className='grid grid-cols-1 md:grid-cols-2 w-3/4 m-auto bg-gray-700 shadow-md rounded-lg px-8 pt-6 pb-8 gap-4'
        >
            <div className='flex flex-col mb-4'>
                <label htmlFor='approverName' className='text-gray-300 font-bold text-lg'>Nombre del Aprobador: </label>
                <input
                    type='text'
                    id='approverName'
                    name='approverName'
                    value={formData.approverName || ''}
                    onChange={handleChange}
                    placeholder='Nombre de quien aprueba'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='approverId' className='text-gray-300 font-bold text-lg'>Cedula / Pasaporte del Aprobador: </label>
                <input
                    type='text'
                    id='approverId'
                    name='approverId'
                    value={formData.approverId || ''}
                    onChange={handleChange}
                    placeholder='Cédula / Pasaporte de quien aprueba'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='approverEmail' className='text-gray-300 font-bold text-lg'>Email del aprobador: </label>
                <input
                    type='email'
                    id='approverEmail'
                    name='approverEmail'
                    value={formData.approverEmail || ''}
                    onChange={handleChange}
                    placeholder='Email de quien aprueba'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='approvalDate' className='text-gray-300 font-bold text-lg'>Fecha de aprobación: </label>
                <input
                    type='date'
                    id='approvalDate'
                    name='approvalDate'
                    value={formData.approvalDate || ''}
                    onChange={handleChange}
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>

            <div className='flex flex-col mb-4 md:col-span-2 items-center justify-center'>
                <button type='submit'
                    disabled={disabled}
                    className={
                        `bg-gray-800 text-xl text-gray-300 hover:text-white p-2 rounded-lg w-1/2 lg:col-span-2 
                        ${disabled ? 'hidden' : ''}`
                    }
                >
                    Aprobar
                </button>
            </div>
        </form>
    );
}
