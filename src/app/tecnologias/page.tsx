import React from 'react';
import tecnologias from '@/data/tecnologias.json';
import TecnologiaCard from '@/components/TecnologiaCard/TecnologiaCard';

const TecnologiasPage = () => {
  return (
    <div className='p-4 text-center'>
      <h1 className='font-bold text-3xl mb-3'>Tecnologias Aprendidas</h1>
      <div className='flex flex-wrap justify-center gap-5'>
        {tecnologias.map((tecnologia, index) => (
          <TecnologiaCard
            key={index}
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            rating={tecnologia.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TecnologiasPage;
