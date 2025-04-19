import React, { useContext } from 'react';
import { Moneycontext } from '../RootGandpa/FamilyTree';

const Brother = () => {
    const [money,setMoney] =useContext(Moneycontext)
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000tk</button>
        </div>
    );
};

export default Brother;