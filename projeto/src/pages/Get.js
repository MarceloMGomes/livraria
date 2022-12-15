import Layout from "./Layout";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Get = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://livraria-api-omega.vercel.app/livros")
            .then((response) => {
                setPosts(response.data)
            })
    }, [])

    function deletar(btn) {
        axios.delete(`https://livraria-api-omega.vercel.app/livros/${btn.target.value}`)
        .then(() => axios.get("https://livraria-api-omega.vercel.app/livros")
        .then((response) => { setPosts(response.data); })
        .catch((err) => console.log(err)))
    }

    return (
        <>
            <div className="app">
                <Layout />

                <div className="cards">
                    {posts.map((post, key) => {
                        return (
                            <div className="card" key={key} >
                                <div className="card-body" >
                                    <h1>{post.nome}</h1>
                                    <div className="line"></div>
                                    <h2>Autor: {post.autor}</h2>
                                    <h3>R$ {post.preco}</h3>
                                </div>
                                <button type='submit' value={post.id} onClick={(btn) => deletar(btn)}>
                                    Excluir
                                </button>

                                <button>
                                    <Link to={`/put/${post.id}`}>Editar</Link>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Get;