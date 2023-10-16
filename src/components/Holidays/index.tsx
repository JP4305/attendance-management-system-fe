import React from 'react'
import style from './style.module.css'
import bg1 from '../../../public/images/dussehra.png'

const data = [
    // {
    //     title: 'Dusshera',
    //     date: 'October 24',
    //     bg: bg1

    // },
    // {
    //     title: 'Dusshera',
    //     date: 'October 24',
    //     bg: bg1

    // },
    // {
    //     title: 'Dusshera',
    //     date: 'October 24',
    //     bg: bg1

    // },
    {
        title: 'Dusshera',
        date: 'October 24',
        image: bg1

    }
]

const Holidays = () => {
    return (
        <main className={style.list}>
            {data.map((fest, index) => (
                <div key={index} className={style.item} style={{ backgroundImage: `url(${fest.image})` }}>
                    <h2>{fest.title}</h2>
                    <p>{fest.date}</p>
                    <hr />
                </div>
            ))}
        </main>
    )
}

export default Holidays