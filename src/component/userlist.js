import React from 'react'
import './component-styles/userlist.css'
import { Avatar } from '@material-ui/core'
import * as FaIcons from 'react-icons/fa';


const UserList = (props)=>{
    return(
        <div className="userlist-container">
        <div className="userlist">
            <span id="avatar-user">
            <Avatar src={props.userURL}/>
            </span>
            <p>{props.userName}</p>
        </div>
        <div class="userlist-icon">
        <ul>
            <li><FaIcons.FaGithubSquare size={35}/></li>
            <li><FaIcons.FaLinkedin size={35}/></li>
            <li><FaIcons.FaInstagramSquare size={35}/></li>
        </ul>
        </div>
        </div>
    );
}

export default UserList;