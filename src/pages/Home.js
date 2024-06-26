import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../posts.json'; 

function Home() {

    useEffect(() => {
        document.title = "Home"; 
      }, []);

  return (
    <div>
      <h2>Lista de Posts</h2>
      <ul>
        {postsData.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.descrição.substring(0, 100)}...</p> {/* Exemplo de resumo curto */}
            <Link to={`/post/${post.id}`}>Ver Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
