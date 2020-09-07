import React from 'react';
import { Title } from '../../globalstyle/GlobalStyle';
import { Wrapper, List, IntroText, ListItem, ExtLink  } from './MailingList.style';

const Mailing = () => {
  return(
  <>
    <Wrapper>
        <Title>Mailing List Policy</Title>
        <IntroText>
          <p>codebar is a non profit dedicated to promoting diversity in the technology/software development industry. We encourage active involvement in the tech community and are keen to communicate information to our students that would benefit their education.</p>
          <p>We have a dedicated mailing list for our students, as well as regular emails inviting them to upcoming events. If you would like to offer us something we would love to hear from you, but ask that you adhere to the following principles:</p>
        </IntroText>

        <List>
          <ListItem>No paid courses. We spend a lot of our time trying to create opportunities and run free events. If you would like to run a free version of your course for us or offer free spots to an event you are running, we would love to hear from you.</ListItem>
          <ListItem>Any offers/courses sent must be aimed at beginner to intermediate level developers and should specify the prerequisites and background knowledge required in order to attend - we welcome free conference tickets too!</ListItem>
          <ListItem>All communication that you want us to forward to the codebar mailing list must align with the codebar <ExtLink href="https://codebar.io/code-of-conduct">Code of Conduct</ExtLink>.</ListItem>
          <ListItem>No abusive, exclusionary or discriminatory language.</ListItem>
          <ListItem>Any messages that deviate from this policy may be accepted at the sole discretion of the codebar organisers.</ListItem>
        </List>
      </Wrapper>
  </>
  )
};

export default Mailing;
