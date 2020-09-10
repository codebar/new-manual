import React from 'react';
import {
  IntroText,
  GreyWrapper,
  Title,
  Heading,
  List,
  ListItem,
  Bold,
  InternalLink,
  InternalLinkWrapper,
} from '../../../globalstyle/GlobalStyle';
import {
  Pink,
  NumberedList,
  NumberedListItem,
  NumberedListItemAlt,
  Div,
} from './Coordinators.style';
import Organisers from '../Organisers/Organisers';
import CodebarArea from '../CodebarArea/CodebarArea';
import { Route } from 'react-router-dom';

const Coordinators = () => {
  return (
    <>
      <Title>Coordinators Guide </Title>
      <InternalLinkWrapper>
        <InternalLink to={'/organisers'}>
          Organising workshops<span>&#8599;</span>
        </InternalLink>

        <InternalLink to="/codebar-area">
          Bring codebar to your area<span>&#8599;</span>
        </InternalLink>
        <Route path="/organisers" component={Organisers} exact />
        <Route path="/codebar-area" component={CodebarArea} />
      </InternalLinkWrapper>
      <IntroText>
        <p>
          codebar workshops are a team effort and we really appreciate you
          wanting to help run things smoother! Here are some tips on how you can
          help:
        </p>
        <List>
          <ListItem>
            Try to get to the event a little early: 10 minutes or so before the
            listed start time.
          </ListItem>
          <ListItem>Be friendly, positive, and encouraging.</ListItem>
        </List>

        <p>
          Try to be close at hand to the front desk where people are being
          checked in. This is so you are close by to give inductions and help
          with any required tasks. Once you’ve finished an induction or helping
          with something, head back to the front desk.
        </p>
        <p>
          Try not to get caught up in conversations unless there are no more
          inductions or the organisers don’t need your help anymore.
        </p>
        <p>
          Keep an eye for people who are on their own. Talk to them and
          introduce them to other people.
        </p>
        <p>
          If you spot someone without a name badge, chances are they’re not
          checked in. Send them over to the front desk.
        </p>
        <p>
          If someone comes to you with a complaint or a concern that you don’t
          know how to address, remember that the rest of the organisers and
          coordinators have your back and you can always ask for help.
        </p>
      </IntroText>
      <GreyWrapper>
        <Heading>Coach inductions</Heading>
        <p>
          Have they read the Code of Conduct? Have they read the Coach Guide? If
          not, they should do so right now. How did they hear about codebar?
          What made them want to come along?
        </p>

        <NumberedList>
          <NumberedListItem>
            <Pink>1</Pink>Stress that we discourage the coaches from using their
            laptops. They are there to watch and guide, people are sometimes
            hesitant to ask a lot of questions.
          </NumberedListItem>
          <NumberedListItem>
            <Pink>2</Pink>Explain that our goal is to guide students, answer
            their questions, help them learn how to tackle problems and to
            encourage them.
          </NumberedListItem>
          <NumberedListItem>
            <Pink>3</Pink>If they are working with a group and are finding it
            hard (as the students might work at a different pace or need more
            attention) they should let us know and we will try to find someone
            to help out.
          </NumberedListItem>
          <NumberedListItem>
            <Pink>4</Pink>If they need any help or have any concerns, they
            should speak to a coordinator or organiser.
          </NumberedListItem>
          <NumberedListItem>
            <Pink>5</Pink>If they feel uncomfortable with someone’s behaviour,
            they should bring it to the attention of one of the organisers. It
            is very important to us that everyone feels safe and comfortable.
          </NumberedListItem>
          <NumberedListItem>
            <Pink>6</Pink>Thank them for coming. We appreciate their help and
            any feedback that they may have, as without them we wouldn’t be able
            to have codebar! Let them know that they can get in contact with us
            at the local chapter’s mailing list (e.g. brighton@codebar.io).
          </NumberedListItem>
        </NumberedList>
        <Heading>Student inductions</Heading>
        <NumberedList>
          <Pink>1</Pink>
          <NumberedListItem>
            Have they read the Code of Conduct?
          </NumberedListItem>
          <Pink>2</Pink>
          <NumberedListItemAlt>
            How did they hear about codebar? What made them want to come along?
          </NumberedListItemAlt>
          <Pink>3</Pink>
          <NumberedListItemAlt>
            Have they done any development before? If yes, what was that? Do
            they have a goal in mind? (e.g. Are they trying to build their own
            web app or a portfolio?)
          </NumberedListItemAlt>
          <Pink>4</Pink>
          <NumberedListItemAlt>
            Are you a student? Speak to them about your experience and how
            programming has changed things for you.
          </NumberedListItemAlt>
          <Pink>5</Pink>
          <NumberedListItemAlt>
            Typing can be hard, but it’s very important when learning to code.
            Type everything and DO NOT copy and paste.
          </NumberedListItemAlt>
          <Pink>6</Pink>
          <NumberedListItemAlt>
            codebar is not just about learning to code but also about making
            friends and meeting people with similar goals. Encourage them to
            chat to other people and come to the social gathering afterwards.
          </NumberedListItemAlt>

          <Pink>7</Pink>
          <NumberedListItemAlt>
            {' '}
            If they need any help they should look for a coordinator or
            organiser.
          </NumberedListItemAlt>
          <Pink>8</Pink>
          <NumberedListItemAlt>
            If they feel uncomfortable with someone’s behaviour, they should
            bring it to the attention of one of the organisers. It is very
            important to us to ensure that everyone feels safe and comfortable.
          </NumberedListItemAlt>
        </NumberedList>
      </GreyWrapper>
    </>
  );
};

export default Coordinators;
