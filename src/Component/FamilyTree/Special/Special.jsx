import React from 'react';

const Special= ({name ,asset}) => {
    return (
        <div>
          <h3>{name}</h3>  
          <p>Asset:{asset}</p>
        </div>
    );
};

export default Special;