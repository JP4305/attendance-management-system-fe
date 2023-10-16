import React from 'react'

export default function DataCardCont({item}) {
    const ContentComponent = item.contentComponent;
    return (
        <main>
            <div className='parent m-5'>
                <nav className='bg-gray-800 p-2 rounded-t-2xl text-white'>
                    <h3>{item.title}</h3>
                </nav>
                <div className='bg-slate-100 p-4'>
                    <ContentComponent />
                </div>
            </div>
        </main>
    );
};

