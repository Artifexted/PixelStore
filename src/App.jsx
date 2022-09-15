import './App.css';
import 'core-js/actual';
import Header from './components/Header/Header';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cat/:catID' element={<ItemListContainer />} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
