import React from 'react';
import Myself from '../MyFamily/Myself';
import Brother from '../MyFamily/Brother';
import Sister from '../MyFamily/Sister';

const Father = () => {
    return (
        <div>

         <h3>Dad</h3>

         <section className='flex'>

          <Myself></Myself>
          <Brother></Brother>
          <Sister></Sister>

         </section>

        </div>
    );
};

export default Father;