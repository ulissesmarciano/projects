import React, {useState, useEffect} from 'react'
import { PortableContainer, FullContainer } from './styles'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import LastRepoSection from './section/lastRepoSection'
import PerfilSection from './section/perfilSection'
import FollowingSection from './section/followingSection'
import FollowersSection from './section/followersSection'
import ItemRepo from '../../components/RepoItem'
import Loader from '../../components/Loader'

const PerfilImage = 'https://avatars.githubusercontent.com/u/104742158?s=400&u=b793765b9ab0c8f5bec5e2c7580678cac6bce511&v=4'

const PerfilScreen = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  const userParams = useParams()
  const username = userParams.user


  const getUserData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)
    return res
  }

  const getReposData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`)
    return res
  }

  const getFollowingData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    return res
  }

  const getFollowersData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)
    return res
  }



  const getUser = async (username) => {
    const details = await getUserData(username)
    setUser(details.data)
    setLoading()
  }

  const getRepos = async (username) => {
    const details = await getReposData(username)
    setRepos(details.data)
  }

  const getFollowing = async (username) => {
    const details = await getFollowingData(username)
    setFollowing(details.data)
    setLoading()
  }

  const getFollowers = async (username) => {
    const details = await getFollowersData(username)
    setFollowers(details.data)
    setLoading()
  }

  useEffect(() => {
    getUser(username)
    getRepos(username)
    getFollowers(username)
    getFollowing(username)
  },[])

  
  return (<>
    {loading? (
      <Loader />
    ):(
    <>
      <Header/>
      <FullContainer>
        <PerfilSection
          src={user?.avatar_url}
          perfilName={user?.name}
          companyName={user?.company}
          pinName={user?.location}
          mailName={user?.email}
          mailHref={`mailto:${user?.email}`}
          linkName={user?.blog}
        />
        <PortableContainer>
          <LastRepoSection
            resume={user?.bio}
            href={`/repositories/${user?.login}`}
            itemRepo={repos.map((data, index) => (
              <ItemRepo
                key={index}
                urlRepo={data.full_name}
                nameRepo={data.description}
              />
            )).slice(0, 5)}
          />
        </PortableContainer>
        <div>
          <FollowingSection 
            numOfFollwing={user?.following}
            perfilUser={following.map((data, index) => (
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
            ><a key={index} href={`/perfil/${data.login}`}><div><p className='username'>{data.login}</p></div></a></li>
            )).slice(0, 6)}
          />
          <FollowersSection 
            numOfFollwing="1.1k"
            itemRepo={followers.map((data, index) => (
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
            ><a key={index} href={`/perfil/${data.login}`}><div><p className='username'>{data.login}</p></div></a></li>
            )).slice(0, 6)}
          />
        </div>
      </FullContainer>
    </>
    )}
  </>)
}

export default PerfilScreen