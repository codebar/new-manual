import React from 'react';
import { Heading, Subheading, VolunteerText, Img, Contentwrapper, ContentwrapperAlt, Text, TextAlt, SponsorText, TextWrapper, SubheadingAlt, HowtoHelpWrapper, Wrapper } from './About.style';
// import { uncodebar } from '../../assets/uncodebar-5.jpeg';

const About = () => {
    return (
        <>
        <Wrapper>
            <Heading>We are codebar.</Heading>
            <Subheading>We are a registered charity that has been running weekly coding workshops since October 2013, with London as its first chapter. </Subheading>
            
            <Subheading>Since then we have expanded to running workshops in 19 different cities from Brighton to Manchester and Edinburgh to New York, and Berlin, Sydney, and the list goes on.</Subheading>
            <Contentwrapper>
                <Img src={require('../../assets/workshop-1.jpg')} alt="workshop"/>
                <Text>
                We have coached over 7000 students, with new people attending our events every week and a long waiting list at our London events. Because of this, our developer base has grown rapidly in a short period of time, but it has also substantially increased demand for space, coaches and resources. 
                </Text>
            
        
                <TextAlt>
                This in turn requires a substantial expansion in sponsorship investment 
                so that we can not just run workshops across London smoothly, 
                but also be able to provide help and support to our smaller chapters.
                </TextAlt>
            </Contentwrapper>


            
            <ContentwrapperAlt>
                <TextWrapper>
                    <SponsorText>
                        If you are a sponsor interested in helping get codebar started in your city, we’d be delighted to talk to you about how you can help with hosting and sponsoring regular events.
                        All of codebar’s events are run on a volunteer basis, with every subject expert and coach giving their time for free.
                    </SponsorText>
                    <VolunteerText>
                        All of codebar’s events are run on a volunteer basis, with every subject expert and coach giving their time for free.
                    </VolunteerText>
                </TextWrapper>
            
                <Img src={require('../../assets/uncodebar-5.jpeg')} alt="uncodebar-5"/>
            </ContentwrapperAlt>

            <HowtoHelpWrapper>
                <SubheadingAlt>How can you help?</SubheadingAlt>  
            </HowtoHelpWrapper>  
        </Wrapper>
        </>
    )
}

export default About;