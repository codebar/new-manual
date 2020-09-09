import React from 'react';
import HowToHelp from './HowToHelp';
import { MemoryRouter } from 'react-router';

export default { title: 'How to help', component: HowToHelp };

export const howtohelp = () => <MemoryRouter>{HowToHelp()}</MemoryRouter>;

// export const sponsorsBtn = () => <SponsorsBtn to="/sponsors" />;
