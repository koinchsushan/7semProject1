import React,{PureComponent} from 'react';
import './PdfReport.css';
import background from '../images/kenko-png.png'
import { useLocation } from 'react-router';

function PatientReport() {

  const location = useLocation();

    return (
      <div className="watermark">
        <h1 className="pr">Patient Report</h1>
        <div className="pdfreport">
          <div> 
              Patients's Name: <b>{location.state.Name}</b>
          </div>

          <div>
              Age: <b>{location.state.Age}</b>
          </div>

          <div>
            Gender: <b>{location.state.Gender}</b>
          </div>

          <div> 
            Symptoms: <b>{location.state.Symptom1}, {location.state.Symptom2}, {location.state.Symptom3}, 
                      {location.state.Symptom4}, {location.state.Symptom5}</b>
          </div>

          <div> 
            Predicted Disease: <b>{location.state.Result}</b>
          </div>
        
        </div>

        <div className='contact'>
          Contact us:
          <br></br>
          +977 9861030743
          <br></br>
          predictdisease@gmail.com
        </div>
      </div>
    );
}

export default PatientReport;