import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

function HomePageAction() {
  const navigate = useNavigate();

  return(
    <div className='homepage__action'>
      <button 
        className='action' 
        type='button' 
        title='tambah' 
        onClick={() => navigate('/notes/new')}>
        <FaPlus />
      </button>
    </div>
  );
}

export default HomePageAction;
