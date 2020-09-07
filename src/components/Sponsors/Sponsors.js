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
  PackagePrice,
  InReturnText,
  PackageBenefit,
  PackageBenefits,
  SponsorsText,
  GreyedBackground,
  SponsoredCompanies,
  CompaniesLogo,
  BronzeGrid,
  CompaniesSubtitle,
  CompaniesSection,
} from './Sponsors.style';
import makers from '../../assets/image/sponsors/makers.png';
import github from '../../assets/image/sponsors/github.png';
import ebay from '../../assets/image/sponsors/ebay.png';
import ministryofjustice from '../../assets/image/sponsors/ministryofjustice.png';
import lego from '../../assets/image/sponsors/lego.svg';
import twitter from '../../assets/image/sponsors/twitter.png';
import bbc from '../../assets/image/sponsors/bbc.png';
import deliveroo from '../../assets/image/sponsors/deliveroo.png';
import gumtree from '../../assets/image/sponsors/gumtree.svg';
import mands from '../../assets/image/sponsors/mands.png';
import skyscanner from '../../assets/image/sponsors/skyscanner.png';
import microsoft from '../../assets/image/sponsors/microsoft.png';
import madebymany from '../../assets/image/sponsors/madebymany.png';
import justeat from '../../assets/image/sponsors/justeat.png';
import typeform from '../../assets/image/sponsors/typeform.png';
import busuu from '../../assets/image/sponsors/busuu.png';
import monzo from '../../assets/image/sponsors/monzo.png';
import hellofresh from '../../assets/image/sponsors/hellofresh.png';
import goldmansachs from '../../assets/image/sponsors/goldmansachs.png';
import lloyds from '../../assets/image/sponsors/lloyds.png';
import moo from '../../assets/image/sponsors/moo.png';
import ibm from '../../assets/image/sponsors/ibm.png';
import buzzfeed from '../../assets/image/sponsors/buzzfeed.svg';
import thoughtworks from '../../assets/image/sponsors/thoughtworks.png';
import dazn from '../../assets/image/sponsors/dazn.png';
import netaporter from '../../assets/image/sponsors/netaporter.png';

const Sponsors = () => {
  return (
    <>
      {/* <SponsorSection> */}
      <SponsorTitles>Why should you sponsor a workshop?</SponsorTitles>
      <ReasonsWrapper>
        <ReasonWrapper>
          <ReasonNumber>01</ReasonNumber>
          <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
          <ReasonText>
            As a codebar sponsor, you will be part of the vibrant community
            facilitating the growth of a diverse community. We have a strict yet
            simple code of conduct that includes more detailed information.
          </ReasonText>
        </ReasonWrapper>

        <ReasonWrapper>
          <ReasonNumber>02</ReasonNumber>
          <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
          <ReasonText>
            You will be helping to promote diversity within the tech sector and
            be part of an exciting community committed to narrowing the skills
            gap. Not only that, but you will also be contributing to the growth
            of much-needed technical skills and giving a further boost to the
            post-recession economy.
          </ReasonText>
        </ReasonWrapper>

        <ReasonWrapper>
          <ReasonNumber>03</ReasonNumber>
          <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
          <ReasonText>
            Your sponsorship will enable more women, LGBTQ and people from
            under-represented minority groups to get started in development, or
            raise their skills to the next level. You will also have contact
            with developers of all levels at our workshops. Many of codebar’s
            students have found jobs as a direct result of the time they have
            invested to learn and develop their coding skills with us.
          </ReasonText>
        </ReasonWrapper>

        <ReasonWrapper>
          <ReasonNumber>04</ReasonNumber>
          <ReasonSubtitle>Be part of a diverse community.</ReasonSubtitle>
          <ReasonText>
            Whatever investment you choose, your logo will appear on the codebar
            website along with a link to your site. You are also welcome to give
            a 5 minute talk at the beginning of an evening workshop you host on
            a topic you think our students will find interesting and
            informative.
          </ReasonText>
        </ReasonWrapper>
      </ReasonsWrapper>
      {/* </SponsorSection> */}

      {/* <SponsorSection> */}
      <SponsorTitles>How to sponsor a workshop?</SponsorTitles>

      <WhyText>
        Depending on the location, event attendee numbers can range from as low
        as 10 to as high as 60.
        <br /> So for exact details you should send an email to hello@codebar.io
        enquiring about the specifics of hosting events with different codebar
        chapters.
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
        recommended that hosts provide some hot food, as attendees will not have
        another chance to eat dinner. In London, the typical spend for hot food
        is roughly £200-250 for one workshop; outside of central London it can
        be much lower.
      </WhyText>

      <FoodOptions>
        <Option>
          {/* <img /> */}
          <OptionSub>Food option</OptionSub>
          <OptionText>
            Try to provide some vegetarian, vegan and gluten-free options -
            everyone will eat vegetarian food but not the other way around so
            try to keep it 50-50. If you would like recommendations for food,
            please get in touch with your chapter organisers.
          </OptionText>
        </Option>
        <Option>
          {/* <img /> */}
          <OptionSub>Drinks</OptionSub>
          <OptionText>
            Please make sure you provide non-alcoholic drinks and water. Some
            locations also prefer to keep their workshop alcohol free so make
            sure you speak with the organisers if you are planning on providing
            beer or wine.
          </OptionText>
        </Option>
      </FoodOptions>
      <WhyText>
        Some chapters hold lightning talks at the start of each event. If your
        space has a larger conference room with a projector (preferably HDMI
        and/or with an adapter for Mac Thunderbolt ports) please let us know in
        advance and have it ready to go on the day of the workshop.
        <br />
        <br />
        Make sure your location is clearly visible from the street or the Google
        Places API, and post signs directing attendees to the venue.
      </WhyText>
      {/* </SponsorSection> */}

      {/* <SponsorSection> */}
      <SponsorTitles>Sponsorship packages</SponsorTitles>
      <PackagesWrapper>
        <Package>
          <PackagePrice>£1500</PackagePrice>
          <PackageBenefits>
            <PackageBenefit>
              1 spot at a codebar workshop or event for your employees Your logo
              listed on top of our Sponsors page under Bronze tier
            </PackageBenefit>{' '}
            <PackageBenefit>
              A shoutout to our 7500+ Twitter followers
            </PackageBenefit>{' '}
            <PackageBenefit>
              A mention of your contribution when the money is used, either on
              Twitter or on our blog
            </PackageBenefit>
          </PackageBenefits>
        </Package>
        <Package>
          <PackagePrice>£2500</PackagePrice>
          <PackageBenefits>
            <PackageBenefit>
              3 spots at a codebar workshop or event for your employees 5 minute
              lightning talk about your company, and what you do, at our weekly
              workshops Your logo printed on any marketing materials we produce
              (leaflets, flyers, etc.)
            </PackageBenefit>{' '}
            <PackageBenefit>
              Your logo listed on our Sponsors page under Silver tier
            </PackageBenefit>{' '}
            <PackageBenefit>
              A shoutout to our 7500+ Twitter followers
            </PackageBenefit>{' '}
            <PackageBenefit>
              A blog post dedicated to your company and their support of codebar
            </PackageBenefit>
          </PackageBenefits>
        </Package>
        <Package>
          <PackagePrice>£5000</PackagePrice>
          <PackageBenefits>
            <PackageBenefit>
              5 spots at a codebar workshop or event for your employees 5 minute
              lightning talk about your company, and what you do, at our weekly
              workshops Your logo printed on any marketing materials we produce
              (leaflets, flyers, etc.)
            </PackageBenefit>{' '}
            <PackageBenefit>
              Your logo on a dedicated sponsors slide in any of our conference
              presentations
            </PackageBenefit>{' '}
            <PackageBenefit>
              Your logo listed on top of our sponsors page under ‘Gold’ tier
            </PackageBenefit>{' '}
            <PackageBenefit>
              A shoutout to our 7500+ Twitter followers
            </PackageBenefit>{' '}
            <PackageBenefit>
              A blog post dedicated to your company and your support of codebar
            </PackageBenefit>
          </PackageBenefits>
        </Package>
      </PackagesWrapper>
      {/* </SponsorSection> */}

      {/* <SponsorSection> */}
      <SponsorTitles>
        What your sponsorship money is being used for
      </SponsorTitles>
      <InReturnText>
        Our infrastructure costs (we pay all services we use to manage both
        technical and administrative aspects of codebar from hosting, to
        accounting etc) Promotional materials to help get the word out Support
        for chapters that are at times unable to find local sponsorship for
        their workshops Running more specialised events (all our events are free
        and run by volunteers - but we still need to handle food catering,
        marketing, planning and other administrative costs)
      </InReturnText>
      <SponsorTitles>What do you get in return?</SponsorTitles>
      <InReturnText>
        Whatever your investment, you can be proud knowing that you are an
        active member of this flourishing sector, enabling people to find jobs,
        enhance their existing careers and substantially improve the quality of
        life of those who are often discriminated against. Depending on your
        level of sponsorship, we will also list your logo and link on our
        website, thank you on Twitter, mention you in our monthly newsletter and
        you will be welcome to distribute your marketing collateral at our
        events. We look forward to welcoming you to our evolving community!
      </InReturnText>
      {/* </SponsorSection> */}

      {/* <CompaniesSection>
        <SponsorTitles>We have previously worked with..</SponsorTitles>
        <SponsorsText>
          Without our sponsors, running codebar would be impossible. They
          provide us with space, food and drinks, internet, and they also help
          us cover our running costs.
          <br />
          <br />
          Thank you for sharing our dream of creating a more welcoming, equal
          and diverse tech industry.
          <br />
          <br />
          If you are interested in becoming a host please do get in touch with
          us at hello@codebar.io .
        </SponsorsText>
        <GreyedBackground>
          <SponsoredCompanies>
            <CompaniesSubtitle>Gold sponsors</CompaniesSubtitle>
            <CompaniesLogo src={makers} />
          </SponsoredCompanies>
        </GreyedBackground>
        <SponsoredCompanies>
          <CompaniesSubtitle>Silver sponsors</CompaniesSubtitle>
          <CompaniesLogo src={github} />
        </SponsoredCompanies>

        <GreyedBackground>
          <SponsoredCompanies>
            <CompaniesSubtitle>
              And thanks to our other sponsors
            </CompaniesSubtitle>
            <BronzeGrid>
              <CompaniesLogo src={ebay} />
              <CompaniesLogo src={ministryofjustice} />
              <CompaniesLogo src={lego} />
              <CompaniesLogo src={twitter} />
              <CompaniesLogo src={bbc} />
              <CompaniesLogo src={deliveroo} />
              <CompaniesLogo src={gumtree} />
              <CompaniesLogo src={mands} />
              <CompaniesLogo src={skyscanner} />
              <CompaniesLogo src={microsoft} />
              <CompaniesLogo src={madebymany} />
              <CompaniesLogo src={justeat} />
              <CompaniesLogo src={typeform} />
              <CompaniesLogo src={busuu} />
              <CompaniesLogo src={monzo} />
              <CompaniesLogo src={hellofresh} />
              <CompaniesLogo src={goldmansachs} />
              <CompaniesLogo src={lloyds} />
              <CompaniesLogo src={moo} />
              <CompaniesLogo src={ibm} />
              <CompaniesLogo src={buzzfeed} />
              <CompaniesLogo src={thoughtworks} />
              <CompaniesLogo src={netaporter} />
              <CompaniesLogo src={dazn} />
            </BronzeGrid>
            <CompaniesSubtitle>...and many more.</CompaniesSubtitle>
          </SponsoredCompanies>
        </GreyedBackground>
      </CompaniesSection> */}
    </>
  );
};

export default Sponsors;
