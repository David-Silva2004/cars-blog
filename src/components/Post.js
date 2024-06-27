import React from 'react';
import modelx from '../assets/images/modelx.png';
import '../assets/css/post.css';
import postsData from '../posts.json';
import { Link } from 'react-router-dom'; 


function Post() {
    return (
       <div class='container-principal'>
            <div class="text-container">
                <h1>Tesla Model X</h1>
                <p>O Tesla Model X é um SUV elétrico de luxo lançado pela Tesla, Inc. em 2015, conhecido pelo design futurista, incluindo portas traseiras "Falcon Wing" e para-brisa panorâmico. Com capacidade para até sete passageiros, oferece aceleração de 0 a 100 km/h em 2,6 segundos na versão mais potente e autonomia superior a 550 km por carga. Equipado com tração nas quatro rodas e acesso à rede de Superchargers da Tesla, proporciona uma experiência de condução superior.
                Além da performance, o Model X é rico em tecnologia avançada, com sistema de infotainment em tela touch de 17 polegadas e o Autopilot para condução semiautônoma. Prioriza a segurança com altas classificações em testes e recursos de segurança ativa e passiva. Sendo totalmente elétrico, contribui para a redução da pegada de carbono. Em resumo, é uma escolha atraente para quem busca um SUV tecnológico, confortável e ecologicamente correto.
                </p>
                <Link to={`/post/1`}> {/* Substitua '1' pelo id correto do post */}
                    <button>Saiba Mais</button>
                </Link>
            </div>
            <div class="image-container">
                <div class="backMira"></div>
                <div class="carCont">
                    <img src={modelx}></img>
                </div>
            </div>
       </div>
    );
}

export default Post;