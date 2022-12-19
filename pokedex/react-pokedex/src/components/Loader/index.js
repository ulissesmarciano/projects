import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Spinner animation="border" role="status"/>
                <span style={{marginTop: "2rem"}}><strong>Loading...</strong></span>
        </div>
        )
            
}

export default Loader