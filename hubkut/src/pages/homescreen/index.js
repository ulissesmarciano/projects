import React from 'react'
import { PortableContainer, FullContainer } from './styles'

import Greetings from './section/greetings'
import LastRepoSection from './section/lastRepoSection'
import ToDoSection from './section/toDoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const HomeScreen = () => {
  return (<>
  <FullContainer>
    <PerfilSection
      src={PerfilImage}
      username='Ulisses Marciano'
      workname='Front-end developer'
      companyName='@Estágio'
      pinName='Campinas/SP'
      mailName='ulissesmkt2104@gmail.com'
      mailHref={`mailto:ulissesmkt2104@gmail.com`}
    />
    <PortableContainer>
      <Greetings 
      name="Ulisses"
      toRepo="/repositories"
      toStarred="/starreds"
      toFollowers="/followers"
      toFollowing="/following"
      />
      <ToDoSection/>
      <LastRepoSection
        href="/repositories"
        urlRepo="ulissesmarciano/hubkut"
        nameRepo="Github + Orkut"
      />
    </PortableContainer>
    <div>
      <FollowingSection 
        numOfFollwing="216"
        avatarUser={PerfilImage}
        userName="user"
      />
      <FollowersSection 
        numOfFollwing="1.1k"
        avatarUser={PerfilImage}
        userName="user"
      />
    </div>
  </FullContainer>
  </>)
}

export default HomeScreen