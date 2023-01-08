import React from 'react'
import { PortableContainer, FullContainer } from './styles'

import LastRepoSection from './section/lastRepoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const PerfilScreen = () => {
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

export default PerfilScreen