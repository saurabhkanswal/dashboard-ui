import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './component-styles/blog-list.css'

const BlogList= (props)=>{
    return(
        <div className="blog-list">
            <p>{props.title}</p>
            <div id="list-icon">
            <FaIcons.FaAngleDoubleRight size={25}/>
            </div>
        </div>
    );
}

export default BlogList;