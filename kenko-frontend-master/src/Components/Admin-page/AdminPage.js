import React from 'react';

import './AdminPage.css';

function AdminPage() {
    return(
           <div>
            <div className="admin-bar">
                <div className="logo">
                    <text className="logo-text">kenko</text>
                </div>
                <div className="diseaselabel">Disease Prediction System</div>
                
                <div className='AccountLogin'><AccountLogin/></div>
            </div>
           </div>
    )
}

export default AdminPage;