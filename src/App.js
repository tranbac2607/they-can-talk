import { Route, Routes } from 'react-router-dom'
import clsx from 'clsx';

import styles from './App.module.scss';
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import Print from './page/prints/Print';
import Contact from './page/contact/Contact';
import Book from './page/book/Book';


function App() {

  return (
    <>
      <Navbar />
      <div className={styles.container} >
        <div className={styles.listPosts}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prints' element={<Print />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/book' element={<Book />} />
            <Route path='/page/:id' element={<Home />} />
          </Routes>
        </div>
      </div >
    </>
  );
}

export default App;
