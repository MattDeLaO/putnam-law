import * as React from "react"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Header } from "../components/Header"
import SEOComponent from "../components/seo"

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a35257;
  transform: translate(0, -30px);
  margin: 0% 5% 0% 5%;
  letter-spacing: 1px;
  padding: 2% 4% 2% 4%;
  text-align: center;
  color: white;
  border: 2px solid #212430;
  min-width: 50%;
`
const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 75%;
  }
  @media screen and (min-width: 1224px) {
    width: 65%;
  }
`
const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
`
const Map = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  padding-top: 56.25%;
`
const Wrapper = styled.div`
display: flex
flex-direction: column;
`
const Picture = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2% 2% 2% 2%;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 75%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1224px) {
    width: 40%;
  }
`
const Caption = styled.div`
  background: #a35257;
  transform: translate(0, 25px);
  z-index: 99;
  padding: 2%;
  color: white;
  font-size: 12px;
  text-align: center;
  border: 2px solid #212430;
`
const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  text-align: center;
  line-height: 2rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const Section = styled.section`
  background: ${props => (props.primary ? "white" : "#212430")};
  color: ${props => (props.primary ? "black" : "white")};
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: center;
  justify-content: center;
  width: 100vw;
  line-height: 2rem;
  li {
    padding: 2%;
  }
  @media screen and (min-width: 320px) {
    padding: 2% 8% 2% 8%;
  }
  @media screen and (min-width: 768px) {
    padding: 2% 10% 2% 10%;
  }
  @media screen and (min-width: 1224px) {
    padding: 2% 12% 2% 12%;
  }
`
const HeroImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 95%;
    padding-top: 12%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    padding-top: 5%;
  }
  @media screen and (min-width: 1224px) {
    width: 60%;
    padding-top: 1%;
  }
`
const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #212430;
  color: white;
  padding: 2% 4%;
  margin-bottom: 2%;
  border: 2px solid #a35257;
