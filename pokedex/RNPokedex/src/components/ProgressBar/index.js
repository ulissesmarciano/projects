import React from "react";
import { BarContainer, StatusBar } from "./styles";


export default function ProgressBar() {
  return (
    <BarContainer>
        <StatusBar style={{width: '80%', backgroundColor: `green`}}/>
    </BarContainer>
  )
}