import React from 'react'

import { ProgressBar } from '../ProgressBar'

import {Container, WrapperTab, WrapperTabList, WrapperTabs, DescriptionContainer, WrapperTabPanel, AboutContainer, AboutItem, BStatsContainer, BSItem, TotalContainer, MovesContainer} from './styles'

import Male from '../../assets/icons/male.png'
import Female from '../../assets/icons/female.png'

const PokemonTablist = ({
    height,
    weight,
    abilities,
    male,
    female,
    eggGroup,
    eggCycle,
    hp,
    attack,
    defense,
    spAtk,
    spDef,
    speed,
    total,
    move
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
                    <BStatsContainer>
                        <BSItem>
                            <li>HP<span><p>{hp}</p><ProgressBar progress={hp} /></span></li>
                            <li>Attack<span><p>{attack}</p><ProgressBar progress={attack} /></span></li>
                            <li>Defense<span><p>{defense}</p><ProgressBar progress={defense} /></span></li>
                            <li>Sp. Atk<span><p>{spAtk}</p><ProgressBar progress={spAtk} /></span></li>
                            <li>Sp. Def<span><p>{spDef}</p><ProgressBar progress={spDef} /></span></li>
                            <li>Speed<span><p>{speed}</p><ProgressBar progress={speed} /></span></li>
                            <TotalContainer>
                                <li>Total<p>{total}</p></li>
                            </TotalContainer>
                        </BSItem>
                    </BStatsContainer>
                </WrapperTabPanel>
                <WrapperTabPanel>
                    <MovesContainer>
                        <ul >
                            {move}
                        </ul>
                    </MovesContainer>
                </WrapperTabPanel>
            </DescriptionContainer>
        </WrapperTabs>
    </Container>
  </>)
}

export { PokemonTablist}