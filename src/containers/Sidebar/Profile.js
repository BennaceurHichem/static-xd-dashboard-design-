import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/me.png'

const Container  = styled.div`

`
const ProfileImage  = styled.img`

`

const Title  = styled.h1`

`


const Profile = () => {
    return (
        <Container>

        <ProfileImage src={avatar} />
        <Title>Hichem Bennaceur </Title>

        </Container>
    )
}

export default Profile
