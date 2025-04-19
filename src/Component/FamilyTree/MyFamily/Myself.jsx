import React from 'react';
import Special from '../Special/Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
 <Special asset={asset} name='Santiel'></Special>
                

            </section>
        </div>
    );
};

export default Myself;