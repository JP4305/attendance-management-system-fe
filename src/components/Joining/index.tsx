import React from 'react'
import style from './style.module.css'

const data = [
    {
        title: 'Jay Parmar',
        post: 'Web Developer',
        date: 'October 15, 2023'
    },
    {
        title: 'Jay Parmar',
        post: 'Web Developer',
        date: 'October 15, 2023'
    },
    {
        title: 'Jay Parmar',
        post: 'Web Developer',
        date: 'October 15, 2023'
    },
    {
        title: 'Jay Parmar',
        post: 'Web Developer',
        date: 'October 15, 2023'
    },
    {
        title: 'Jay Parmar',
        post: 'Web Developer',
        date: 'October 15, 2023'
    },
]

function Joining() {
    return (
        <main className={style.list}>
            {data.map((people, index) => (
                <div key={index} className={style.item}>
                    <h2 className='text-2xl'>{people.title}</h2>
                    <p className='text-base text-slate-400'>{people.post}</p>
                    <p className='text-base text-lime-400'>{people.date}</p>
                    <hr />
                </div>
            ))}
        </main>
    );
}

export default Joining;