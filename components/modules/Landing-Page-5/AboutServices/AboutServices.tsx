/* eslint-disable linebreak-style */
import { Box, Button, Container, Flex, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { IconCircle } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import classes from './AboutServices.module.css';
import { Images } from '@/public';
import { isRtl } from '@/pages/landing-page-5';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';

const aboutServicesPoints = [
  { content: 'Donec mattis porta eros,let aliquet finibus ri' },
  { content: 'Donec mattis porta eros,let aliquet finibus ri' },

  { content: 'Donec mattis porta eros,let aliquet finibus ri' },

  { content: 'Donec mattis porta eros,let aliquet finibus ri' },
];
const productData = [
  {
    img: Images.product1,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Nordic CHAIR',
  },
  {
    img: Images.product2,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Kruzo Aero Chair',
  },

  {
    img: Images.product3,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Ergonomic CHAIR',
  },
  {
    img: Images.product1,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Nordic CHAIR',
  },
  {
    img: Images.product2,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Kruzo Aero Chair',
  },

  {
    img: Images.product3,
    description: 'Donec mattis porta eros, aliquet finibus risus in. Donecd ',
    name: 'Ergonomic CHAIR',
  },
];

export default function AboutServices() {
  const breakpointMaxW870 = useMediaQuery('(max-width: 870px)');
  const breakpointMaxW800 = useMediaQuery('(max-width: 800px)');
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)



  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  function breakpointMaxW(): string {
    if (breakpointMaxW800) {
      return '100%';
    } if (breakpointMaxW870) {
      return '50%';
    }
      return '33.333333%';
  }

  return (
    <Container size="xl" mt={100}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 12, xs: 12, md: 12, lg: 6 }}>
          <Box className={classes.boxStyle} w="100%">
            <Box>
              <Image
                src={Images.interior}
                height={500}
                width={400}
                alt="interior"
                className={classes.interior}
              />
            </Box>
            <Box style={language =="ar" ? {
              position: 'relative',
              display: 'inline',
              bottom: '60%',
              right: '54%',
            } : {
              position: 'relative',
              display: 'inline',
              bottom: '60%',
              left: '55%',
            }}
            >
              <Image
                src={Images.chair}
                height={330}
                width={270}
                alt="chair"
                className={classes.chairImage}

              />
            </Box>

            <Box
              className={classes.office}
              style={language=="ar" ? {
              position: 'absolute',
              right: '45%',
              top: 0,
            } : {
              position: 'absolute',
              right: '4%',
              top: 0,
            }}
            >
              <Image src={Images.office} height={170} width={160} alt="office" className={classes.officeImage} />
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 12, xs: 12, md: 12, lg: 6 }}>
          <Box w="100%">
            <Text className={classes.heading}>{translate('temp5.body.usp.section1.title')}</Text>
            <Text className={classes.content}>
              {translate('temp5.body.usp.section1.desc')}
            </Text>
            <Grid mt="50px">
              {aboutServicesPoints.map((item, index) => (
                  <Grid.Col key={index} span={{ base: 12, xs: 6, sm: 6, md: 6, lg: 6 }}>
                    <Flex align="center" gap="lg">
                      <IconCircle className={classes.circleIcon} />
                      <Text className={classes.aboutServicePoint}>{translate('temp5.body.usp.section1.item2')}</Text>
                    </Flex>
                  </Grid.Col>
                ))}
            </Grid>
            <Button className={classes.exploreBtn}>{translate('temp5.header.button2')}</Button>
          </Box>
        </Grid.Col>
      </Grid>

      <Carousel
        mt="200px"
        slideSize={breakpointMaxW()}
        slideGap="md"
        withControls={false}
        loop
        align="start"
        w="100%"
        slidesToScroll={3}
      >
        {productData.map((item) => (
            <Carousel.Slide key={item.name}>
              <Flex align="center" gap="33px">
                <Image
                  src={item.img}
                  width={100}
                  height={110}
                  alt="product"
                  objectFit="contain"
                  quality={100}
                />
                <Box>
                  <Text className={classes.productName}>{translate('temp5.body.poc.chair3')}</Text>
                  <Text className={classes.productDescription}>{translate('temp5.body.poc.subDesc')}</Text>
                  <Button className={classes.readMoreBtn}>{translate('temp5.read')}</Button>
                </Box>
              </Flex>
            </Carousel.Slide>
          ))}
      </Carousel>
    </Container>
  );
}
