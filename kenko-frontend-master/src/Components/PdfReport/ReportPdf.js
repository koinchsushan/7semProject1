import React from 'react';
import ReactToPrint from 'react-to-print';
import Button from '@material-ui/core/Button';

import PatientReport from './PatientReport';

function ReportPdf() {
    return (
      <div>
       <div  className='save-btn'>
       <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return<Button size="small" href="#outlined-buttons"><a href="#">Save pdf</a></Button> 
          }}
          content={() => this.componentRef}
        /></div> 
        <PatientReport ref={el => (this.componentRef = el)} />
      </div>
    );
  }

export default ReportPdf;