import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NotesList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return (
      <section className='notes-list-empty'>
        <p className='notes-list__empty'>{emptyMessage}</p>
      </section>
    )
  }

  return(
    <section className='notes-list'>
      {notes.map((note) => (
        <NoteItem 
          key={note.id}
          id={note.id}
          {...note} 
        />
      ))}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
}

export default NotesList;