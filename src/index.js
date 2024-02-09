import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import SearchByProduct from './views/SearchProduct.jsx';
import ProductList from './views/ProductList.jsx';
import SearchBox from './views/SearchBox.jsx';
import Home from './views/Home.jsx';
import './index.scss';

export default function App() {
  return <React.Fragment>
    <SearchBox />
    <section className="meli-centered">
      <Router>
        <Routes>
          <Route path="/items/:id" exact element={<SearchByProduct />} />
          <Route path="/items" exact element={<ProductList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </section>
  </React.Fragment>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);