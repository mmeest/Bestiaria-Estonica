import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importige Provider
import store from './store'; // Importige oma Reduxi store

function App() {
  return (
    <Provider store={store}>  {/* Ümbritse rakendus Provider'iga */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:slug' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

