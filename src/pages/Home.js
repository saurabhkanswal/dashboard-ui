import React from 'react'
import StatiticsBox from '../component/Statitics-box'
import './home.css'
const Home  = ()=>{
    return(
        <div className="home-stat-box">
            <StatiticsBox number='233' title='CLIENTS'/>
            <StatiticsBox number='50+' title='PROJECTS'/>
            <StatiticsBox number='500+' title='DEVELOPES'/>
        </div>
    );
}

export default Home;