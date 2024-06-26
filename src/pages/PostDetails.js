import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../posts.json'; 

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
    <div>
      <h2>{post.nome}</h2>
      <p>{post.descrição}</p>
    </div>
  );
}

export default PostDetail;
