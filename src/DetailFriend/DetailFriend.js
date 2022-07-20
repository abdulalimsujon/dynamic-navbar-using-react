import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailFriend = () => {

    const { buddyId } = useParams();
    const [Friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${buddyId}`
        fetch(url)

            .then(res => res.json())
            .then(data => setFriend(data));

    }, [])
    return (
        <div>
            <h1>This is a detail of a dosto :{buddyId}</h1>
            <h2>Name : {Friend.name}</h2>
            <h3>Email : {Friend.website}</h3>
            <p><small>city: {Friend.address?.city}</small></p>
        </div>
    );
};

export default DetailFriend;