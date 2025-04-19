import React from 'react';
import Cousin from '../UncleFamily/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
             <Cousin name='Emon'></Cousin>
             <Cousin asset={asset} name='Jerin'></Cousin>
             {/* <Cousin name='Shimu'></Cousin> */}
            </section>
        </div>
    );
};

export default Uncle;