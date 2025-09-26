import React from 'react';
import PropTypes from 'prop-types';
import { FiSave } from 'react-icons/fi';

function AddNewPageAction({ onSubmit }) {
  return(
    <div className='add-new-page__action'>
      <button 
        className='action' 
        type='button' 
        title='simpan' 
        onClick={onSubmit}>
        <FiSave />
      </button>
    </div>
  );
}

AddNewPageAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AddNewPageAction;