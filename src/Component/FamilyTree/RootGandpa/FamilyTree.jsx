import React from 'react';
import Grandpa from './Grandpa';
import Father from './Father';

const FamilyTree = () => {
    return (
        <div className='family-tree'>
           <h2>Family Tree</h2> 
           <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;