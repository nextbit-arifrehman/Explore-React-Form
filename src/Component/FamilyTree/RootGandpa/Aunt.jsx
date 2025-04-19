import React, { useContext } from 'react';
import ACousin from '../AuntFamily/Cousin';
import { Moneycontext } from './FamilyTree';

const Aunt = () => {
    const [money,setMoney]=useContext(Moneycontext);
    const handleAddMOney = ()=>{
        setMoney(money + 5000);
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <ACousin name='Sorif'></ACousin>
                <ACousin name='Saiful'></ACousin>
                <ACousin name='Rafa'></ACousin> <br />
                <div>
                <button onClick={handleAddMOney}>Add 5000 tk</button>
                </div>
            </section>
        </div>
    );
};

export default Aunt;