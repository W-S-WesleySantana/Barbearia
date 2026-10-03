import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/protectPage/ProtectedRoute.jsx';
import Home from './pages/Home';
import { Adm } from './pages/Adm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adm" element={ <ProtectedRoute> <Adm /> </ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
