import React from 'react'
import { IToggle } from './types';
import { Container } from './styles';

const ToggleButton = ({onChange}:IToggle) => {
  return(
    <Container onChange={onChange}>
      <p>🌞</p>
      <input type="checkbox"/>
      <span></span>
      <p>🌜</p>
    </Container>
    // <Container className={className} onChange={onChange}>
    //   <div className="wrg-toggle-container">
    //       <div className="wrg-toggle-check">
    //           <span>🌞</span>
    //       </div>
    //       <div className="wrg-toggle-uncheck">
    //           <span>🌜</span>
    //       </div>
    //   </div>
    //   <div className="wrg-toggle-circle"></div>
    //   <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
    // </Container>
  )
}

export default ToggleButton;