import React from 'react';
import AccordionGallery from '../../../components/AccordionGallery';

/**
 * Dummy images for the "What We Do" Accordion Gallery.
 * You can replace these image URLs, labels, and links with your own assets anytime!
 */
export const DUMMY_ACCORDION_ITEMS = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    label: 'Technology Solutions',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    label: 'Industry-Focused Learning',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    label: 'AI-Driven Solutions',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    label: 'Organizational Growth',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    label: 'Next-Gen Talent',
    link: '#'
  }
];

const WhatWeDoAccordion = ({ items = DUMMY_ACCORDION_ITEMS }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AccordionGallery
        items={items}
        defaultIndex={2}
        height={480}
        radius={18}
        gap={12}
        accentColor="#fb923c"
        overlayColor="#060010"
        textColor="#ffffff"
        grayscale={true}
        className="max-[520px]:!h-[520px]"
      />
    </div>
  );
};

export default WhatWeDoAccordion;
