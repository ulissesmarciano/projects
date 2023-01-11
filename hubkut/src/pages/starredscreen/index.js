import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, RepositorieContainer } from './styles'
import axios from 'axios'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RepoPageItem from '../../components/RepoPageItem'


const StarredScreen = () => {
  const [loading, setLoading] = useState(true)
  const [starred, setStarred] = useState([])

  const userParams = useParams()
  const username = userParams.user


  const getStarredData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/starred`)
    return res
  }


  const getStarred = async (username) => {
    const details = await getStarredData(username)
    setStarred(details.data)
    setLoading()
  }

  useEffect(() => {
    getStarred(username)
  },[])

  return (<>
  {loading ? (
    <Loader />
  ):(
  <Container>
    <Header/>
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
  )}
  </>)
}

export default StarredScreen