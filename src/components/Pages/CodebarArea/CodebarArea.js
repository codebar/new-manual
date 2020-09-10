import React from "react";
import { Wrapper, IntroText, AnythingElseText, ListWrapper, Heading, Subheading, SubheadingAlt, List, ListItem } from './CodebarArea.style';
import { InternalLink, InternalLinkWrapper, GreyWrapper, Title } from '../../../globalstyle/GlobalStyle'
import { Route } from 'react-router-dom';
import Coordinators from '../Coordinators/Coordinators';
import Organisers from '../Organisers/Organisers';


const CodebarArea = () => {
    return (
        <>
        <Wrapper>
            <Title> Bringing Codebar to your area</Title>
            <InternalLinkWrapper>
                    <InternalLink to={"/organisers"}>Organising workshops<span>&#8599;</span></InternalLink>
                    
                    <InternalLink to="/coordinators">Coordinator Guide<span>&#8599;</span></InternalLink>
                    <Route
                    path="/organisers"
                    component={Organisers}
                    exact 
                />
                <Route
                    path="/coordinator"
                    component={Coordinators} 
                />
                </InternalLinkWrapper>
            <IntroText>
                <Heading>Do you want to bring codebar to your area?</Heading>
                <p>Part of our goal is to enable people to easily start a codebar chapter and organise workshops in their city, and to support them throughout the process in any way we can. If this is something that you would like to do, we suggest that you first try and find a host for the first two workshops and sponsors that can provide you with food.</p>
                <p>We will add your chapter to the codebar application and provide you with organiser access, a mailing list where people subscribed to your city can reach out to you and more information on how to use the app to announce and invite people to workshops.</p>
                <p>We will also set up a Twitter handle for you through which you can promote your chapter and workshops.</p>
            </IntroText>
            <ListWrapper>
                <Subheading>We can also help with</Subheading>
                <List>
                    <ListItem>promoting your chapter through our Twitter account @codebar with 7500+ followers and growing</ListItem>
                    <ListItem>reaching out to potential venues, sponsors and coaches in your city</ListItem>
                    <ListItem>offering access to all of our chapter organisers who can help and support your effort</ListItem>
                    <ListItem>sharing our tutorials and community input</ListItem>
                </List>
            </ListWrapper>
            <GreyWrapper>
                <AnythingElseText>If you are struggling to either find a venue or a sponsor to cover food costs, we might be able to help you. Just let us know.</AnythingElseText>

                <AnythingElseText>We also encourage you to join our Slack group where you can ask questions from existing organisers, coaches and students. We could even set you up a chapter specific channel if you’d like.</AnythingElseText>
                <AnythingElseText>For more information on what it takes to be a codebar organiser and to sponsor workshops, please refer to these entries of this manual:</AnythingElseText>
                <List>
                    <ListItem>Organiser guide</ListItem>
                    <ListItem>Sponsoring</ListItem>
                </List>
                <AnythingElseText>You should also take a look at our Code of Conduct and the values we represent.</AnythingElseText>
            </GreyWrapper>
        </Wrapper>
        </>
    )
}

export default CodebarArea;