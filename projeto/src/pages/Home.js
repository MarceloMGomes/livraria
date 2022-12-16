import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'
import Layout from './Layout';
import imgFundo from '../Img/imgFundo.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <Layout/>
            <h1 className='tittle'>Conheça Nosso projeto</h1>
            <div className='container'>
                <p className='description'>Temos o objetivo de conectar pessoas.<br/> Você que tem um ou vários livros parados na sua estante, já pensou em fazer uma troca com alguém por algum livro que deseja? <br/> Aqui na <span>Livraria Troca Troca</span> isso é possivél.</p>
                <img src={imgFundo} width='200px'/>
                <h2 className='subtittle'>Como funciona?</h2>
                <p className='description2'>Na aba <Link className='link' to='/Get'>Nossos Livros </Link>você consegue ver quais livros estão disponivéis para serem emprestados.<br/> Já na aba <Link className='link'to='/post'>Empreste um livro</Link> você disponibiliza um livro que deseja emprestar. <br/><span>Pronto</span> agora deixe conosco que iremos conectar você a outro usuário, sem burocracia e sem dor de cabeça.<br/> <span>Rapído, simples e fácil</span>.</p>
                
            </div>
            
            <Footer/>
        </div>
    )
    
}
/*rounded float-right shadow-lg img-home*/ 

export default Home