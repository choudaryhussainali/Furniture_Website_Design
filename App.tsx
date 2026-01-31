import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
};

export default App;