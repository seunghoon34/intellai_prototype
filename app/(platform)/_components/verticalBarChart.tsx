'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const VerticalBarChart= ({labels, value1, value2}:{labels:string[], value1:number[],value2:number[]}) => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Average Time(seconds)',
          },
        },
        
      } 
      ;
      
      
      
     const data = {
        labels: labels,
        datasets: [
          {
            label: 'Correct',
            data: value1,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Incorrect',
            data: value2,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

      return <Bar options={options} data={data} />
}

export default VerticalBarChart