import React from 'react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router';

export default { title: 'Navbar', component: Navbar };

export const nav = () => <MemoryRouter>{Navbar()}</MemoryRouter>;
