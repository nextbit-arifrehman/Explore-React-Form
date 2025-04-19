import React from 'react';
import ACousin from '../AuntFamily/Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <ACousin name='Sorif'></ACousin>
                <ACousin name='Saiful'></ACousin>
                <ACousin name='Rafa'></ACousin>
            </section>
        </div>
    );
};

export default Aunt;