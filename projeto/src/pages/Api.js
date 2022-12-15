import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Api(){
const [posts, setPosts] = useState([])

useEffect(() => {
    axios.get("https://livraria-api-omega.vercel.app/livros")
    .then((response) => {
        setPosts(response.data)
    })
}, [])

  return(
      <div className="app">

          <div className="cards">

    {posts.map((post, key) => {
        return(
            <div className="card" key={key} >
              <div className="card-body" >
                  <h1>{post.nome}</h1>
                  <div className="line"></div>
                  <h2>Autor: {post.autor}</h2>
                  <h3>R$ {post.preco}</h3>
              </div>
            </div>
        )        
    })}  

              
          
          </div>

      </div>
  )
}

export default Api