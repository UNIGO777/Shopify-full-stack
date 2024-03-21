import React from 'react';
import { Chart as ChartJs , defaults} from 'chart.js/auto';
import { Bar,Line,Doughnut, Radar } from 'react-chartjs-2';
// import Utils from './Utils';
 // to make sure the chart is  not stretched


const LineChart = () => {
    

    return (
        <>
            
            <Line  data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July",  "Aug","Sep", "Oct", "Nav", "Dis"],
                datasets: [
                    
                    {
                        label: "Sales",
                        data: [200, 800, 600,200,150,300,900,400,700,600,500,300],
                        backgroundColor: "#dadada",
                        borderColor: "rgb(72, 0, 255)",
                        tension:  0.4
                    },
        
                ],
            }}  /> 
        </>
    );
};

export default LineChart;