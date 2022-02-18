import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

const CommentItem = ({ id, title, loginid }) => {
	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}
    

	return (
        <li>
            <div>
                {loginid}
            </div>
			<div>
				{title}
			</div>
			<div>
				<button onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default CommentItem;