import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/me.png'
import Menu from './Menu/Menu'

const Container = styled.div`
    margin-top: 5rem;
`

const ProfileImage = styled.img`
    height: 5rem;
    margin-left:2rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`


const Profile = () => {
    return (
        <Container>

        <ProfileImage src={avatar} />
        <ProfileName>Hichem Bennaceur </ProfileName>
        <Menu />
        </Container>
    )
}

export default Profile
