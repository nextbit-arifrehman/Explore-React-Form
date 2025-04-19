import React from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css';

const Grandpa = ({asset}) => {

 

    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Father asset={asset}></Father>
                <Uncle asset={asset}></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;