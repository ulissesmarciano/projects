import React from "react";
import { BarContainer, StatusBar } from "./styles";


export default function ProgressBar({progress}) {
  return (
    <BarContainer>
        <StatusBar style={{width:`${progress}%`, backgroundColor: `${progress < 50 ? "red" : "green"}`}}/>
    </BarContainer>
  )
}