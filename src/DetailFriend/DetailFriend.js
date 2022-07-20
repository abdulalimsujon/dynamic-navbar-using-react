import React from 'react';
import { useParams } from 'react-router-dom';

const DetailFriend = () => {

    const { buddyId } = useParams();
    return (
        <div>
            <h1>This is a detail of a dosto :{buddyId}</h1>
        </div>
    );
};

export default DetailFriend;