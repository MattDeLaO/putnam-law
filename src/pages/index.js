import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import bgimage from "../images/marblebg.jpg"

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a35257;
  transform: translate(0, -30px);
  margin: 0% 5% 0% 5%;
  padding: 2%;
  text-align: center;
  color: white;
`
const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
  background-image: url(${bgimage});
  background-size: cover;
`
const PhotoSection = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Header = styled.header`
  background: #212430;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  padding-right: 12%;
  padding-left: 12%;
`
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: white;
`
const InfoSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #212430;
  color: white;
  padding: 4%;
  min-height: 35vh;
  width: 100%;
`
const Wrapper = styled.div`
display: flex
flex-direction: column;
`
const LocationSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2% 2% 2% 2%;
  justify-content: center;
  align-items: center;
`
const Caption = styled.caption`
  background: #a35257;
  transform: translate(0, 25px);
  z-index: 99;
  padding: 2%;
  color: white;
`
const IndexPage = () => (
  <Wrapper>
    <Header>
      {/* <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/practice-areas">Practice Areas</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink> */}
    </Header>

    <Content>
      <Seo title="Home" />
      <PhotoSection>
        <StaticImage
          src="../images/portrait.jpeg"
          alt="portrait"
          width={1200}
          height={900}
          style={{ border: "2px solid #A35257" }}
        />
        <Title>William B. Putman</Title>
      </PhotoSection>
      <InfoSection>
        <h2>Putman Law Office</h2>
        310 W. Dickson Street, Suite 220
        <b />
        Fayetteville, AR 72703
        <b />
        (479) 287-1288
        <b />
        bill@putmanlawoffice.com
      </InfoSection>
      <LocationSection>
        <Caption>Office located on the second floor, above Bordino's</Caption>
        <StaticImage
          src="../images/office.jpg"
          alt="office"
          style={{ border: "2px solid #A35257" }}
        />
      </LocationSection>
    </Content>
  </Wrapper>
)

export default IndexPage
