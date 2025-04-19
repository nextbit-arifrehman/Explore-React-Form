import React from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css';

const Grandpa = () => {

    const asset ='diamond';

    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;