`
const BackToTop = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  border-bottom: 2px solid #a35257;
  transition: padding 0.7s;
  :hover {
    padding-right: 15px;
    padding-left: 15px;
  }
`
const Slogan = styled.h2`
  text-align: center;
  letter-spacing: 1px;
`
const PhoneWrapper = styled.div`
  border: 2px solid #a35257;
  margin-top: 10px;
  margin-bottom: 10px;
`
const IndexPage = () => (
  <Wrapper>
    <Header id="top" />
    <SEOComponent title="Home" />
    <Content>
      <Seo title="Home" />
      <Section primary>
        <HeroImageWrapper>
          <StaticImage
            src="../images/portrait.jpeg"
            alt="portrait"
            width={1600}
            height={1200}
            style={{ border: "2px solid #A35257" }}
          />
        </HeroImageWrapper>
        <Title>William B. Putman</Title>
        <Slogan>The Right Kind of Experience for Your Case</Slogan>
      </Section>
      <Section primary={false} id="practice-areas">
        <SectionTitle>Areas of Practice</SectionTitle>
        <p>
          When you need an attorney, it is important to find one with the right
          kind of experience and expertise for your case. Putman Law Office has
          more than thirty years of experience representing clients in legal
          matters including:
        </p>
        <ul>
          <li>
            <b>Civil Litigation.</b> Putman Law Office represents both
            plaintiffs and defendants in state and federal trial courts in
            breach of contract, fraud, negligence, breach of fiduciary duty,
            unfair trade practices, employment, noncompete agreements, employee
            benefits, personal and business torts, personal injury, and other
            civil cases.
          </li>
          <li>
            <b>Appeals.</b> Putman Law Office represents clients in appeals from
            judgments and decisions rendered in state and federal trial courts.
            Mr. Putman frequently appears in cases before the Arkansas Supreme
            Court, Arkansas Court of Appeals, and Eighth Circuit Court of
            Appeals. He also works with clients’ trial counsel in cases where an
            appeal is expected to preserve issues and ensure the appellate
            record is complete.
          </li>
          <li>
            <b>Administrative Litigation.</b> Mr. Putman represents health care
            professionals and others licensed by the State of Arkansas in
            licensing and disciplinary matters. He has successfully advocated
            for clients before the Arkansas State Medical Board, Arkansas Board
            of Nursing, Arkansas Board of Pharmacy, Arkansas Commission on Law
            Enforcement Standards and Training, Arkansas Board of Cosmetology,
            and other state boards and agencies.
          </li>
          <li>
            <b>Government Investigations.</b> Mr. Putman has represented
            corporations and individuals in investigations conducted by the
            Office of Independent Counsel, United States Attorneys, and other
            state and federal offices and agencies.
          </li>
          <li>
            <b>Legal Research and Writing.</b> Mr. Putman works with other
            attorneys to assist in researching difficult or unusual legal
            issues, draft motions and briefs, or respond to motions filed by
            opposing counsel.
          </li>
          <li>
            <b>Family Law.</b> Putman Law Office represents clients in divorce,
            custody, visitation, and child support cases, with an emphasis on
            cooperative dispute resolution.
          </li>
        </ul>
      </Section>
      <Section primary id="about">
        <SectionTitle>About</SectionTitle>
        <p>
          William B. (“Bill”) Putman is a 1991 graduate of the University of
          Arkansas School of Law, where he served as Articles Editor of the
          Arkansas Law Review. He also received his B.A. (1980) and M.A. (1982)
          in Communication from the U of A.
        </p>
        <p>
          Mr. Putman’s diverse legal career has included work in private
          practice, public service, and corporate law. He has served as a
          judicial clerk to the Honorable H. Franklin Waters, former Chief Judge
          of the United States District Court for the Western District of
          Arkansas, as Chief Deputy Attorney General for the State of Arkansas,
          and as Associate General Counsel for Walmart Stores, Inc. But for most
          of his career Mr. Putman has been in private practice representing
          individuals and businesses in a variety of legal matters.
        </p>
        <p>
          Mr. Putman owns and operates the Putman Law Office in Fayetteville,
          Arkansas. His practice is limited primarily to civil litigation and
          appeals in state and federal courts, as well as professional
          disciplinary actions and other administrative litigation before
          government boards and agencies. Mr. Putman is licensed to practice
          before all state and local trial courts in Arkansas, the Arkansas
          Supreme Court, the Arkansas Court of Appeals, the United States
          District Courts for the Eastern and Western Districts of Arkansas, and
          the Eighth Circuit Court of Appeals. He has also been admitted to
          practice before the United States Supreme Court, the Tenth Circuit
          Court of Appeals, and the United States Court of Appeals for the D.C.
          Circuit.
        </p>
        <p>
          Before attending law school Mr. Putman taught communication at the
          University of Arkansas, University of Illinois at Urbana-Champaign,
          and Purdue University. As an attorney, he has taught legal
          communication at the University of Arkansas and legal writing in
          NorthWest Arkansas Community College’s legal studies program.
        </p>
        <p>
          Mr. Putman is a past President and Vice President of the W.B. Putman
          American Inn of Court. Since 2017 he has served as a member of the
          Arkansas Supreme Court’s Judges and Lawyers Assistance Program
          Committee, of which he is currently Vice- Chair. He has written for
          the Lawyers With Depression website and has contributed to The
          Hilarious World of Depression podcast. In 2019 Mr. Putman was the
          subject of profile articles published in The American Lawyer and on
          the law.com website. He is a frequent speaker at continuing legal
          education programs on subjects including legal communication, legal
          writing, appellate practice, and health and wellness issues affecting
          the legal profession.
        </p>
      </Section>
      <Section primary={false} id="contact">
        <SectionTitle>Contact</SectionTitle>
        <Address>
          <b>P.O. Box 11186</b>
          <b />
          Fayetteville, AR 72703
          <b />
          <PhoneWrapper>
            <b>Text or Call:</b>
            <a href="tel:4792871288">(479) 287-1288</a>
          </PhoneWrapper>
          <b />
          <a href="mailto: bill@putmanlawoffice">bill@putmanlawoffice.com</a>
        </Address>
        <BackToTop href="#top" alt="back to top">
          back to top
        </BackToTop>
      </Section>
    </Content>
  </Wrapper>
)

export default IndexPage
