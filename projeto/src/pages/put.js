import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App';
import { useParams } from 'react-router-dom';
import Layout from "./Layout";

function Put() {

    const { id } = useParams()

    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria_id, setCategoria_Id] = useState('')

    const data = {
        nome: nome,
        autor: autor,
        preco: preco,
        categoria_id: categoria_id,
    }

    useEffect(() => {
        axios.get(`https://livraria-api-omega.vercel.app/livros/${id}`)
        .then((response) => {
            setNome(response.data.nome)
            setAutor(response.data.autor)
            setPreco(response.data.preco)
            setCategoria_Id(response.data.categoria_id)
        })
    }, [id])

    const update = (e) => {
        e.preventDefault()
        axios.put(`https://livraria-api-omega.vercel.app/livros/${id}`, data).then(document.location.href="/get").catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <Layout />
            <form>
                <label for="nome">Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/><br></br>

                <label for="nome">Autor:</label>
                <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required></input><br></br>

                <label>Preço:</label>
                <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required></input><br></br>

                <label>Categoria_ID:</label>
                <input type="number" value={categoria_id} onChange={(e) => setCategoria_Id(e.target.value)} required></input><br></br>

                <button type='submit' onClick={update}>Atualizar</button>
            </form>
        </div>
    )
}

export default Put