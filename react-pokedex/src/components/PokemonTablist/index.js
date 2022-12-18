import React from 'react'

import {Container, WrapperTab, WrapperTabList, WrapperTabs, DescriptionContainer, WrapperTabPanel, AboutContainer, AboutItem} from './styles'

import Male from '../../assets/icons/male.png'
import Female from '../../assets/icons/female.png'

const PokemonTablist = ({
    height,
    weight,
    abilities,
    male,
    female,
    eggGroup,
    eggCycle
}) => {
  return (<>
    <Container>
        <WrapperTabs>
            <WrapperTabList>
            <WrapperTab>About</WrapperTab>
            <span/>
            <WrapperTab>Base Stats</WrapperTab>
            <span/>
            <WrapperTab>Moves</WrapperTab>
            </WrapperTabList>
            <DescriptionContainer>
                <WrapperTabPanel>
                    <AboutContainer>
                        <AboutItem>
                            <li>Height <span><p>{height}</p></span></li>
                            <li>Weight <span><p>{weight}</p></span></li>
                            <li>Abilities <span><p>{abilities}</p></span></li>
                        <h2>Breeding</h2>
                            <li>Gender <div><span><img src={Male} alt="Símbolo Macho"/><p>{male}</p></span><span><img src={Female} alt="Símbolo Macho"/><p>{female}</p></span></div></li>
                            <li>Egg Group<p>{eggGroup}</p></li>
                            <li>Egg Cycle<p>{eggCycle}</p></li>
                        </AboutItem>
                    </AboutContainer>
                </WrapperTabPanel>
                <WrapperTabPanel>
                    
                </WrapperTabPanel>
                <WrapperTabPanel>
                    
                </WrapperTabPanel>
            </DescriptionContainer>
        </WrapperTabs>
    </Container>
  </>)
}

export { PokemonTablist}