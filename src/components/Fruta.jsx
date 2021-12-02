import React from 'react'

export const fruit = ({fruit}) =>{

    return(
        <div>
            <ul>
                <li>
                    <strong>Fruit:</strong> {fruit.name}
                </li>
                <li>
                    <strong>Quantidade:</strong> {fruit.quantidade}
                </li>
            </ul>
            <button onClick={()=>alert(fruit)}>Remover</button>
        </div>
    )
}