import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a35257;
  transform: translate(0, -30px);
  margin: 0% 5% 0% 5%;
  letter-spacing: 1px;
  padding: 2%;
  text-align: center;
  color: white;
  border: 2px solid #212430;
`
const MapAndAddress = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  width: 100%;
`
const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;
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
const SubTitle = styled.h2`
  color: white;
  border: 2px solid #a35257;
  padding: 2%; 
`
const AltSubtitle = styled.h2`
  text-align: center;
  background: #212430;
  color: white;
  padding: 2%;
  margin-bottom: 4%;
  border: 2px solid #a35257;
`
const Map = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: white;
`
const LocationSection = styled.section`
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
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 320px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1224px) {
    flex-direction: row;
  }
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
const AreasOfPracticeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #212430;
  color: white;
  padding: 10%;
  line-height: 2rem;
  li {
    padding: 2%;
  }
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
const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 2rem;
  padding: 10%;
`
const SectionTitle = styled.h2``
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
      <LocationSection>
        <SubTitle>Putman Law Office</SubTitle>
        <Address>
          <a href="https://goo.gl/maps/EkRgmLwhz7oh6Ryu9">
            310 W. Dickson Street, Suite 220
          </a>
          <b />
          Fayetteville, AR 72703
          <b />
          <a href="tel:4792871288">(479) 287-1288</a>
          <b />
          <a href="mailto: bill@putmanlawoffice">bill@putmanlawoffice.com</a>
        </Address>
        <Row>
          <Picture>
            <Caption>
              Office located on the second floor, above Bordino's
            </Caption>
            <StaticImage
              src="../images/office.jpg"
              alt="office"
              style={{ border: "2px solid #A35257", margin: "5%" }}
            />
          </Picture>
          <MapAndAddress>
            <Map>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.101336127433!2d-94.16576288395032!3d36.06663231634457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96eda2f7aa8a3%3A0x55b685e613731b77!2s310%20W%20Dickson%20St%20%23220%2C%20Fayetteville%2C%20AR%2072701!5e0!3m2!1sen!2sus!4v1623726760269!5m2!1sen!2sus' style='border:2px solid #A35257; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100% ' allowfullscreen='' loading='lazy'></iframe>",
                }}
              />
            </Map>
          </MapAndAddress>
        </Row>
      </LocationSection>
      <AboutSection>
        <AltSubtitle>About Putman Law Office</AltSubtitle>
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
          before all state trial and appellate courts in Arkansas, as well as
          the United States District Courts for the Eastern and Western
          Districts of Arkansas. He has also been admitted to practice before
          the United States Courts of Appeals for the Eighth, Tenth, and D.C.
          Circuits, and the United States Supreme Court.
        </p>
        <p>
          Before attending law school Mr. Putman taught courses in communication
          at the University of Arkansas, University of Illinois at
          Urbana-Champaign, and Purdue University. As an attorney, he has taught
          courses in legal communication at the University of Arkansas and legal
          writing in NorthWest Arkansas Community College’s legal studies
          program.
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
      </AboutSection>
      <AreasOfPracticeSection>
        <SubTitle>Areas of Practice</SubTitle>
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
            benefits, personal and business torts, and other civil cases.
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
            <b>Family Law.</b> Putman Law Office represents clients in a limited
            number of divorce, custody, visitation, and child support cases,
            with an emphasis on cooperative dispute resolution.
          </li>
        </ul>
      </AreasOfPracticeSection>
    </Content>
  </Wrapper>
)

export default IndexPage
