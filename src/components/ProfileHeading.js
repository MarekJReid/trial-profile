import React from "react"
import styled from "styled-components"

const ProfileHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`

const FirstLayer = styled.div`
  font-size: 109px;
  font-weight: 700;
  color: #00A7AA;
  z-index: ${props => `${props.isClicked ? 1 : 3}`};
`

const SecondLayer = styled.div`
  position: absolute;
  font-size: 109px;
  font-weight: 700;
  color: #036EA3;
  top: 6px;
  left: 10px;
  z-index: 2;
  white-space: nowrap;
`

const Border = styled.div`
  padding: 5px;
  border: 1px solid #00A7AA;
  background-color: ${props => `${props.isClicked ? "#B2ABE0" : "white"}`};
`

const ProfileHeading = ({ title, isClicked, onClick }) => {
  return (
    <ProfileHeadingWrapper onClick={onClick}>
      <FirstLayer isClicked={isClicked}>{title}</FirstLayer>
      <SecondLayer isClicked={isClicked}>{title}</SecondLayer>
      <Border isClicked={isClicked} />
    </ProfileHeadingWrapper>
  )
}

export default ProfileHeading
