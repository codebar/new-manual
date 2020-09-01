import React from "react";
import {Wrapper, IntroText, AnythingElseWrapper, AnythingElseText, EventWrapper, GreyWrapper, Heading, Subheading, SubheadingAlt, EventList, Bold, ListItem, InternalLink, InternaLinkWrapper } from './CodebarArea.style';

const CodebarArea = () => {
    return (
        <>
            <h1> Bringing Codebar to your area</h1>
            <div>
                <h2>Do you want to bring codebar to your area?</h2>
                <p>Part of our goal is to enable people to easily start a codebar chapter and organise workshops in their city, and to support them throughout the process in any way we can. If this is something that you would like to do, we suggest that you first try and find a host for the first two workshops and sponsors that can provide you with food.</p>
                <p>We will add your chapter to the codebar application and provide you with organiser access, a mailing list where people subscribed to your city can reach out to you and more information on how to use the app to announce and invite people to workshops.</p>
                <p>We will also set up a Twitter handle for you through which you can promote your chapter and workshops.</p>
            </div>
            <div>
                <h2>We can also help with</h2>
                <ul>
                    <li>promoting your chapter through our Twitter account @codebar with 7500+ followers and growing</li>
                    <li>reaching out to potential venues, sponsors and coaches in your city</li>
                    <li>offering access to all of our chapter organisers who can help and support your effort</li>
                    <li>sharing our tutorials and community input</li>
                </ul>

                <p>If you are struggling to either find a venue or a sponsor to cover food costs, we might be able to help you. Just let us know.</p>

                <p>We also encourage you to join our Slack group where you can ask questions from existing organisers, coaches and students. We could even set you up a chapter specific channel if you’d like.</p>
                <p>For more information on what it takes to be a codebar organiser and to sponsor workshops, please refer to these entries of this manual:</p>
                <ul>
                    <li>Organiser guide</li>
                    <li>Sponsoring</li>
                </ul>
                <p>You should also take a look at our Code of Conduct and the values we represent.</p>
            </div>
        </>
    )
}

export default CodebarArea;