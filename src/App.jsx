import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header.jsx';  // Ensure the correct extension is used
import Slider from './Components/Slider.jsx';  // Ensure the correct extension is used
import ProductionHouse from './Components/ProductionHouse.jsx';  // Ensure the correct extension is used
import GenreMovieList from './Components/GenreMovieList.jsx';  // Ensure the correct extension is used

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
    </div>
  );
}

export default App;
