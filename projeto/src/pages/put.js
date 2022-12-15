import React from 'react'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import App from '../App';

function Put(props) {

    const [posts, setPosts] = useState([])

    useEffect((event) => {
        event.preventDefault()
        axios.get("https://livraria-api-omega.vercel.app/livros")
        .then((response) => {
            setPosts(response.data)
        }).then(() => document.location.reload(true))
    }, [])

    const nome = useRef();
    const autor = useRef();
    const preco = useRef();
    const categoria_id = useRef();

    return(
        <div>
            <form key={posts.id}>
                <label>Código_ID:</label>
                <input type="number"></input><br></br>
                <label for="nome">Nome:</label>
                <input type="text" ref={nome} defaultValue={props.livros.preco}/><br></br>
                <label for="nome">Autor:</label>
                <input type="text" placeholder='Nome do autor' ref={autor}></input><br></br>
                <label>Preço:</label>
                <input type="number" placeholder='Preço' ref={preco}></input><br></br>
                <label>Categoria_ID:</label>
                <input type="number" placeholder='Categoria_ID' ref={categoria_id}></input><br></br>

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Put