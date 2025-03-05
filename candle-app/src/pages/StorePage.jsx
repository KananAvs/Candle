import React, { useState, useMemo, useCallback } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Pagination from '@mui/material/Pagination';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard/ProductCard';

// Custom hook for managing localStorage
const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  const setStateAndStore = useCallback((newValue) => {
    setState(newValue);
    localStorage.setItem(key, newValue);
  }, [key]);

  return [state, setStateAndStore];
};

// Custom hook for product filtering and sorting
const useProductFilter = (products, searchQuery, sortOption) => {
  return useMemo(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortingStrategies = {
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
      'date-newest': (a, b) => b.id - a.id,
      'date-oldest': (a, b) => a.id - b.id
    };

    return sortingStrategies[sortOption]
      ? [...filtered].sort(sortingStrategies[sortOption])
      : filtered;
  }, [products, searchQuery, sortOption]);
};

const StorePage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useLocalStorageState('searchQuery', '');
  const [sortOption, setSortOption] = useLocalStorageState('sortOption', 'date-newest');

  const productsPerPage = 12;

  const sortedProducts = useProductFilter(products, searchQuery, sortOption);

  const handleChangePage = useCallback((_, value) => {
    setPage(value);
  }, []);

  const handleSearchChange = useCallback((event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setPage(1);
  }, [setSearchQuery]);

  const handleSortChange = useCallback((event) => {
    const sort = event.target.value;
    setSortOption(sort);
    setPage(1);
  }, [setSortOption]);

  const displayedProducts = useMemo(() =>
    sortedProducts.slice((page - 1) * productsPerPage, page * productsPerPage),
    [sortedProducts, page, productsPerPage]
  );

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <Container className='glass-container'>
        <Row className="mb-4">
          <Col md={12}>
            <h2 className="my-4 text-center">Discover Our Exquisite Candle Collection</h2>
          </Col>
          <Col md={12} className="d-flex flex-column align-items-center">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-auto text-center mb-2'
            />
            <Form.Select value={sortOption} onChange={handleSortChange} 
            className='w-auto'>
              <option value="price-asc">Cheapest</option>
              <option value="price-desc">Priciest</option>
              <option value="date-newest">Newest</option>
              <option value="date-oldest">Oldest</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center my-4">
        <Pagination
          key={totalPages}
          count={totalPages}
          page={page}
          hidePrevButton
          hideNextButton
          onChange={handleChangePage}
          color="secondary"
        />
      </div>
      <Row>
        {displayedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {displayedProducts.length === 0 && (
        <div className="text-center my-5">
          <h4>No products found matching your criteria</h4>
        </div>
      )}
      <div className="d-flex justify-content-center my-4">
        <Pagination
          key={totalPages}
          count={totalPages}
          page={page}
          hidePrevButton
          hideNextButton
          onChange={handleChangePage}
          color="secondary"
        />
      </div>
    </>
  );
};

export default StorePage;