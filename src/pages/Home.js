import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../posts.json';
import '../assets/css/home.css'; 
import Header from '../components/Header';
import Post from '../components/Post';
import style from './home.module.css';

function Home() {
    useEffect(() => {
        document.title = "Home"; 
    }, []);

    return (
        <div>
            <Header />
            <Post/>
            <h2 className={style.destaque}>Lista de Posts</h2>
            <ul className={style.lista}>
                {postsData.map(post => (
                    <div className={style.card} key={post.id}>
                        <li>
                            <div className={style.foto}>
                                <img width='350px' src={`${process.env.PUBLIC_URL}${post.imagem}`} alt={post.nome} />
                                <h3>{post.nome}</h3>
                            </div>
                            <p>{post.descrição.substring(0, 100)}...</p>
                            <Link to={`/post/${post.id}`}><button className={style.saber}>Saber mais</button></Link>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;
