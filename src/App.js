import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importe corretamente o componente Home
import PostDetail from './pages/PostDetails'; // Importe corretamente o componente PostDetail
import NotFound from './pages/NotFound'; // Importe corretamente o componente NotFound
import './assets/css/app.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} /> {/* Para renderizar componentes no v6 router*/}
        <Route path="*" element={<NotFound />} /> {/* Rota padrão para página não encontrada */}
      </Routes>
    </Router>
  );
}

export default App;
