import React from 'react';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import content from '../contexts/content';
import useNotes from '../hooks/useNotes';

function ArchivePage() {
  const {locale} = React.useContext(content);
  const { filteredNotes, keyword, onKeywordChangeHandler, status, } = useNotes(getArchivedNotes);

  if (status === 'loading') {
    return <p>Loading....</p>
  }

  if (status === 'notfound') {
    navigate('*');
  }

  return(
  <section className='archives-page'>
    <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
    <SearchBar
      keyword={keyword}
      keywordChange={onKeywordChangeHandler}  />
    <NotesList 
      notes={filteredNotes} 
      emptyMessage={locale === 'id' ? 'Belum ada arsip' : 'No archive yet'}/>
  </section>
  );
}

export default ArchivePage;