import React, { useState } from 'react';

const UseStateWithObjects = () => {
    const [name, setName] = useState({
        firstname: 'IRFAN',
        lastname: 'ULLAH',
        dev: 'DEVELOPER',
    });

    const changeData = () => {
        setName({
            ...name,
            firstname: 'RANA',
            dev: 'Engineer',
        });
    };

    return (
        <>
            <h1>My name is {name.firstname} {name.lastname} I AM {name.dev}</h1>
            <button onClick={changeData}>Change</button>
        </>
    );
};

export default UseStateWithObjects;
