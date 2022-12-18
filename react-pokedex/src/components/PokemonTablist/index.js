import React from 'react'

import {Container, WrapperTab, WrapperTabList, WrapperTabs, DescriptionContainer, WrapperTabPanel, AboutContainer, AboutItem} from './styles'

import Male from '../../assets/icons/male.png'
import Female from '../../assets/icons/female.png'

const PokemonTablist = ({
    height,
    weight,
    abilities
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
                            <li>Gender<span><p>{abilities}</p></span></li>
                            <li>Abilities <span><p>{abilities}</p></span></li>
                            <li>Abilities <span><p>{abilities}</p></span></li>
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