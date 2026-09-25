import React from 'react';
import AccordionGallery from '../../../components/AccordionGallery';

/**
 * Items for the "Who We Serve" Accordion Gallery.
 * High-quality photography representing:
 * - Corporates (Banks, Private Institutions)
 * - Colleges & Universities (Workshops, Training Programs, Seminars)
 * - Startups & Scaleups (MVPs, Agile Engineering)
 * - MSMEs & Businesses (Digital Systems, Operational Scaling)
 * - Entrepreneurs (Custom Platforms, AI Automation)
 */
export const WHO_WE_SERVE_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    title: 'Corporates',
    tagline: 'Banks & Private Institutions',
    label: 'Corporates',
    link: '/client'
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    title: 'Colleges & Universities',
    tagline: 'Workshops, Training Programs & Seminars',
    label: 'Colleges & Universities',
    link: '/courses'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    title: 'Startups & Scaleups',
    tagline: 'Agile Tech MVPs & Innovation',
    label: 'Startups & Scaleups',
    link: '/client'
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    title: 'MSMEs & Businesses',
    tagline: 'Digital Infrastructure & Operations',
    label: 'MSMEs & Businesses',
    link: '/client'
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    title: 'Small Entrepreneurs',
    tagline: 'Custom Web & AI Automation',
    label: 'Small Entrepreneurs',
    link: '/client'
  }
];

const WhatWeDoAccordion = ({ items = WHO_WE_SERVE_ITEMS }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AccordionGallery
        items={items}
        defaultIndex={1}
        height={500}
        radius={22}
        gap={14}
        accentColor="#f97316"
        overlayColor="#070709"
        textColor="#ffffff"
        grayscale={true}
        className="max-[520px]:!h-[520px]"
      />
    </div>
  );
};

export default WhatWeDoAccordion;
