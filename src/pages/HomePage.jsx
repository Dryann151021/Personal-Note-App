import React from 'react';
import { getActiveNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NotesList';
import HomePageAction from '../components/HomePageAction';
import content from '../contexts/content';
import useNotes from '../hooks/useNotes';

function HomePage() {
  const {locale} = React.useContext(content);
  const { filteredNotes, keyword, onKeywordChangeHandler, } = useNotes(getActiveNotes);

  return(
    <section className='homepage'>
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList 
        notes={filteredNotes} 
        emptyMessage={locale === 'id' ? 
          'Kamu belum menulis catatan' : 
          'You haven\'t written any notes'} />
      <HomePageAction />
    </section>
  );
}

export default HomePage;