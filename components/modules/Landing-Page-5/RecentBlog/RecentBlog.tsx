/* eslint-disable linebreak-style */
import { Button, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '@/public';
import classes from './RecentBlog.module.css';
import { translate } from '@/i18n';

const blogContent = [
  {
    img: Images.interior1,
    name: 'First Time Home Owner Ideas',
    owner: 'by Nana Ama on Nov 18th, 2022',
  },
  {
    img: Images.interior2,
    name: 'First Time Home Owner Ideas',
    owner: 'by Nana Ama on Nov 18th, 2022',
  },

  {
    img: Images.interior3,
    name: 'First Time Home Owner Ideas',
    owner: 'by Nana Ama on Nov 18th, 2022',
  },
  {
    img: Images.interior1,
    name: 'First Time Home Owner Ideas',
    owner: 'by Nana Ama on Nov 18th, 2022',
  },
  {
    img: Images.interior2,
    name: 'First Time Home Owner Ideas',
    owner: 'by Nana Ama on Nov 18th, 2022',
  },
];
export default function RecentBlog() {
  const breakpointMaxW400 = useMediaQuery('(max-width: 400px)');

  return (
    <Container size="xl" mt={100} pb={200}>
      <Flex justify="space-between" align="center">
        <Text className={classes.heading} aria-label="recent blog">
          {' '}
          {translate('temp5.title')}
        </Text>
        <Button className={classes.postBtn} aria-label="view all post">
          {translate('temp5.post')}
        </Button>
      </Flex>
      <div style={{ width: '100%' }}>
        <Carousel
          withControls={false}
          slideSize={breakpointMaxW400 ? '100%' : '33.333333%'}
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          {blogContent.map((item, index) => (
              <Carousel.Slide key={index}>
                <div>
                  <Image
                    src={item.img}
                    alt="blog_post"
                    width={360}
                    height={249}
                    className={classes.imageStyle}
                  />
                  <Text className={classes.name} aria-label="product name">
                  {translate('temp5.ideas.title')}
                  </Text>
                  <Text className={classes.owner} aria-label="product owner">
                  {translate('temp5.ideas.author')}
                  </Text>
                </div>
              </Carousel.Slide>
            ))}
        </Carousel>
      </div>
    </Container>
  );
}
