import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'
import axios from 'axios'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RepoPageItem from '../../components/RepoPageItem'
import { IStarredScreen } from './types'


const StarredScreen = () => {
  const [loading, setLoading] = useState<any>(true)
  const [starred, setStarred] = useState<any[]>([])

  const userParams = useParams()
  const username: any = userParams.user


  const getStarredData = async (username: IStarredScreen) => {
    const res = await axios.get(`https://api.github.com/users/${username}/starred`)
    return res
  }


  const getStarred = async (username: IStarredScreen) => {
    const details = await getStarredData(username)
    setStarred(details.data)
    setLoading(false)
  }

  useEffect(() => {
    getStarred(username)
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
      {starred.map((data, index) => (
        <li key={index}>
          <RepoPageItem 
            to={`https://github.com/${data.owner.login}/${data.name}`}
            title={data.name}
            description={data.description}
            language={data.language}
          />
        </li>
      ))}
    </RepositorieContainer>
  </Container>
  </>)}
  </>)
}

export default StarredScreen