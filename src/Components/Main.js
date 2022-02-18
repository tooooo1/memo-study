import React, { useState } from 'react';
import { AddComment, LoginTop, CommentsList } from '../Components'

const Main = () => {
    const [value, setValue] = useState('');
    const [login, setLogin] = useState(false);
    const [loginda, setLoginda] = useState(true);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = (e) => {
        if (e.target.value !== '') setLoginda(false);
        
        setValue(e.target.value);
    }

    const loginClick = () => {
        setLogin(!login);
        setDisabled(!disabled);

        if (!disabled) {
            setValue('');
            setLoginda(true);
        }
    }

    return (
    <>
            <LoginTop value={value} onClick={loginClick} hide={login} onChange={handleLogin} zero = {loginda} />
            <AddComment disabled={disabled} hide={!login}>메모</AddComment>
            <CommentsList>나는</CommentsList>
    </>
    )
};

export default Main;