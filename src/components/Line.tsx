//Temporary file
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
//Que cambie de color dependiendo de la teperatura 
//Que cambie de color con la temperatura ver Advanced en samples
const lineChartData = {
    labels: [
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
    ],
    datasets: [
        {
            label: 'My Steps',
            data: [3000,5000,4500,6000,8000,7000,9000],
            borderColor: "blue"
        },

        {
            label: 'My Steps',
            data: [3000,4000,6000,4000,7000,8000,9500],
            borderColor: "red"
        },
    ]
}

export const LineGraph = () => {

    const options={
        responsive: true,
        plugins: {
            legend:{
                position: 'bottom'
            },
            title:{
                display: true,
                text: "Hola bebe"
            }
        }
    }

    const data={}

    return (
        <Line options={options} data={lineChartData}  />
    )
};