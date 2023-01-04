import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 3rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #308BC5;
`

export const Container = styled.div`
  max-width: 93rem;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const IconContainer = styled.div`
  padding: 0.5rem 1rem;

  background-color: #fff;
  border: none;
  border-radius: 50px;

  img{
    height: .8rem;
  }
`

export const SidebarButtonContainer = styled.div`
  @media (min-width: 769px){
    display: none;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const LinksContainer = styled.div`
  display: none;

  @media (min-width: 769px){
    margin: 0 1rem;
    width: 60%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SearchContainer = styled.div`
  padding: 0 1rem;


  display: flex;
  justify-content: space-between;
  align-items: center;
`