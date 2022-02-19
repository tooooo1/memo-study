import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { loginTask } from '../features/loginSlice';

const Wrapper = styled.div`
    && {
        display: flex;
        margin: 1rem;
        justify-content: flex-end;
    }
`;

export const Bt = styled.button`
    margin: 0;
    padding: 0 1rem;
    padding-top: 0.6rem;
    border:none;
    padding-bottom: 0.5rem;
    background: #4b89dc;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    transition: .3s all;
    &:hover, &:active {
        background: #4b10f2;
    }
    &:disabled {
        background-color: rgba(170,170,170);
        cursor : auto;
    }
`;

const ID = styled.div`
    padding: 0 2rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
`

export const Input = styled.input`
    border: 1px solid gray;
    outline: none;
    border-radius: 12px;
    line-height: 2rem;
    font-size: 1rem;
    padding: 10px 40px 10px 14px;
    margin: 0 1rem;
`;

const LoginTop = () => {
    const [value, setValue] = useState('');
    const [login, setLogin] = useState(false);
    const [loginda, setLoginda] = useState(true);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        if (e.target.value !== '') setLoginda(false);
        
        setValue(e.target.value);
    }

    const loginClick = () => {
        setLogin(!login);
        dispatch(loginTask(value));

        if (login) {
            setValue('');
            setLoginda(true);
            dispatch(loginTask(''));
        }
    }

    const loginID = useSelector((state) => state.login.value);


    return (
        <Wrapper>
            {loginID !=='' ? <ID>{loginID}</ID> : <Input onChange={handleLogin} />}
            <Bt onClick={loginClick} disabled={loginID ==='' && loginda}>
                {loginID !=='' ? "로그아웃" : "로그인"}
            </Bt>
        </Wrapper>
    );
};

export default LoginTop;