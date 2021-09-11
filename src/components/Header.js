import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import styled from "styled-components"

const StyledHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  background: #212430;
`
const StyledMobileHeader = styled.header`
  background: #212430;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  padding-right: 12%;
  padding-left: 12%;
`
const StyledMenuIcon = styled(props => <FiMenu {...props} />)`
  color: white;
  position: absolute;
  top: 2.5vh;
  right: 3vh;
`
const StyledCloseIcon = styled(props => <FiX {...props} />)`
  color: white;
  position: absolute;
  top: 2.5vh;
  right: 3vh;
`
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  line-height: 2rem;
  font-family: century gothic;
  transition: border-bottom 700ms;
  :hover {
      border-bottom: 1px solid #a35257;
  }
`
const MobileLinkList = styled.div`
  position: absolute;
  top: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;
  width: 100%;
  background: #212430;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 2px solid #a35257;
`
const StyledLogo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 25%;
  margin-top: 0;
`
const MobileHeader = styled.header`
  width: 100%;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 320px) {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1224px) {
    display: none;
  }
`
const MobileTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const DesktopHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1224px) {
    display: flex;
  }
`
const DesktopLinkList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 55%;
`
const StyledPhoneNumber = styled.a`
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  font-family: century gothic;
  @media screen and (min-width: 320px) {
    padding-top: 5%;
  }
  @media screen and (min-width: 768px) {
    padding-top: 0%;
  }
  @media screen and (min-width: 1224px) {
    padding-top: 0%;
  }
`
const StyledButton = styled.button`
background: transparent;
`


export const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const MobileButtonWrapper = ({ children }) => (
    <StyledButton onClick={() => setIsVisible(!isVisible)}>
      {children}
    </StyledButton>
  )
  return (
    <StyledHeader>
      <DesktopHeader>
        <StyledLogo>Putman Law Office</StyledLogo>
        <DesktopLinkList>
          <StyledPhoneNumber href="tel: 4792871288">
            (479) 287-1288
          </StyledPhoneNumber>
          <StyledLink href="#practice-areas" alt="practice areas link">
            Practice Areas
          </StyledLink>
          <StyledLink href="#about" alt="about link">
            About
          </StyledLink>
          <StyledLink href="#contact" alt="contact link">
            Contact
          </StyledLink>
        </DesktopLinkList>
      </DesktopHeader>
      <MobileHeader>
        <StyledMobileHeader>
          {isVisible ? (
            <StyledCloseIcon
              onClick={() => setIsVisible(!isVisible)}
              size={25}
            />
          ) : (
            <StyledMenuIcon
              onClick={() => setIsVisible(!isVisible)}
              size={25}
            />
          )}
          <MobileTitle>
            <StyledPhoneNumber href="tel: 4792871288">
              (479) 287-1288
            </StyledPhoneNumber>
            <StyledLogo>Putman Law Office</StyledLogo>
          </MobileTitle>
        </StyledMobileHeader>
        {isVisible && (
          <MobileLinkList>
            <MobileButtonWrapper>
              <StyledLink href="#practice-areas" alt="practice areas link">
                Practice Areas
              </StyledLink>
            </MobileButtonWrapper>

            <MobileButtonWrapper>
              <StyledLink href="#about" alt="about link">
                About
              </StyledLink>
            </MobileButtonWrapper>

            <MobileButtonWrapper>
              <StyledLink href="#contact" alt="contact link">
                Contact
              </StyledLink>
            </MobileButtonWrapper>

          </MobileLinkList>
        )}
      </MobileHeader>
    </StyledHeader>
  )
}
