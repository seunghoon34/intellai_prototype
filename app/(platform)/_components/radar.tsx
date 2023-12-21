'use client'
import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
import getUserProgress from './getUserProgress';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
    
  );

const RadarGraph= ({labels, values}:{labels:string[], values:number[]}) => {
    

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Accuracy(%)',
            data: values,
            backgroundColor: 'rgba(102,102,255, 0.2)',
            borderColor: 'rgba(102,102,255,1)',
            borderWidth: 2,
          },
        ],
      };

      const options = {
        scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        responsive: true,
        maintainAspectRatio: false,

      }

    
  return (
    <Radar  data={data} options={options} />
  )
}

export default RadarGraph