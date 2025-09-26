import React from 'react';
import PropTypes from 'prop-types';
import { BiArchiveIn, BiArchiveOut, } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';

function DetailPageAction({ id, onDelete, onArchive, archived, }) {
  return(
    <div className='detail-page__action'>
      <button 
        className='action' 
        type='button' 
        title='delete' 
        onClick={() => onDelete(id)}>
        <FaRegTrashAlt />
      </button>
      <button 
        className='action' 
        type='button' 
        title={archived ? 'Unarchive' : 'Archive'} 
        onClick={() => onArchive(id)}>
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>
    </div>
  );
}

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
}

export default DetailPageAction;