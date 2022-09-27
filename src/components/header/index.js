import React from 'react'
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const Header = () => {
  return (
    <NavigationBar>
        <Logo src='/images/logo.svg' />
        <NavigationMenu>
          <NavigationItem 
            href={'#'}
            src={'/images/home-icon.svg'}
            text={'home'}
             />
          <NavigationItem 
            href={'#'}
            src={'/images/search-icon.svg'}
            text={'serch'}
             />
          <NavigationItem 
            href={'#'}
            src={'/images/watchlist-icon.svg'}
            text={'watchlist'}
             />
          <NavigationItem 
            href={'#'}
            src={'/images/original-icon.svg'}
            text={'originals'}
             />
          <NavigationItem 
            href={'#'}
            src={'/images/movie-icon.svg'}
            text={'movies'}
             />
          <NavigationItem 
            href={'#'}
            src={'/images/series-icon.svg'}
            text={'series'}
             />
            
        </NavigationMenu>

        <UserImage src='/images/thispersondoesntexist.jpg'></UserImage>
        
    </NavigationBar>
  )
}

export default Header;


const NavigationBar = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items:center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`

const NavigationMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  aligh-items: center;
`

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`