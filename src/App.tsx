import { Route, Routes } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import ProductsPage from './pages/ProductsPage';
import Login from './components/Login';

function App() {

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductsPage />} path="giochi-di-carte" />
    </Routes>
  )
}

export default App;
