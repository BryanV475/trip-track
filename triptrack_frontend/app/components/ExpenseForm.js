import React, { useState, useEffect } from 'react';

export default function ExpenseForm({ expense, onSubmit, isDisabled }) {
    const [formData, setFormData] = useState(expense);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        setFormData(expense);
        setDisabled(expense.status !== 'PENDING' || isDisabled);
    }, [expense, isDisabled]);

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
                <label htmlFor='author' className='text-gray-300 font-bold text-lg'>Nombre del Autor: </label>
                <input
                    type='text'
                    id='author'
                    name='author'
                    value={formData.author || ''}
                    onChange={handleChange}
                    placeholder='Nombre de quien registra'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='authorId' className='text-gray-300 font-bold text-lg'>Cedula / Pasaporte del Autor: </label>
                <input
                    type='text'
                    id='authorId'
                    name='authorId'
                    value={formData.authorId || ''}
                    onChange={handleChange}
                    placeholder='Cédula / Pasaporte de quien registra'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='registrationDate' className='text-gray-300 font-bold text-lg'>Fecha de registro: </label>
                <input
                    type='date'
                    id='registrationDate'
                    name='registrationDate'
                    value={formData.registrationDate || ''}
                    onChange={handleChange}
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='reason' className='text-gray-300 font-bold text-lg'>Motivo del viaje: </label>
                <input
                    type='text'
                    id='reason'
                    name='reason'
                    value={formData.reason || ''}
                    onChange={handleChange}
                    placeholder='Motivo del viaje'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='clientName' className='text-gray-300 font-bold text-lg'>Nombre del cliente o proyecto: </label>
                <input
                    type='text'
                    id='clientName'
                    name='clientName'
                    value={formData.clientName || ''}
                    onChange={handleChange}
                    placeholder='Ingrese el nombre'
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='type' className='text-gray-300 font-bold text-lg'>Tipo de viaje: </label>
                <select
                    id='type'
                    name='type'
                    value={formData.type || 'NATIONAL'}
                    onChange={handleChange}
                    className='py-2 px-4 border rounded-lg font-medium bg-white'
                    disabled={disabled}
                    required
                >
                    <option value='INTERNATIONAL'>Internacional</option>
                    <option value='NATIONAL'>Nacional</option>
                </select>
            </div>

            {formData.type === 'INTERNATIONAL' && (
                <div className='flex flex-col mb-4'>
                    <label htmlFor='tripDate' className='text-gray-300 font-bold text-lg'>
                        Fecha de viaje:
                    </label>
                    <input
                        type='date'
                        id='tripDate'
                        name='tripDate'
                        value={formData.tripDate || ''}
                        onChange={handleChange}
                        className='py-2 px-4 border rounded-lg font-medium bg-white'
                        disabled={disabled}
                        required
                    />
                </div>
            )}

            {formData.type === 'NATIONAL' && (
                <div className='flex flex-col mb-4'>
                    <label htmlFor='invitationDate' className='text-gray-300 font-bold text-lg'>
                        Fecha de invitación:
                    </label>
                    <input
                        type='date'
                        id='invitationDate'
                        name='invitationDate'
                        value={formData.invitationDate || ''}
                        onChange={handleChange}
                        className='py-2 px-4 border rounded-lg font-medium bg-white'
                        disabled={disabled}
                        required
                    />
                </div>
            )}

            <div className='flex flex-col mb-4 md:col-span-2 items-center justify-center'>
                <button type='submit'
                    disabled={disabled}
                    className={
                        `bg-gray-800 text-xl text-gray-300 hover:text-white p-2 rounded-lg w-1/2 lg:col-span-2 
                        ${disabled ? 'hidden' : ''}`
                    }
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}
