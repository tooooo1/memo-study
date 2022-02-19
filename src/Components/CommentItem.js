import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

const List = styled.li`
    background-color: rgba(255,255,255,0.8);
    padding: 1rem 10rem;
    border-radius: 12px;
    text-align: center;
    margin: 4rem;
`

const Writer = styled.div`
    position: relative;
    top: -55px;
    font-size: 3rem;
    font-weight: bolder;
    padding: 1rem 0;
`

const Content = styled.div`
    font-size: 1.2rem;
`

const YMD = styled.div`
    font-size: 0.8rem;
    opacity: 0.5;
    position: relative;
    top: 20px;
`

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    top: -160px;
    left: 215px;
`

const CommentItem = ({ id, text, loginid, year, day, month, sec }) => {
    const user = useSelector((state) => state.login.value);
    const dispatch = useDispatch();
    let currentdate = new Date();
    let currentsec = currentdate.getSeconds;

    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    };

    const tick = () => {
        if (user.sec + 30 >= 60) 
            if (user.sec - 30 === currentsec) removeTask()
        else if (user.sec + 30 === currentsec) removeTask()
    }
    
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    })
    

	return (
        <List>
            <Writer>{loginid}</Writer>
            <Content>{text}</Content>
            <div>{sec}</div>
            <YMD>{year}/{month + 1}/{day}</YMD>
            { loginid === user ? <Button onClick={() => { removeTask(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64px" height="64px"><path fill="#D62127" d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z" /><path fill="#EE4344" d="M294.1,258.8l97.1-112.7c10.6-12.3,9.2-30.8-3.1-41.4c-12.3-10.6-30.8-9.2-41.4,3.1l-91.3,106l-91.3-106c-10.6-12.3-29.1-13.7-41.4-3.1c-12.3,10.6-13.7,29.1-3.1,41.4l97.1,112.7l-97.1,112.7c-10.6,12.3-9.2,30.8,3.1,41.4c5.5,4.8,12.4,7.1,19.2,7.1c8.2,0,16.5-3.5,22.3-10.2l91.3-106l91.3,106c5.8,6.7,14,10.2,22.3,10.2c6.8,0,13.6-2.3,19.2-7.1c12.3-10.6,13.7-29.1,3.1-41.4L294.1,258.8z" /></svg>
            </Button> : <Button></Button> }
            
		</List>
	);
};

export default CommentItem;