import React from 'react'
import './post.css'
import BlogList from '../component/blog-list'
import StatiticsBox from '../component/Statitics-box'

const Post  = ()=>{
    return(
        <div className="bloglist-container">
        <div className="bloglist-container-left">
            <BlogList title='A tale of Gandhi'/>
            <BlogList title='All you need to build serverless apps'/>
            <BlogList title='Github Actions and Go: AreYouOk My URL?'/>
            <BlogList title='What is The Open Web and Why is it Dying?'/>
            <BlogList title='From Startup to F@*kup: How To Protect Your Online Reputation'/>
            <BlogList title='Why Clubhouse’s Invite-Only Strategy is (Still) Great Growth Hack'/>
            <BlogList title='How To Build An OBD2 Reader For Car Diagnostics'/>
            <BlogList title='Robinhood x Gamestop for Dummies - A Conversation Between 2 GenZ'/>
            <BlogList title='How To Make a Twitter Graph with Slash GraphQL'/>
        </div>
        <div className="bloglist-container-right">
            <StatiticsBox number='150+' title='Tech Blogs'/>
            <StatiticsBox number='500+' title='Cooking Blogs'/>
            <StatiticsBox number='455+' title='Daily Life Blogs'/>
        </div>
        </div>
    );
}

export default Post;