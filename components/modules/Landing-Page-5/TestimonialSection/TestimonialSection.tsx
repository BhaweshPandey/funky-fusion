/* eslint-disable linebreak-style */
import { Carousel } from '@mantine/carousel';
import { Center, Container, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './Testimonial.module.css';
import { Images } from '@/public';
import { TxKeyPath, translate } from '@/i18n';

const testimonialContent = [
  {
    content:
         'temp5.body.testimonials.tesimonial' as TxKeyPath,
    img: Images.profile_image,
    name: 'temp5.body.testimonials.author' as TxKeyPath,
    status: 'temp5.body.testimonials.title' as TxKeyPath,
  },
  {
    content:
    'temp5.body.testimonials.tesimonial' as TxKeyPath,
    img: Images.profile_image,
    name: 'temp5.body.testimonials.author' as TxKeyPath,
    status: 'temp5.body.testimonials.title' as TxKeyPath,
  },
  {
    content:
    'temp5.body.testimonials.tesimonial' as TxKeyPath,
    img: Images.profile_image,
    name: 'temp5.body.testimonials.author' as TxKeyPath,
    status: 'temp5.body.testimonials.title' as TxKeyPath,
  },
  {
    content:
    'temp5.body.testimonials.tesimonial' as TxKeyPath,
    img: Images.profile_image,
    name: 'temp5.body.testimonials.author' as TxKeyPath,
    status: 'temp5.body.testimonials.title' as TxKeyPath,
  },
  {
    content:
    'temp5.body.testimonials.tesimonial' as TxKeyPath,
    img: Images.profile_image,
    name: 'temp5.body.testimonials.author' as TxKeyPath,
    status: 'temp5.body.testimonials.title' as TxKeyPath,
  },
];

export default function TestimonialSection() {
  const breakpointMaxW700 = useMediaQuery('(max-width: 700px)');
  return (
    <Container size="xl" mt={100}>
      <Center>
        <Text className={classes.heading}>{translate('temp5.body.testimonials.title')}</Text>
      </Center>
      <Carousel
        withControls={!breakpointMaxW700}
        nextControlIcon={<IconChevronRight aria-label="next_icon" />}
        previousControlIcon={<IconChevronLeft aria-label="previous_icon" />}
        mih={300}
        mt="40px"
        loop
        classNames={{
          indicator: classes.indicator,
        }}
      >
        {testimonialContent.map((item) => (
            <Carousel.Slide key={item.name}>
              <Center>
                <Text className={classes.content}>{translate(item.content) as TxKeyPath}</Text>
              </Center>
              <Center mt={20}>
                <Image
                  src={item.img}
                  width={60}
                  height={60}
                  alt="product"
                  objectFit="contain"
                  quality={100}
                />
              </Center>
              <Center>
                <Text className={classes.userName}>{translate('temp5.body.testimonials.author') as keyof typeof translate}</Text>
              </Center>
              <Center>
                <Text className={classes.userStatus}>{translate(item.status) as TxKeyPath}</Text>
              </Center>
            </Carousel.Slide>
          ))}
      </Carousel>
    </Container>
  );
}
