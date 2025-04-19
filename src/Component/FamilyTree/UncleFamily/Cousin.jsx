import React from 'react';
import Special from '../Special/Special';
import Friends from '../Special/Friends';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
              name ==='Jerin' && <Special asset={asset} name='Specials' ></Special>  
            }
            {
               name ==='Emon'&& <Friends></Friends>
            }
        </div>
    );
};

export default Cousin;