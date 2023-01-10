import React, { useEffect, useState } from 'react'
import { PortableContainer, FullContainer } from './styles'


import Greetings from './section/greetings'
import LastRepoSection from './section/lastRepoSection'
import ToDoSection from './section/toDoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const HomeScreen = () => {
  const [user, setUser] = useState()
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  console.log(user)

  const getUsername = useParams();
  const username = getUsername.user
 //console.log(username)

  const getUser = async (username) => {
    const details = await getUserData(username)
    setUser(details.data)
    //console.log(details.data)
  }

  const getRepos = async (username) => {
    const details = await getReposData(username)
    setRepos(details.data)
    //console.log(details.data)
  }

  const getStarred = async (username) => {
    const details = await getStarredData(username)
    setStarred(details.data)
    console.log(details.data)
  }


  const getUserData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)
    return res

    //console.log(res)
  }

  const getReposData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`)
    return res
  }

  const getStarredData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/starred`)
    return res
  }

  useEffect(() => {
    getUser(username)
    getRepos(username)
    getStarred(username)
  },[])
  
  return (<>
  <FullContainer>
    <PerfilSection
      src={user?.avatar_url}
      username={user?.name}
      workname={user?.bio}
      companyName={user?.company}
      pinName={user?.location}
      mailName={user?.email}
      mailHref={`mailto:${user?.email}`}
      portfolioHref={`https://${user?.blog}`}
      portfolioLinkName={user?.blog}
      twitterUsername={`@${user?.twitter_username}`}
      twitterHref={`http://twitter.com/${user?.twitter_username}`}
    />
    <PortableContainer>
      <Greetings 
      name={user?.name}
      toRepo={`/repositories/${user?.login}`}
      repoNum={repos.length}
      toStarred={`/starreds/${user?.name}`}
      starredNum={starred.length}
      toFollowers={`/followers/${user?.name}`}
      followersNum={user?.followers}
      toFollowing={`/following/${user?.name}`}
      followingNum={user?.following}
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