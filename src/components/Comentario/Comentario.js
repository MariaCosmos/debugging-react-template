import React from 'react'

export default function Comentario(props) {
    console.log(props)
    return (
        <div>
            <input placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentarioDoPost}</p>
        </div>
    )
}

