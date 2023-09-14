import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MyChart() {
  return (
    <div className='c' style={{width: 600, height: 300}}>
        <h1>Project Deliviries</h1>
        <Line 
            datasetIdKey='id'
            data={{ 
                labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',],
                datasets: [{
                    id: 1,
                    label: 'Achieved',
                    data: [20, 35, 75, 51, 41, 48],
                    backgroundColor: '#FF8C00',
                    borderColor: '#FFA500',
                },
                {
                    id: 2,
                    label: 'Target',
                    data: [41, 79, 58, 48, 9, 62, 70],
                    backgroundColor: '#0080ff',
                    borderColor: '#0080ff',
                },],
            }}
        >

        </Line>
    </div>
  )
}
