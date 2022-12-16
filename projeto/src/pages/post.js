import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from "./Layout";
import Footer from '../components/Footer';

function Post() {
   
    const nome = useRef();
    const autor = useRef();
    const preco = useRef();
    const categoria_id = useRef();


    function adicionar(event) {
        event.preventDefault()
        axios.post("https://livraria-api-omega.vercel.app/livros", {
            nome: nome.current.value,
            autor: autor.current.value,
            preco: preco.current.value,
            categoria_id: categoria_id.current.value,
        }).then(document.location.href='/get').catch((erro) => console.log(erro))
    }

    return (
        
        <div >
            <Layout />
            <div className='container'>
                <form onSubmit={adicionar} className='form_control'>
                    <label for="nome">Nome:</label>
                    <input type="text" placeholder='Nome' ref={nome} required></input><br></br>
                    <label for="nome">Autor:</label>
                    <input type="text" placeholder='Nome do autor' ref={autor} required></input><br></br>
                    <label>Preço:</label>
                    <input type="number" placeholder='Preço' ref={preco} required></input><br></br>
                    <label>Categoria_ID:</label>
                    <input type="number" placeholder='Categoria_ID' ref={categoria_id} required></input><br></br>

                    <button type='submit' id='btn'>Cadastrar</button>

                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Post;