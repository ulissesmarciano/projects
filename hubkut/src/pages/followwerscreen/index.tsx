import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'
import axios from 'axios'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import UserListItem from '../../components/UserListItem'
import { IFollowersScreen } from './types'

const FollowersScreen = () => {
  const [loading, setLoading] = useState<any>(true)
  const [followers, setFollowers] = useState<any[]>([])

  const userParams = useParams()
  const username: any = userParams.user


  const getFollowersData = async (username: IFollowersScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)
    return res
  }

  const getFollowers = async (username: IFollowersScreen) => {
    const details = await getFollowersData(username)
    setFollowers(details.data)
    setLoading(false)
  }
  
  useEffect(() => {
    getFollowers(username)
  },[])



  return (<>
    {loading ? (
      <Loader />
    ):(<>
    <Header headerHref={`/home/${username}`}/>
    <Container>
      <div className='backLink'>
        <Link to={`/home/${username}`} >voltar</Link>
      </div>
      <RepositorieContainer>
        {followers.map((data, index) => (
          <li key={index}>
            <UserListItem 
              key={index}
              avatar={data.avatar_url}
              name={data.login}
              to={`/perfil/${data.login}`}
            />
          </li>
        ))}
      </RepositorieContainer>
    </Container>
    </>)}
  </>
    
  )
}


export default FollowersScreen