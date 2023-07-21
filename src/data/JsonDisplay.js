// JsonDisplay.js
import React, { useEffect, useState } from 'react';
import { query } from '../db';

const JsonDisplay = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Ao montar o componente, buscamos os dados do banco de dados PostgreSQL
    const fetchData = async () => {
      try {
        const data = await query('SELECT * FROM temperatura;');
        setJsonData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados JSON do PostgreSQL</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default JsonDisplay;
