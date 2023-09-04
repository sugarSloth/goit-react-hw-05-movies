import React, { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') return;

    onSearch(query.trim());
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="movie"
        type="text"
        autoFocus
        placeholder="Movie title"
        className={css.input}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
