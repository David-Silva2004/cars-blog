import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../posts.json'; 

function PostDetail() {
  const { id } = useParams(); // Captura o parâmetro de rota :id
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
