import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <Router basename="/Candle/">
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-grow-1 py-4">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;