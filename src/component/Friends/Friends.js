import React, { useEffect, useState } from 'react';
import Buddy from '../buddy/Buddy';




const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));

    }, [])
    return (
        <div>
            <h2>Hellow friend ..How are you?</h2>
            <p>parle kicu tk dhar de{friends.length} </p>
            {
                friends.map(friend => <Buddy
                    key={friend.id}
                    friend={friend}

                ></Buddy>)
            }
        </div>
    );
};

export default Friends;