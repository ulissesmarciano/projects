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
import { IPerfilScreen } from './types'


const PerfilScreen = () => {
  const [loading, setLoading] = useState<any>(true)
  const [user, setUser] = useState<any>()
  const [repos, setRepos] = useState<any[]>([])
  const [followers, setFollowers] = useState<any[]>([])
  const [following, setFollowing] = useState<any[]>([])

  const userParams = useParams()
  const username: any = userParams.user


  const getUserData = async (username: IPerfilScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)
    return res
  }

  const getReposData = async (username: IPerfilScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`)
    return res
  }

  const getFollowingData = async (username: IPerfilScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    return res
  }

  const getFollowersData = async (username: IPerfilScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)
    return res
  }



  const getUser = async (username: IPerfilScreen) => {
    const details = await getUserData(username)
    setUser(details.data)
    setLoading(false)
  }

  const getRepos = async (username: IPerfilScreen) => {
    const details = await getReposData(username)
    setRepos(details.data)
  }

  const getFollowing = async (username: IPerfilScreen) => {
    const details = await getFollowingData(username)
    setFollowing(details.data)
  }

  const getFollowers = async (username: IPerfilScreen) => {
    const details = await getFollowersData(username)
    setFollowers(details.data)
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
      <Header headerHref={`/home/${username}`}/>
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
            sectionHref={`/repositories/${user?.login}`}
            itemRepo={repos.map((data, index) => (
              <ItemRepo
                key={index}
                urlRepo={data.full_name}
                nameRepo={data.description} 
                href={`https://github.com/${username}/${data.name}`}/>
            )).slice(0, 5)}
          />
        </PortableContainer>
        <div>
          <FollowingSection 
            numOfFollwing={user?.following}
            followingHref={''}
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
            numOfFollowers={user?.followers}
            followersHref={''}
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