import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import styled from 'styled-components';
import { Bt, Input } from './LoginTop'

const Wrapper = styled.div`
    && {
        display: flex;
        margin: 1rem;
        margin-top: 5rem;
        justify-content: center;
        background-color: #5a60a8;
        padding: 1rem;
        border-radius: 12px;
    }
`;

const AddComment = () => {
    const login = useSelector((state) => state.login.value);
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
		e.preventDefault();

		if(value.trim().length === 0)
		{
			alert("뭐라도 입력하세요.");
			setValue("");
			return;
		}

		dispatch(
			addTask({
                task: value,
                pop: login,
                del: 0,
			})
		);

		setValue("");
	};


    return (
        <Wrapper>
            <Input value={value} onChange={(e) => setValue(e.target.value)} disabled={login === '' ? true : false } />
            <Bt onClick={onSubmit} disabled={login === '' ? true : false }>
                메모
            </Bt>
        </Wrapper>
    );
};

export default AddComment;