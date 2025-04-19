import React, { use } from 'react';
import { Moneycontext } from '../RootGandpa/FamilyTree';

const Friends = () => {
  
    const [money,setMoney]=use(Moneycontext);

    return (

        <div>
           <h3> Friend</h3>
            <p>Family got :{money}</p>
        </div>
    );
};

export default Friends;