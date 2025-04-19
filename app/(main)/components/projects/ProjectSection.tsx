// app/components/ProjectSection.tsx
import React from 'react';
import Title from '../Title';
import { CardItem } from '@/app/types';
import { ExampleCard } from './ExampleCard';
import { CardSlider } from '../CardSlider';

const ProjectSection = () => {
  const sampleCards: CardItem[] = [
    {
      id: '1',
      title: 'Project One',
      description: 'Innovative solution for modern problems with cutting-edge technology.',
      imageUrl: 'https://source.unsplash.com/random/600x400?project=1',
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'Revolutionary platform transforming user experiences.',
      imageUrl: 'https://source.unsplash.com/random/600x400?project=2',
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'Elegant design meets powerful functionality.',
      imageUrl: 'https://source.unsplash.com/random/600x400?project=3',
    },
    {
      id: '4',
      title: 'Project Four',
      description: 'Scalable architecture for growing businesses.',
      imageUrl: 'https://source.unsplash.com/random/600x400?project=4',
    },
    {
      id: '5',
      title: 'Project Five',
      description: 'Performance optimized for the best user experience.',
      imageUrl: 'https://source.unsplash.com/random/600x400?project=5',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <Title title1='Our Proj' title2='ects'  />
        <CardSlider<CardItem>
          cards={sampleCards}
          renderCard={(card) => <ExampleCard {...card} />}
          className="my-8"
          cardClassName="hover:scale-[1.02] transition-transform"
        />
      </div>
    </section>
  );
};

export default ProjectSection;