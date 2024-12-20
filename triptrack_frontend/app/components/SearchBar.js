import React from 'react'

export default function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ingresa el numero de cedula del autor para buscar"
        className="mt-6 w-3/4 md:mt-6 py-2 px-4 border rounded-lg"
      />
    );
  }
  
