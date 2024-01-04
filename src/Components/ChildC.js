import React from 'react';
import { data, data1 } from './ContextApi';

const ChildC = () => {
  return (
    <>
      <data.Consumer>
        {(name) => (
          <data1.Consumer>
            {(clas) => (
              <h2>My Name is  {name} have done {clas}</h2>
            )}
          </data1.Consumer>
        )}
      </data.Consumer>
    </>
  );
}

export default ChildC;
