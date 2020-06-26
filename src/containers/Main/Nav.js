import React from 'react'
import styled from 'styled-components'
// import ProfileImage from '../../assets/images/profilelg.png'
import { Icon, InlineIcon } from "@iconify/react";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: left;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
    gorder-radius:50%
`

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
`
const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="true" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg src={require('../../assets/me.png')} />
        </Container>
    )
}

export default Nav