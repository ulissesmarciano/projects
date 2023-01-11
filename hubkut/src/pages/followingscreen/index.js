import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { Container, RepositorieContainer } from './styles'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import UserListItem from '../../components/UserListItem'

const FollowingScreen = () => {
  const [loading, setLoading] = useState(true)
  const [followers, setFollowers] = useState([])

  const userParams = useParams()
  const username = userParams.user


  const getFollowersData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)
    return res
  }


  const getFollowers = async (username) => {
    const details = await getFollowersData(username)
    setFollowers(details.data)
    setLoading()
  }
  
  useEffect(() => {
    getFollowers(username)
  },[])

  return (<>
    {loading ? (
      <Loader />
    ):(
    <Container>
      <Header />
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
    )}
  </>
    )
}


export default FollowingScreen