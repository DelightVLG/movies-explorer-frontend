import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  // Блок функция для 2го этапа. Показывает прелоадер
  const [isLoading, setIsLoading] = useState(true);

  const showLoadingSample = () => {
    setIsLoading(false);
  };

  setTimeout(showLoadingSample, 1000);

  return (
    <div className="movies">
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
    </div>
  );
}

export default Movies;
