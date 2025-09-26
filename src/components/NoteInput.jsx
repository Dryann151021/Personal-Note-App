import React from 'react';
import PropTypes from 'prop-types';
import AddNewPageAction from './AddNewPageAction';
import useInput from '../hooks/useInput';

function NoteInput({ onAddNote }) {
  const [title, handleTitleChange] = useInput('');
  const [body, setBody] = React.useState('');

  const handleBodyChange = (e) => setBody(e.target.innerHTML);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddNote({ title, body, });
  }

  return(
    <div className='add-new-page__input'>
      <input
        className='add-new-page__input__title'
        placeholder='Catatan rahasia'
        value={title}
        onChange={handleTitleChange} />
      <div 
        className='add-new-page__input__body' 
        contentEditable='true' 
        data-placeholder='Catat disini...'  
        onInput={handleBodyChange}></div>

      <AddNewPageAction onSubmit={onSubmitHandler} />
    </div>
  )
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
}

export default NoteInput;