import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FlexBox, ProfileContainer, ProfileWrapper } from "../components/StyledComponents/containers.css"
import ProfileHeading from "../components/ProfileHeading"

import Question from "../assetts/question.svg"
import Exclaim from "../assetts/exclaim.svg"
import TouchComponent from "../components/TouchComponent"

const CustomInput = styled.input`
  border: 3px solid #036EA3;
  font-size: 29px;
  padding: 12px;
  font-weight: bold;
  color: #036EA3;
  width: 80%;
  font-family: MinistryBold;
  &::placeholder {
    color: #036EA3;
    text-align: center;
  }
`

const CustomButton = styled.button`
  color: white;
  font-size: 39px;
  min-width: 300px;
  background-color: #00A7AA;
  border-color: #00A7AA;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 15px 0 5px;
  line-height: 39px;
  font-family: MinistryBold;
  font-weight: 700;
`

const ProfilePage = () => {
  const [selected, setSelected] = React.useState(3);
  const [isTouched, setTouched] = React.useState(false);

  return (
    <Layout>
      <Seo title="Profile" />
      <ProfileContainer>
        {!isTouched && <ProfileWrapper>
          <FlexBox>Are you looking for a</FlexBox>
          <FlexBox>
            <ProfileHeading title="New Website" isClicked={selected === 1} onClick={() => setSelected(1)} />
            <span style={{ fontSize: "60px", lineHeight: "40px", paddingLeft: "37px" }}>or</span>
          </FlexBox>
          <FlexBox>
            <ProfileHeading title="Consultation" isClicked={selected === 2} onClick={() => setSelected(2)} />
          </FlexBox>
          <FlexBox style={{ padding: "0 40px" }}>
            <TouchComponent title="Get In touch now" onClick={() => setTouched(true)} />
          </FlexBox>
        </ProfileWrapper>}
        {isTouched && <ProfileWrapper>
          <FlexBox>
            <span style={{ fontSize: "47px" }}>We would love to hear from you</span>
          </FlexBox>
          <FlexBox>
            <span style={{ color: "#00A7AA" }}>Fill out the little form below and we will get in contact with you as soon as humanly possible :D</span>
          </FlexBox>
          <FlexBox style={{ marginTop: "40px" }}>
            <CustomInput placeholder="Put your name in this one..." />
          </FlexBox>
          <FlexBox style={{ marginTop: "22px" }}>
            <CustomInput placeholder="Put your email in this one..." />
          </FlexBox>
          <FlexBox style={{ marginTop: "20px", justifyContent: "flex-end", width: "80%" }}>
            <CustomButton>SEND</CustomButton>
          </FlexBox>
        </ProfileWrapper>}
        <FlexBox style={{ width: "20%" }}>
          <img src={isTouched ? Exclaim : Question} alt="Question" />
        </FlexBox>
      </ProfileContainer>
    </Layout>
  )
}

export default ProfilePage

export const query = graphql`
  query ProfileQuery {
    allContentfulHero {
      edges {
        node {
          heroTitle
          introduction {
            raw
          }
          landingHero {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1
            )
          }
        }
      }
    }
  }
`
