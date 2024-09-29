/* eslint-disable linebreak-style */
import { Carousel } from '@mantine/carousel';
import { Box, Button, Center, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { IconPlus } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Images } from '@/public';
import classes from './Product.module.css';
import { translate } from '@/i18n';

const productData = [
  { img: Images.product1, price: '$50.00', name: 'chair1' },
  { img: Images.product2, price: '$78.00', name: 'chair2' },

  { img: Images.product3, price: '$48.00', name: 'chair3' },
];

export default function ProductSection() {
  const breakpointMaxW870 = useMediaQuery('(max-width: 870px)');
  const breakpointMaxW800 = useMediaQuery('(max-width: 800px)');

  function breakpointMaxW(): string {
    if (breakpointMaxW800) {
      return '100%';
    } if (breakpointMaxW800) {
      return '50%';
    }
      return '33.333333%';
  }

  return (
    <Container size="xl" mt={100}>
      <Flex gap="xl" wrap={breakpointMaxW870 ? 'wrap' : 'nowrap'}>
        <Box>
          <Text className={classes.craftText}>{translate('temp5.body.poc.title')}</Text>
          <Text className={classes.craftContent}>
            {translate('temp5.body.poc.desc')}
          </Text>
          <Button className={classes.exploreBtn}>{translate('temp5.body.poc.button2')}</Button>
        </Box>

        <Carousel
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
                <Center>
                  <Image
                    src={item.img}
                    width={200}
                    height={300}
                    alt="product"
                    objectFit="contain"
                    quality={100}
                  />
                </Center>
                <Text className={classes.productName}>{translate(`temp5.body.poc.${item.name}` as keyof typeof translate)}</Text>
                <Text className={classes.productPrice}>{item.price}</Text>
                <Center>
                  <IconPlus className={classes.plusIcon} />
                </Center>
              </Carousel.Slide>
            ))}
        </Carousel>
      </Flex>
    </Container>
  );
}
