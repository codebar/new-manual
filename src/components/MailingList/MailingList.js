import React from 'react';
import { Wrapper, Title, IntroText } from '../../globalstyle/GlobalStyle';
import { List } from './MailingList.style';

const Mailing = () => {
  return(
  <>
    <Wrapper>
        <Title>Mailing List Policy</Title>
        <IntroText>codebar is a non profit dedicated to promoting diversity in the technology/software development industry. We encourage active involvement in the tech community and are keen to communicate information to our students that would benefit their education.</IntroText>
        <IntroText>We have a dedicated mailing list for our students, as well as regular emails inviting them to upcoming events. If you would like to offer us something we would love to hear from you, but ask that you adhere to the following principles:</IntroText>

        <List>
          <li>No paid courses. We spend a lot of our time trying to create opportunities and run free events. If you would like to run a free version of your course for us or offer free spots to an event you are running, we would love to hear from you.</li>
          <li>Any offers/courses sent must be aimed at beginner to intermediate level developers and should specify the prerequisites and background knowledge required in order to attend - we welcome free conference tickets too!</li>
          <li>All communication that you want us to forward to the codebar mailing list must align with the codebar <a href="https://codebar.io/code-of-conduct">Code of Conduct</a>.</li>
          <li>No abusive, exclusionary or discriminatory language.</li>
          <li>Any messages that deviate from this policy may be accepted at the sole discretion of the codebar organisers.</li>
        </List>
      </Wrapper>
  </>
  )
};

export default Mailing;
