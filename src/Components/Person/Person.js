import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Person.css'

const Person = (props) => {
    const {img, name, email, address, income} = props.person;
    return (
        <div className="person">
            <div>
                <img className="per-image" src={img} alt=""/>
            </div>
            <div className="text">
                <h3>{name}</h3>
                <p>{email}</p>
                <p><small>Lives in {address}</small></p>
                <p><strong>Income: {income} ৳</strong></p>
                <button className="addButton"
                onClick={() => props.handleAddFriend(props.person)}><FontAwesomeIcon icon={faUserPlus} />Add Friend</button>
            </div>
        </div>
    );
};

export default Person;