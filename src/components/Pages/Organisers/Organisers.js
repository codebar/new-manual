import React from 'react';
import {
  IntroText,
  AnythingElseText,
  EventWrapper,
  Heading,
  Subheading,
  SubheadingAlt,
  EventList,
  Bold,
  ListItem,
} from './Organisers.style';
import { GreyWrapper, InternalLink, InternalLinkWrapper, Title } from '../../../globalstyle/GlobalStyle'
import CodebarArea from '../CodebarArea/CodebarArea';
import { Route } from 'react-router-dom';
import Coordinators from '../Coordinators/Coordinators';

const Organisers = () => {
  return (
    <>
      <Title>Organising workshops</Title>
      <InternalLinkWrapper>
        <InternalLink to={'/codebar-area'}>
          Bringing Codebar to your area<span>&#8599;</span>
        </InternalLink>

        <InternalLink to="/coordinators">
          Coordinator Guide<span>&#8599;</span>
        </InternalLink>
        <Route path="/codebar-area" component={CodebarArea} exact />
        <Route path="/coordinator" component={Coordinators} />
      </InternalLinkWrapper>

      <IntroText>
        <Heading>What do I need from a host?</Heading>
        <Subheading> Space</Subheading>
        <p>
          The requirements are different depending on the city. A workshop can
          be as small as 5-6 people or as big as 80 - or more if you have enough
          people helping out! Just make sure that the venue details are
          configured properly in the application before you send out any
          invitations.
        </p>

        <Subheading>Desks and chairs</Subheading>
        <p>Make sure there are enough tables and chairs for everyone.</p>

        <Subheading>WiFi and power</Subheading>
        <p>
          The venue needs to have a fairly good and stable internet connection
          and enough power sockets for all the student laptops.
        </p>

        <p>
          If it is possible please ask the host to label one of their toilets as
          gender neutral. We recommend using this sign.
        </p>
      </IntroText>

      <GreyWrapper>
        <Subheading>Anything else?</Subheading>

        <AnythingElseText>
          <Bold>Students and coaches</Bold> We aim to have double the amount of
          students to coaches, and try to pair up 2 students who are working on
          the same tutorial with their assigned coach.
        </AnythingElseText>

        <AnythingElseText>
          <Bold>Food and drinks</Bold> Learning to code after a long day at work
          can be hard. Offering free food and giving people the opportunity to
          take a break and have something to eat before getting started makes
          our events more effective and accessible. You should also ask for
          vegetarian, vegan, and gluten-free options and also non-alcoholic
          drinks. The effort is minimal and then everyone can have something to
          eat. If you are stuck, ask us for suggestions!
        </AnythingElseText>

        <AnythingElseText>
          Not all companies are able to provide both space and food. If you need
          help finding a sponsor let us know.
        </AnythingElseText>

        <SubheadingAlt>Announcing workshops and sending out invitations</SubheadingAlt>
        <AnythingElseText>
          You should aim to list your events at least a week before they take
          place to give people time to learn about and sign up to the event.
          Give a longer lead time for new chapters. When creating an event, you
          should make sure to not set it as invitable unless registrations are
          open.
        </AnythingElseText>

        <AnythingElseText>
          Anyone signed up to codebar will be able to RSVP to the event through
          the workshop page but only people subscribed to your chapter will
          receive an email invitation.
        </AnythingElseText>

        <AnythingElseText>
          A few days out from the event, review the list of students for
          first-time attendees (anyone with a paw icon next to their name), and
          look for those with male pronouns or masculine-associated names. See
          if you can find their social media profile and check whether they meet
          the eligibility criteria. If you’re not able to find any information
          to indicate that they do meet the eligibility criteria, click the
          ‘Eligibility’ button on their profile to send out an automated
          eligibility check email. If they confirm that they’re eligible, add a
          note to their profile so that you don’t have to do this again. If they
          don’t respond by midday on the day of the workshop, it’s up to you
          whether you have a chat to them at the workshop or just remove them
          from the list.
        </AnythingElseText>
      </GreyWrapper>

      <EventWrapper>
        <Subheading>At the event</Subheading>
        <EventList>
          <ListItem>
            As people arrive at the event check them in through the workshop
            admin page, and double check what tutorials the students have signed
            up for so that you can pair them up prior to the event. Also, make
            sure you give them their name tag. Doing all of this will enable you
            to track demand and enforce the codebar attendance policy. The
            coaches will also only start appearing in the coach ranking after
            their attendance is confirmed.
          </ListItem>
          <ListItem>
            {' '}
            Make sure the WiFi details are displayed in prominent places.
          </ListItem>
          <ListItem>
            Depending on the size of the event we tend to spend the first half
            an hour having food and socialising before we pair people up around
            19:00 (if we start at 18:30) and get started with coding. In some of
            our chapters we also run 5-minute lightning talks before we pair up
            the students and coaches. You are encouraged to try things out and
            see how it works better for you. Just remember to keep things
            running smoothly and allow the students at least 1:30 hour, if not
            more, of learning.
          </ListItem>
          <ListItem>
            Double check that the host has labelled one of their toilets as
            gender neutral. We recommend using this sign.
          </ListItem>
        </EventList>
      </EventWrapper>
      <GreyWrapper>
        <Subheading>Pairing</Subheading>
        <p>
          As you start pairing students and coaches, it is important to let the
          coach pick what they want to teach as we have coaches of all
          experience levels attending. We normally do this by saying the name of
          2 students doing the same tutorial, then let a coach say they’ll help.
        </p>
        <p>
          If you have a lot of attendees, then you might need multiple
          organisers to help sign students in and note their planned topics of
          study. In these situations, a shared Google Doc can be useful to allow
          multiple contemporaneous editors. A common method is to list the
          students who’ve been signed in, in order of how difficult their
          subject is to find coaches to teach, from most difficult (e.g.
          advanced Java, PHP, iOS, testing, etc) to easiest (beginner HTML). You
          can then group students who are working on the same thing, and
          indicate a group by inserting line-breaks between groups.
        </p>

        <Subheading>After the event</Subheading>
        <p>
          Encourage them to come to any social events following the workshop.
          Usually people don’t get that much time to interact at the events and
          this enables them to expand their tech social circle, find out about
          opportunities and meet like-minded people.
        </p>

        <Subheading>Dealing with problems</Subheading>
        <p>
          Part of your job as organiser is to make sure that everyone feels
          welcome and comfortable. This might occasionally mean that you have to
          deal with small issues or potentially ban people from attending future
          codebar events.
        </p>
        <p>
          This is not something that anyone enjoys doing, however, our attendees
          are our priority and we need to make sure that codebar’s Code of
          Conduct and Eligibility Criteria are enforced.
        </p>
        <p>
          If someone comes to you with a complaint, act on it promptly. If
          attendees are involved, speak to them in a private area where you
          cannot be overheard, or send them an email after the event. When
          passing on negative feedback about a coach, you may need to ask the
          student’s permission first, as this information can be identifying.
        </p>
        <p>
          For difficult eligibility conversations, it often helps to remind
          people that our coaches, organisers and hosts donate their time and
          money to help those who have faced unfair barriers to entry into the
          tech world.
        </p>
        <p>
          If you feel that you are unable to deal with this, you are more than
          welcome to send an email to hello@codebar.io and we will do our best
          to help you out or deal with any issues.
        </p>
      </GreyWrapper>
    </>
  );
};

export default Organisers;
