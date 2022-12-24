import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react'
import { Container, TabContainer, TabName, LineSkill, SkillTitle, SkillContent, Icons, Subtitle, SkillsContainer, MovesScreenContent, MoveEmpty } from './styles'

import ProgressBar from '../ProgressBar/'

import Male from '../../assets/icons/male.png'
import Female from '../../assets/icons/female.png'

const AboutScreen = () => {
    return (
        <View>
            <LineSkill>
                <View>
                    <SkillTitle>Height</SkillTitle>
                    <SkillTitle>Weight</SkillTitle>
                    <SkillTitle>Abilities</SkillTitle>
                </View>
                <View>
                    <SkillContent>2'3.6" (0.70 cm)</SkillContent>
                    <SkillContent>15.2 lbs (6.9 kg)</SkillContent>
                    <SkillContent>Overgrow, Chlorophyl</SkillContent>
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
                    <SkillContent><Icons source={Male}/> 87.5% <Icons source={Female}/> 12.5%</SkillContent>
                    <SkillContent>Monster</SkillContent>
                    <SkillContent>Grass</SkillContent>
                </View>
            </LineSkill>
        </View>
    )
}

const BaseStatsScreen = () => {
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
                    <SkillContent>45 </SkillContent>
                    <SkillContent>60</SkillContent>
                    <SkillContent>48</SkillContent>
                    <SkillContent>65</SkillContent>
                    <SkillContent>65</SkillContent>
                    <SkillContent>45</SkillContent>
                    <SkillContent>317</SkillContent>
                </View>
                <SkillsContainer>
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                    <ProgressBar />
                </SkillsContainer>
            </LineSkill>
        </View>
    )
}

const MovesScreen = () => {
    return(
        <MovesScreenContent>
            <Text>Teste</Text>
        </MovesScreenContent>
    )
}

export default function TabList() {
    
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

    
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
   
    const columns = 3
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
        {showFirstTab && <AboutScreen/>}
        {showSecondTab && <BaseStatsScreen/>}
        {showThirdTab && 
            <FlatList 
            data={createRows(data, columns)}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <MoveEmpty />;
              }
              return (
                <MovesScreen />
              );
            }}
          />
        }
      </View>
    </Container>
  )
}

function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
  
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
  
    return data;
  }