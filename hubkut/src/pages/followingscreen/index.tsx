import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { Container, RepositorieContainer } from './styles'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import UserListItem from '../../components/UserListItem'
import { IFollowingScreen } from './types'

const FollowingScreen = () => {
  const [loading, setLoading] = useState<any>(true)
  const [following, setFollowing] = useState<any[]>([])

  const userParams = useParams()
  const username: any = userParams.user 



  const getFollowingData = async (username: IFollowingScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    return res
  }


  const getFollowing = async (username: IFollowingScreen) => {
    const details = await getFollowingData(username)
    setFollowing(details.data)
    setLoading(false)
  }
  
  useEffect(() => {
    getFollowing(username)
  },[])

  return (<>
    {loading ? (
      <Loader />
    ):(<>
    <Header />
    <Container>
      <div className='backLink'>
        <Link to={`/home/${username}`} >voltar</Link>
      </div>
      <RepositorieContainer>
        {following.map((data, index) => (
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


export default FollowingScreen