import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../posts.json'; 
import '../assets/css/home.css'; // Importe seu arquivo CSS aqui

function PostDetail() {
    const { id } = useParams(); // Captura o parâmetro de rota :id
    const [carro, setCarro] = useState(null); //carro não é uma variavel que provavelmente vou utilizar

    useEffect(() => {
        const carroSelecionado = postsData.find(carro => carro.id === parseInt(id));
        setCarro(carroSelecionado);
    
        if (carroSelecionado) {
          document.title = `${carroSelecionado.nome}`;
        }
      }, [id]);
    
    const post = postsData.find(p => p.id === parseInt(id));
    if (!post) return <h2>Post não encontrado</h2>;
    
  return (
    <div className="post-detail-container">
    <header className='header'>
      <Link to="/">
        <button className='voltar'>Voltar</button>
      </Link>
    </header>
    <div className="post-content">
      <h2>{post.nome}</h2>
      <img src={process.env.PUBLIC_URL + post.imagem} alt={post.nome} className="car-image" />
      <p>{post.descrição}</p>
      <ul>
        <li><strong>Ano:</strong> {post.ano}</li>
        <li><strong>Modelo:</strong> {post.modelo}</li>
        <li><strong>Quilometragem:</strong> {post.quilometragem}</li>
        <li><strong>Motor:</strong> {post.motor}</li>
        <li><strong>Transmissão:</strong> {post.transmissão}</li>
        <li><strong>Tipo de Combustível:</strong> {post.tipoCombustível}</li>
        <li><strong>Cores disponíveis:</strong> {post.cor.join(', ')}</li>
        <li><strong>Preço:</strong> {post.preço}</li>
      </ul>
    </div>
  </div>
  );
}

export default PostDetail;
