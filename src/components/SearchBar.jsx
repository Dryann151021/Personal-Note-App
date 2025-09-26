import React from 'react';
import PropTypes from 'prop-types';
import content from '../contexts/content';

function SearchBar({ keyword, keywordChange, }) {
  const {locale} = React.useContext(content);

  return (
    <section className='search-bar'>
      <input 
        type='text'
        placeholder={locale === 'id' ? 'Cari catatan....' : 'Search notes....'}
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar;