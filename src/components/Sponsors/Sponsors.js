import React from 'react';
import {
  SponsorSection,
  ReasonWrapper,
  ReasonsWrapper,
  ReasonNumber,
  ReasonSubtitle,
  ReasonText,
  SponsorTitles,
  WhyText,
  WhyEmphasise,
  FoodOptions,
  Option,
  OptionText,
  OptionSub,
  PackagesWrapper,
  Package,
} from './Sponsors.style';

const Sponsors = () => {
  return (
    <>
      <SponsorSection>
        <SponsorTitles>Why should you sponsor a workshop?</SponsorTitles>
        <ReasonsWrapper>
          <ReasonWrapper>
            <ReasonNumber>01</ReasonNumber>
            <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
            <ReasonText>
              As a codebar sponsor, you will be part of the vibrant community
              facilitating the growth of a diverse community. We have a strict
              yet simple code of conduct that includes more detailed
              information.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>02</ReasonNumber>
            <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
            <ReasonText>
              You will be helping to promote diversity within the tech sector
              and be part of an exciting community committed to narrowing the
              skills gap. Not only that, but you will also be contributing to
              the growth of much-needed technical skills and giving a further
              boost to the post-recession economy.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>03</ReasonNumber>
            <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
            <ReasonText>
              Your sponsorship will enable more women, LGBTQ and people from
              under-represented minority groups to get started in development,
              or raise their skills to the next level. You will also have
              contact with developers of all levels at our workshops. Many of
              codebar’s students have found jobs as a direct result of the time
              they have invested to learn and develop their coding skills with
              us.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>04</ReasonNumber>
            <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
            <ReasonText>
              Whatever investment you choose, your logo will appear on the
              codebar website along with a link to your site. You are also
              welcome to give a 5 minute talk at the beginning of an evening
              workshop you host on a topic you think our students will find
              interesting and informative.
            </ReasonText>
          </ReasonWrapper>
        </ReasonsWrapper>
      </SponsorSection>

      <SponsorSection>
        <SponsorTitles>How to sponsor a workshop?</SponsorTitles>

        <WhyText>
          Depending on the location, event attendee numbers can range from as
          low as 10 to as high as 60.
          <br /> So for exact details you should send an email to
          hello@codebar.io enquiring about the specifics of hosting events with
          different codebar chapters.
          <br />
          <br />
          The minimum requirements for hosting an event incude providing: <br />
          <WhyEmphasise>
            desk space, power outlets, and a stable internet connection.
          </WhyEmphasise>
          <br />
          <br />
          We encourage you to provide food and drinks. As our events typically
          take place immediately after work for many students and coaches, it is
          recommended that hosts provide some hot food, as attendees will not
          have another chance to eat dinner. In London, the typical spend for
          hot food is roughly £200-250 for one workshop; outside of central
          London it can be much lower.
        </WhyText>

        <FoodOptions>
          <Option>
            <img />
            <OptionSub>Food option</OptionSub>
            <OptionText>
              Try to provide some vegetarian, vegan and gluten-free options -
              everyone will eat vegetarian food but not the other way around so
              try to keep it 50-50. If you would like recommendations for food,
              please get in touch with your chapter organisers.
            </OptionText>
          </Option>
          <Option>
            <img />
            <OptionSub>Drinks</OptionSub>
            <OptionText>
              Please make sure you provide non-alcoholic drinks and water. Some
              locations also prefer to keep their workshop alcohol free so make
              sure you speak with the organisers if you are planning on
              providing beer or wine.
            </OptionText>
          </Option>
        </FoodOptions>
        <WhyText>
          Some chapters hold lightning talks at the start of each event. If your
          space has a larger conference room with a projector (preferably HDMI
          and/or with an adapter for Mac Thunderbolt ports) please let us know
          in advance and have it ready to go on the day of the workshop.
          <br />
          <br />
          Make sure your location is clearly visible from the street or the
          Google Places API, and post signs directing attendees to the venue.
        </WhyText>
      </SponsorSection>

      <SponsorSection>
        <SponsorTitles>Sponsorship packages</SponsorTitles>
        <PackagesWrapper>
          <Package>
            1 spot at a codebar workshop or event for your employees Your logo
            listed on top of our Sponsors page under Bronze tier A shoutout to
            our 7500+ Twitter followers A mention of your contribution when the
            money is used, either on Twitter or on our blog
          </Package>
          <Package>
            £2500 3 spots at a codebar workshop or event for your employees 5
            minute lightning talk about your company, and what you do, at our
            weekly workshops Your logo printed on any marketing materials we
            produce (leaflets, flyers, etc.) Your logo listed on our Sponsors
            page under Silver tier A shoutout to our 7500+ Twitter followers A
            blog post dedicated to your company and their support of codebar
          </Package>
          <Package>
            £5000 5 spots at a codebar workshop or event for your employees 5
            minute lightning talk about your company, and what you do, at our
            weekly workshops Your logo printed on any marketing materials we
            produce (leaflets, flyers, etc.) Your logo on a dedicated sponsors
            slide in any of our conference presentations Your logo listed on top
            of our sponsors page under ‘Gold’ tier A shoutout to our 7500+
            Twitter followers A blog post dedicated to your company and your
            support of codebar
          </Package>
        </PackagesWrapper>
      </SponsorSection>

      <SponsorSection>
        <SponsorTitles>
          What your sponsorship money is being used for
        </SponsorTitles>
        <SponsorTitles>What do you get in return?</SponsorTitles>
      </SponsorSection>
    </>
  );
};

export default Sponsors;
