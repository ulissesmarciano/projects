import React, { useEffect, useState } from 'react'
import { PortableContainer, FullContainer } from './styles'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


import Greetings from './section/greetings'
import LastRepoSection from './section/lastRepoSection'
import ToDoSection from './section/toDoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'
import ItemRepo from '../../components/RepoItem'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const HomeScreen = () => {
  const [user, setUser] = useState()
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  //console.log(user)

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
    //console.log(details.data)
  }

  const getFollowers = async (username) => {
    const details = await getFollowersData(username)
    setFollowers(details.data)
    //console.log(details.data)
  }

  const getFollowing = async (username) => {
    const details = await getFollowingData(username)
    setFollowing(details.data)
    //console.log(details.data)
  }

//==================================================================


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

  const getFollowersData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)
    return res
  }

  const getFollowingData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    return res
  }

  //console.log(following.map((data) => data))
  //console.log(user)

  //==================================================================

  useEffect(() => {
    getUser(username)
    getRepos(username)
    getStarred(username)
    getFollowers(username)
    getFollowing(username)
  },[])

  return (<>
  <FullContainer>
    <PerfilSection
      src={user?.avatar_url}
      username={user?.name}
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
      resume={user?.bio}
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
        sectionHref={`/repositories/${user?.login}`}
        itemRepositorie={repos.map((data, index) => (
        <li key={index}>
          <ItemRepo 
           urlRepo={data.full_name} 
           nameRepo={data.description}
           href={`https://github.com/${user?.login}/${data.name}`}
          />
        </li>
        )).slice(0, 5)}
      />
    </PortableContainer>
    <div>
      <FollowingSection 
        numOfFollwing={user?.following}
        toPageFollowing={`/following/${user?.login}`}
        followingItem={following.map((data, index) => (
          <li
          key={index}
          style={{
            backgroundImage: `url(${data.avatar_url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100px',
            width:'80px',
            height: '100px',
  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',

            borderRadius: '6px',

          }}
        ><Link key={index} to={`/perfil/${data.login}`}><div><p className='username'>{data.login}</p></div></Link></li>
        )).slice(0, 6)}
      />
      <FollowersSection 
        numOfFollowers={user?.followers}
        toPageFollowers={`/followers/${user?.login}`}
        followerItem={followers.map((data, index) => (
          <li
          key={index}
          style={{
            backgroundImage: `url(${data.avatar_url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100px',
            width:'80px',
            height: '100px',
  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',

            borderRadius: '6px',
          }}
        ><Link to={`/perfil/${data.login}`}><div key={index}><p>{data.login}</p></div></Link></li>
        )).slice(0, 6)}
      />
    </div>
  </FullContainer>
  </>)
}

export default HomeScreen