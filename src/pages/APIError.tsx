import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_TU_API');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar: {error}</div>;

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default MiComponente;