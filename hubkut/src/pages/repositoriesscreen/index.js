import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, RepositorieContainer } from './styles'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RepoPageItem from '../../components/RepoPageItem'



const RepositorieScreen = () => {
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState()
  const userParams = useParams()
  const username = userParams.user

  const getReposData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`)
    return res
  }

  const getRepos = async (username) => {
    const details = await getReposData(username)
    setRepos(details.data)
    setLoading()
  }


  useEffect(() => {
    getRepos(username)
  },[])

  //console.log(repos)

  return (<>
    {loading ? (
      <Loader/>
    ):(
    <Container>
      <div className='backLink'>
        <Link to='/home' >voltar</Link>
      </div>
      <RepositorieContainer>
        <li>
          <RepoPageItem 
          to=''
          title='decolatech3-dio-curso-introducao-ao-javascript'
          description='Repositório sobre o curso de introdução ao JavaScript'
          language='JavaScript'
          />
        </li>
      </RepositorieContainer>
    </Container>
    )}
  </>)
}

export default RepositorieScreen