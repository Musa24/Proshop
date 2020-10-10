import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" exact>
            <ProductScreen />
          </Route>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
