import React from 'react';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const navigate = useNavigate();
  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  }
  return(
    <section className='add-new-page'>
      <NoteInput onAddNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNote;