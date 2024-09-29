/* eslint-disable linebreak-style */
import { Container, Flex, Grid, Text } from '@mantine/core';
import { Icon3dRotate, IconTruck } from '@tabler/icons-react';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import classes from './Services.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';

const servicesContent = [
  {
    icon: <IconTruck />,
    name: 'Fast  & Free Shipping',
    content: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was',
  },
  {
    icon: <Icon3dRotate />,
    name: 'Easy to Shop ',
    content: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was',
  },
  {
    icon: <IconTruck />,
    name: '24/7 Support ',
    content: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was',
  },
  {
    icon: <IconTruck />,
    name: 'Fast  & Free Shipping ',
    content: 'Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was',
  },
];

export default function ServicesSection() {
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <Container size="xl" mt={100}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
          <Text className={classes.heading}>{translate('temp5.body.usp.section2.title')}</Text>
          <Text className={classes.subHeading}>
            {translate('temp5.body.usp.section1.desc')}
          </Text>
          <Grid mt="50px">
            {servicesContent.map((service) => (
                <Grid.Col key={service.name} span={{ base: 12, xs: 6, sm: 4, md: 6, lg: 6 }}>
                  {service.icon}
                  <Text className={classes.serviceName}> {translate('temp5.body.usp.section1.desc2')}</Text>
                  <Text className={classes.serviceContent}>{translate('temp5.body.usp.section1.desc')}</Text>
                </Grid.Col>
              ))}
          </Grid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 12, xs: 12, md: 12, lg: 6 }}>
          <Flex pos="relative" ml={12}>
            <Image src={Images.yellow_dots} width={250} height={220} alt="service_img" className={classes.yellowDots} />
            <Image
              src={Images.services}
              className={classes.img}
              width={550}
              height={700}
              alt="service_img"
              style={language =="ar" ? {
                position: 'relative',
                left: '190px',
              } : {
                position: 'relative',
                right: '220px',
              }}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
