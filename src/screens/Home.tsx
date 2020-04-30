import React, { Component } from 'react'
import {Bar,Line, Pie} from 'react-chartjs-2';


interface Props{

}

interface State{
    chartData: any
}

export default class Home extends Component<Props,State>{     

    constructor(props: any){
        super(props);
        this.state = {
            chartData:{
                labels: ['January', 'February', 'March', 'April','Mai','Juin','July','August','September','October','November','December',],
                datasets: [{
                    label: 'Cas covid19',
                    data: [20, 50, 90, 120, 160, 190, 200,250,300,10,0,0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(88, 92, 225, 0.3)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(78, 125, 225, 0.3)',
                        'rgba(220,20,60,0.5)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(88, 92, 225, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(78, 125, 225, 1)',
                        'rgba(220,20,60,0.3)'
                        
                    ],
                    borderWidth: 1
                }]
            }
        }
        
    }

    componentDidMount() {
     
    }
    render() {
        return (
           <Bar
           data = {this.state.chartData}
           options = {{

            title:{
                display:true,
                text:'Privision Covi19 au Maroc',
                fontSize:25
            }
           }}
           />
        )
    }
}
