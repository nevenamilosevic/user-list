import { UserList } from "./SomeUser"; 
import React, { useState} from "react";
import './User.css'

export const User = () => {

    const [users] = useState(UserList);
    const generateUser = users.sort(() => Math.random()).slice(0, 9);

    return (
        <div className="container">
            {generateUser.map(user => (
            
                <div key={user.email} className="userProfile">
                    
                        <img src={user.picture.large} alt="user"/>
                        <div className="userInfo">
                            <p>Name: {user.name.first}</p>
                            <p>Email: {user.email}</p>
                            <p>Date of birth: {new Date(user.dob.date).toLocaleDateString()}</p>
                        </div>
                    
                   
                </div>
            ))}
        </div>
    )
}