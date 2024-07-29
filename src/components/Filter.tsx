import { useState } from 'react';

interface FilterProps {
  onFilterChange: (categoryIds: number[]) => void;
  onShowAll: () => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, onShowAll }) => {
  const [showFilters, setShowFilters] = useState(false);

  const racks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sofas = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const mesas = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const armarios = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  const cadeiras = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  const escrivaninhas = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

  const handleFilterClick = (categoryIds: number[]) => {
    onFilterChange(categoryIds);
    setShowFilters(false);
  };

  return (
    <div className='flex items-center h-[100px] w-screen bg-bannerColor gap-7' style={{ fontFamily: 'Poppins, sans-serif'}}>
     
     <div className="relative md:ml-24">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex gap-2"
      >
        <img src="/src/imgs/filterIcon.png" alt="" />
        Filter
      </button>
      
      
      {showFilters && (
        <div className="absolute left-0 mt-2 bg-bannerColor shadow-lg border rounded w-40">
          <button
            onClick={() => handleFilterClick(racks)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Racks
          </button>
          <button
            onClick={() => handleFilterClick(sofas)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Sofas
          </button>
          <button
            onClick={() => handleFilterClick(mesas)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Mesas
          </button>
          <button
            onClick={() => handleFilterClick(armarios)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Armarios
          </button>
          <button
            onClick={() => handleFilterClick(cadeiras)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Cadeiras
          </button>
          <button
            onClick={() => handleFilterClick(escrivaninhas)}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Escrivaninhas
          </button>
          <button
            onClick={() => { onShowAll(); setShowFilters(false); }}
            className="block w-full text-left px-2 py-1 hover:bg-amareloQueimado"
          >
            Remover Filtro
          </button>
        </div>
      )}
     </div>
      <img src="/src/imgs/bartolomeo.png" alt="" />
      <img src="/src/imgs/messi.png" alt="" />
      <div className="hidden h-7 border border-gray-400 md:flex"></div>
      <p>Showing 1–16 of 32 results</p>
     
      <div className='hidden md:flex md:items-center gap-4 md:ml-[497px]'>
       Show <div className='flex items-center justify-center h-14 w-14 bg-white text-gray-400'>16</div>
       Short by <div className='flex items-center justify-center h-14 w-44 bg-white text-gray-400'>Default</div>
      </div>
    </div>
  );
};

export default Filter;
