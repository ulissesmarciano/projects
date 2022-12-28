import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react'
import { Container, TabContainer, TabName, LineSkill, SkillTitle, SkillContent, Icons, Subtitle, GenderContainer, SkillsContainer, MovesScreenContent, MoveEmpty, MoveName } from './styles'

import ProgressBar from '../ProgressBar/'

import Male from '../../assets/icons/male.png'
import Female from '../../assets/icons/female.png'

const AboutScreen = ({
    height,
    weight,
    abilities,
    male,
    female,
    eggGroup,
    eggCycle
}) => {
    return (
        <View>
            <LineSkill>
                <View>
                    <SkillTitle>Height</SkillTitle>
                    <SkillTitle>Weight</SkillTitle>
                    <SkillTitle>Abilities</SkillTitle>
                </View>
                <View>
                    <SkillContent>{height}</SkillContent>
                    <SkillContent>{weight}</SkillContent>
                    <View>
                        <SkillContent>{abilities}</SkillContent>
                    </View>
                </View>
            </LineSkill>
            <Subtitle>Breeding</Subtitle>
            <LineSkill>
                <View>
                    <SkillTitle>Gender</SkillTitle>
                    <SkillTitle>Egg Groups</SkillTitle>
                    <SkillTitle>Egg Cycle</SkillTitle>
                </View>
                <View>
                    <GenderContainer>
                    <SkillContent><Icons source={Male}/>{male}</SkillContent>
                    <SkillContent><Icons source={Female}/>{female}</SkillContent>
                    </GenderContainer>
                    
                    <SkillContent>{eggGroup}</SkillContent>
                    <SkillContent>{eggCycle}</SkillContent>
                </View>
            </LineSkill>
        </View>
    )
}

const BaseStatsScreen = ({
    hp,
    attack,
    defense,
    spAtk,
    spDef,
    speed,
    total
}) => {
    return(
        <View>
            <LineSkill>
                <View>
                    <SkillTitle>HP</SkillTitle>
                    <SkillTitle>Attack</SkillTitle>
                    <SkillTitle>Defense</SkillTitle>
                    <SkillTitle>Sp Atk</SkillTitle>
                    <SkillTitle>Sp Def</SkillTitle>
                    <SkillTitle>Speed</SkillTitle>
                    <SkillTitle>Total</SkillTitle>
                </View>
                <View>
                    <SkillContent>{hp} </SkillContent>
                    <SkillContent>{attack}</SkillContent>
                    <SkillContent>{defense}</SkillContent>
                    <SkillContent>{spAtk}</SkillContent>
                    <SkillContent>{spDef}</SkillContent>
                    <SkillContent>{speed}</SkillContent>
                    <SkillContent>{total}</SkillContent>
                </View>
                <SkillsContainer>
                    <ProgressBar progress={hp}/>
                    <ProgressBar progress={attack}/>
                    <ProgressBar progress={defense}/>
                    <ProgressBar progress={spAtk}/>
                    <ProgressBar progress={spDef}/>
                    <ProgressBar progress={speed}/>
                </SkillsContainer>
            </LineSkill>
        </View>
    )
}

const MovesScreen = ({name}) => {
    return(
        <MovesScreenContent>
            <MoveName>{name}</MoveName>
        </MovesScreenContent>
    )
}

export default function TabList({
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
}) {
    
    const [showFirstTab, setShowFirstTab] = useState(true)
    const [showSecondTab, setShowSecondTab] = useState(false)
    const [showThirdTab, setShowThirdTab] = useState(false)
    
    const changeFirstTab = () => {
        setShowFirstTab(true),
        setShowSecondTab(false),
        setShowThirdTab(false)
    }

    const changeSecondTab = () => {
        setShowSecondTab(true),
        setShowFirstTab(false),
        setShowThirdTab(false)
    }

    const changeThirdTab = () => {
        setShowThirdTab(true),
        setShowSecondTab(false),
        setShowFirstTab(false)
    }

    
  return (
    <Container>
      <TabContainer>
        <TouchableOpacity onPress={changeFirstTab}>
            {showFirstTab ? true : false}
            <TabName>About</TabName>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeSecondTab}>
            {showSecondTab ? false : true}
            <TabName>Base Stats</TabName>
        </TouchableOpacity >
        <TouchableOpacity onPress={changeThirdTab}>
            {showThirdTab ? false : true}
            <TabName>Moves</TabName>
        </TouchableOpacity >
      </TabContainer>
      <View>
        {showFirstTab && <AboutScreen
            height={height}
            weight={weight}
            abilities={abilities}
            eggGroup={eggGroup}
            eggCycle={eggCycle}
            male={male}
            female={female}
        />}
        {showSecondTab && <BaseStatsScreen
            hp={hp}
            attack={attack}
            defense={defense}
            spAtk={spAtk}
            spDef={spDef}
            speed={speed}
            total={total}
        />}
        {showThirdTab && 
            <FlatList
            data={move}
            numColumns={2}
            renderItem={(moves) => 
                <MovesScreen 
                    name={moves.item.props.children}
                />
            }
            />
        }
      </View>
    </Container>
  )
}

