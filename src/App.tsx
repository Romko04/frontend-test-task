
import React from 'react';
import Header from './components/header';
import './scss/app.scss';
import Footer from './components/Footer/footer';
import Banner from './components/banner';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className="main">
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
