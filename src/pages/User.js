import React from 'react'
import UserList from '../component/userlist'
import './user.css'

const User  = ()=>{
    return(
        <div className="userContainer">
        <div className="userContainer-left">
            <UserList userURL="https://avatars.githubusercontent.com/u/2840504?s=120&v=4" userName="Akash "/>
            <UserList userURL="https://avatars.githubusercontent.com/u/30313834?s=120&v=4" userName="Rohan Sharma"/>
            <UserList userURL="https://avatars.githubusercontent.com/u/8964589?s=120&v=4" userName="Ronir"/>
            <UserList userURL="https://avatars.githubusercontent.com/u/7272927?s=120&v=4" userName="Chandel"/>
            <UserList userURL="https://avatars.githubusercontent.com/u/3462696?s=120&v=4" userName="Vibhor"/>
            <UserList userURL="https://avatars.githubusercontent.com/u/1638145?s=120&v=4" userName="Satender"/>
            <UserList userURL="https://avatars.githubusercontent.com/u/281736?s=120&v=4" userName="Rennt"/>
        </div>
        </div>
    );
}

export default User;