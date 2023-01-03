import React from 'react'
import { PortableContainer, FullContainer } from './styles'

import Greetings from './section/greetings'
import LastRepoSection from './section/lastRepoSection'
import ToDoSection from './section/toDoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'

const HomeScreen = () => {
  return (
  <FullContainer>
    <PerfilSection/>
    <PortableContainer>
      <Greetings />
      <ToDoSection/>
      <LastRepoSection/>
    </PortableContainer>
    <div>
      <FollowingSection />
      <FollowersSection />
    </div>
  </FullContainer>
  )
}

export default HomeScreen