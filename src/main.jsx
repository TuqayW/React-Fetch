import React from 'react'
import datas from './data/data.json'
import './style.scss'

const Main = () => {
    return (
        <div>
            <div className="cards">
                {
                    datas.map(data => {
                        return (
                            <div className='card' key={data.id}>
                                <img src={data.image} className='image' alt=""/>
                                <div className='content'>
                                    <h4>{data.category}</h4>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                                <h1>{data.price}$</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main