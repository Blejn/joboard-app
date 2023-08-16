import React from 'react';
import './App.css';
import { Container } from './components/Container/Container';
import OffertsContainer from './components/offers-list/OffertsContainer';
import FilterContainer from './components/filters/FilterContainer';

function App() {
   return (
      <Container>
         <FilterContainer />
         <OffertsContainer />
      </Container>
   );
}

export default App;
