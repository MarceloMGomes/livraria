import React from 'react';
import axios from 'axios';
import { useRef } from 'react';

function Post() {

    const nome = useRef();
    const autor = useRef();
    const preco = useRef();
    const categoria_id = useRef();


    function efetuarcompra(event) {
        event.preventDefault()
        axios.post("https://livraria-api-omega.vercel.app/livros", {
            nome: nome.current.value,
            autor: autor.current.value,
            preco: preco.current.value,
            categoria_id: categoria_id.current.value,
        }).then(() => document.location.reload(true)).catch((erro) => console.log(erro))
    }

    return(
        <div>
            <form onSubmit={efetuarcompra}>
                <label>Código_ID:</label>
                <input type="number"></input><br></br>
                <label for="nome">Nome:</label>
                <input type="text" placeholder='Nome' ref={nome}></input><br></br>
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

export default Post;