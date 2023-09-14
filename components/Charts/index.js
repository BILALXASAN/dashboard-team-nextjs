import React, { useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
    Bar,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent, 
} from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun'];

const data = {
    labels,
    datasets: [
        {
            id: 1,
            label: 'Sales',
            backgroundColor: '#FF8C00',
            borderColor: '#FFA500',
            // data: labels.map((item) => faker.datatype.number({min: 0, max: 50}))
            data: [21, 34, 74, 51, 41, 47],
        },
        {
            id: 2,
            label: 'Leads',
            backgroundColor: '#0080ff',
            borderColor: '#0080ff',
            // data: labels.map((item) => faker.datatype.number({min: 0, max: 50}))
            data: [40, 79, 56, 47, 62, 70],
        },
    ]
}

const options = {
    responsive: true,
    plugins: {
    legend: {
      position: 'top',
    },
  },
}

export default function MyBarChart() {

    const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const chartRef = useRef(null);

    const clickToBar = (event) => {
        const chart = chartRef.current;

            if (!chart) {
                return;
            }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
    }

  return (
        <div className='Bar' style={{width: 400, height: 400, marginRight: '50px'}}>
            <h1>Bar Chart</h1>
            <Bar ref={chartRef} data={data} options={options} onClick={clickToBar} />
        </div>
    )
}
