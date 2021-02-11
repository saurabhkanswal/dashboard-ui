import React from 'react'
import StatiticsBox from '../component/Statitics-box'
import './home.css'
import Chart from '../component/chart'
import Pie from '../component/Pie'
const Home  = ()=>{
    return(
        <div className="home">
        <div className="home-stat-box">
            <StatiticsBox number='233' title='CLIENTS'/>
            <StatiticsBox number='50+' title='PROJECTS'/>
            <StatiticsBox number='500+' title='DEVELOPERS'/>
        </div>
        <div className="chart-container">
            <div className="chart"><Chart/></div>
            <div className="pie">
            <div className="pie-top"><Pie/></div>
            <div className="pie-bottom"><p>View More</p></div>
            </div>
        </div>
        </div>
    );
}

export default Home;