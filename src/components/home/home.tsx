import React, { Component, Fragment } from 'react'
import ReactFileReader from 'react-file-reader';

interface HomeProps{
     
}

interface HomeState{
    chartData:any
}



export default class Home extends Component<HomeProps,HomeState>{     

    handleFiles(files) {
        var reader = new FileReader();
        const homeInstance = this;
        reader.onload = function(e) {
            var result = reader.result as string;
            if(result){
                var splitedData = result.split(',');
                var filterNoEmptyData = splitedData.filter(s => {return  s.length > 0});
                homeInstance.reloadData(filterNoEmptyData);
            }
        }

        reader.readAsText(files[0]);
    }
    
    reloadData(data) {
            this.setState({chartData:{
                labels: ['January', 'February', 'March', 'April','Mai','Juin','July','August','September','October','November','December',],
                datasets: [{
                    label: 'Cas covid19',
                    data: data,
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
            });

      }

    constructor(props: HomeProps){
        super(props);
        this.state = {
            chartData:{
                
            }
        }

        this.handleFiles = this.handleFiles.bind(this);
                
    }


    render() {
        const headers = [
            { label: 'First Name', key: 'details.firstName' },
            { label: 'Last Name', key: 'details.lastName' },
            { label: 'Job', key: 'job' },
          ];
          
          const data = [
            { details: { firstName: 'Ahmed', lastName: 'Tomi' }, job: 'manager'},
            { details: { firstName: 'John', lastName: 'Jones' }, job: 'developer'},
          ];
        const Bar = require('react-chartjs-2').Bar

        return (
            <Fragment>
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
    
   

    <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
    <button className='btn'>Upload</button>
</ReactFileReader>
           </Fragment>
        )
    }
}
