import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buddy = (props) => {

    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/buddy/${id}`;

        navigate(path);

    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showFriendDetail}>{username} id {id}</button>
        </div>
    );
};

export default Buddy;