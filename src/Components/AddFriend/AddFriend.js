import React from 'react';
import './AddFriend.css';

const AddFriend = (props) => {
    const addFriend = props.addFriend

    let total = 0;
    for (let i = 0; i < addFriend.length; i++) {
        const person = addFriend[i];
        total = total + person.income;
    }

    return (
        <div className="addFriend-container">
            <h2>Friend Requests Sent</h2>
            <p>Total sent request: {addFriend.length}</p>
            <p>Their total income: {total} ৳</p>
        </div>
    );
};

export default AddFriend;