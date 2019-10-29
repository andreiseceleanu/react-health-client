import React, { Component } from 'react';
import axios from 'axios'



class PatientList extends Component {

    state = {
        patients : []
    }
    
    componentDidMount = () => {
       
        const url = 'http://localhost:59074/patients';
       axios.get(url)
       .then(response => {
           console.log(response)
           this.setState({
               patients: response.data
           })
       })
        .then(contents => console.log(contents))

        
      
    }

    render() {
        
        const { patients } = this.state;
        const patientList = patients.length ? (
            patients.map(patient => {
                return(
                    <div className="post card" key={patient.patientId}>
                        <div className="card-content">
                            <span className="card-title">{patient.name}</span>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No patients</div> 
        )

        return (
            <div className = "container">
                <h4 className="center">Patients</h4>
                {patientList}
            </div>
        )

    }
}

export default PatientList;