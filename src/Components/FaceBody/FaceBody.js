import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import './FaceBody.css'
import Person from '../Person/Person';
import AddFriend from '../AddFriend/AddFriend';

const FaceBody = () => {
    const [persons] = useState(fakeData);
    const [addFriend, setAddFriend] = useState([])

    const handleAddFriend = (person) =>{
        const newAddFriend = [...addFriend, person];
        setAddFriend(newAddFriend);
    }
    
    return (
        <div className="faceBody-container">
            <div className="person-container">   
                    {
                        persons.map(per =><Person
                            handleAddFriend = {handleAddFriend}
                            person={per}
                            ></Person>)
                    }
            </div> 
            <div className="addFriend-container">
                    <AddFriend addFriend={addFriend}></AddFriend>
            </div>
        </div>
    );
};

export default FaceBody;