import React from 'react'
import styled from 'styled-components'
import MenuLink from './MenuLink'
import homeIcon from '@styled-icons/boxicons-solid/Home'
import fileIcon from '@styled-icons/boxicons-solid/FileDoc'
import giftIcon from '@styled-icons/boxicons-solid/Gift'
import govIcon from '@styled-icons/remix-fill/Government'
const Container  = styled.div`
margi-top:2rem;
width:100%;

`
const ProfileImage  = styled.img`
    width:8%;
    height:8%;
    border-radius: 50%;

`

const ProfileName  = styled.h1`
  
`

const Menu = () => {
    return (
    <Container>
                <MenuLink title="Home" icon={'home'}/>
                <MenuLink title="Deposits" icon={'file-multiple'} active />
                <MenuLink title="Offers" icon={'gift'}/>
                <MenuLink title="Payments" icon={'bank'}/>
                <MenuLink title="Settings" icon={'cog'} />
    </Container>

                
    )
}

export default Menu
