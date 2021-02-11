import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Fresher',
		'1 year Experience',
		'2+ year Experience'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const Piee = ()=>{
    const displayName= 'Pie'
    return(
        <div>
        <h2 style={{paddingLeft: '1em'}}>User Overview</h2>
        <Pie data={data} />
      </div>
    );
}

export default Piee;