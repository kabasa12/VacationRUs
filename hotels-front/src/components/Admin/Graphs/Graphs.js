import React, { Component } from 'react';

import CanvasJSReact from './canvasjs.react';
import axios from 'axios'
import { Container, CssBaseline } from '@material-ui/core'


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graphs extends Component {
    
    state = {
        error: false,
        data: []
    };

    componentDidMount(){
        this.getStatistics();
    }   
    
    async getStatistics() {
        try {
            await axios.get(`http://www.localhost:4000/getStatistics`).then(response => {
                this.setState({ data: response.data })
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        
        let statistics = [];
        let dataPoint;
        
        if (this.state.data.data ) {
            statistics = [...this.state.data.data];
            dataPoint = statistics.map(data => {
                return { label: data.VacationName, y: data.OrderCount };
            });
        };
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title: {
                text: "Orders Statistics"
            },
            data: [{
                type: this.props.type,
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                dataPoints: dataPoint
            }]
        }
        return(
            <Container component="div" maxWidth="lg" style={{marginBottom: '3rem', marginTop: '2rem'}}>
                <CssBaseline />
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </Container>
        )
    };
}

export default Graphs;