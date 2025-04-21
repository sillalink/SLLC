// app/components/ProjectSection.tsx
import React from 'react';
import Title from '../Title';
import { CardItem } from '@/app/types';
import { CardSlider } from '../CardSlider';
import about from '@/public/assets/about1.png'
import ProjectCard from './Project.Card';
import icon from "@/public/assets/NextIcon.svg"

const ProjectSection = () => {
  console.log(about)
  const sampleCards: CardItem[] = [
    {
      id: '1',
      title: 'Project One',
      description: 'Innovative solution for modern problems with cutting-edge technology.',
      imageUrl: '@/public/assets/about1.png',
      icons: [
        icon , icon , icon
      ]
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'Revolutionary platform transforming user experiences.',
      imageUrl: '@/public/assets/about1.png',
      icons: [
        icon , icon , icon
      ]
    },
    {
      id: '3',
      title: 'Project Three',
      description: 'Elegant design meets powerful functionality.',
      imageUrl: '@/public/assets/about1.png',
      icons: [
        icon , icon , icon
      ]
    },
    {
      id: '4',
      title: 'Project Four',
      description: 'Scalable architecture for growing businesses.',
      imageUrl: '@/public/assets/about1.png',
      icons: [
        icon , icon , icon, icon , icon, icon , icon , icon , icon
      ]
    },
    {
      id: '5',
      title: 'Project Five',
      description: 'Performance optimized for the best user experience.',
      imageUrl: '@/public/assets/about1.png',
      icons: [
        icon , icon , icon
      ]
    },
  ];

  return (
    <section id='projects' className="py-16 ">
      <div className="container mx-auto px-4 max-w-[1260px]">
        <Title title1='Proj' title2='ects'  />
        <p className='text-regular mt-22 text-secondary px-5'>At <span className='text-primary'>SillaLink</span>, we deliver innovative software solutions for a range of successful projects across various industries. With our commitment to quality and innovation, we help our clients achieve their digital goals and enhance their businesses with the latest technologies.</p>
        <CardSlider<CardItem>
          cards={sampleCards}
          renderCard={(card) => <ProjectCard {...card} />}
          className="my-8 "
          cardClassName="hover:scale-[1.02] transition-transform"
        />
      </div>

    </section>
  );
};

export default ProjectSection;