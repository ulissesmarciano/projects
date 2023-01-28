import React from 'react'
import { Container } from './styles';

const ToggleButton = () => {
  return(
      <Container className="wrg-toggle">
          <div className="wrg-toggle-container">
              <div className="wrg-toggle-check">
                  <span>🌜</span>
              </div>
              <div className="wrg-toggle-uncheck">
                  <span>🌞</span>
              </div>
          </div>
          <div className="wrg-toggle-circle"></div>
          <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
      </Container>
  )
}

export default ToggleButton;