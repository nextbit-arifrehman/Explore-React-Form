import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import Father from './Father';

export const AssetContext = createContext('');
export const Moneycontext=createContext(0);


const FamilyTree = () => {
    const [money,setMoney]=useState(0);

    const asset ='diamond';
    const newAsset ='Golden Horn'
    return (
        <div className='family-tree'>
           <h2>Family Tree</h2> 
           <h4>Total Family Net worth:{money}</h4>
           <Moneycontext value={[money,setMoney]}>

           <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
          </AssetContext.Provider>
          
           </Moneycontext>
    
        </div>
    );
};

export default FamilyTree;