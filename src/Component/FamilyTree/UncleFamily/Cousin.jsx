import React from 'react';
import Special from '../Special/Special';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
              name ==='Jerin' && <Special asset={asset} name='Specials' ></Special>  
            }
        </div>
    );
};

export default Cousin;