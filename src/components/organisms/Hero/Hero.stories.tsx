import React from 'react';
import Hero, { HeroProps } from './Hero';

export default {
    title: "Hero",
    component: Hero
};

export const Default = (props: HeroProps) => <Hero {...props} />;
