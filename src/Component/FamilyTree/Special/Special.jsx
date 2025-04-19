import React, { useContext } from 'react';
import { AssetContext } from '../RootGandpa/FamilyTree';

const Special= ({name ,asset}) => {
  const newAsset = useContext(AssetContext);
  console.log(newAsset,'new fire')
    return (
        <div>
          <h3>{name}</h3>  
          <p>Asset:{asset}</p>
          <p>New Asset:{newAsset}</p>
        </div>
    );
};

export default Special;