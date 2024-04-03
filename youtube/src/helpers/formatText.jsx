import React from "react"


const formatText = text => {
    const formattedText = text.split(' ').map((x, i) => 
    x.startsWith('http') 
    ?
        <a href={x} key={i}>{x}</a>
    : <span key={i}>{x}</span>
    )
    return formattedText
}

export default formatText