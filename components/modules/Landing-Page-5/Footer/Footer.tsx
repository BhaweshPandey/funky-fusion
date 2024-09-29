/* eslint-disable linebreak-style */
import { Box, Container, Divider, Flex, Grid, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import classes from './Footer.module.css';
import { translate } from '@/i18n';

const svg = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_489)">
          <path
            d="M10.4678 10.6875L11.001 7.24895H7.6669V5.01756C7.6669 4.07684 8.13265 3.15986 9.6259 3.15986H11.1416V0.232305C11.1416 0.232305 9.76615 0 8.45102 0C5.70527 0 3.91052 1.64691 3.91052 4.62828V7.24895H0.858398V10.6875H3.91052V19H7.6669V10.6875H10.4678Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_489">
            <rect width="12" height="19" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_497)">
          <path
            d="M8.00356 4.95708C5.73214 4.95708 3.89999 6.7606 3.89999 8.99653C3.89999 11.2325 5.73214 13.036 8.00356 13.036C10.275 13.036 12.1071 11.2325 12.1071 8.99653C12.1071 6.7606 10.275 4.95708 8.00356 4.95708ZM8.00356 11.6227C6.53571 11.6227 5.33571 10.445 5.33571 8.99653C5.33571 7.5481 6.53214 6.37036 8.00356 6.37036C9.47499 6.37036 10.6714 7.5481 10.6714 8.99653C10.6714 10.445 9.47142 11.6227 8.00356 11.6227ZM13.2321 4.79185C13.2321 5.31567 12.8036 5.73403 12.275 5.73403C11.7429 5.73403 11.3179 5.31216 11.3179 4.79185C11.3179 4.27153 11.7464 3.84966 12.275 3.84966C12.8036 3.84966 13.2321 4.27153 13.2321 4.79185ZM15.95 5.7481C15.8893 4.48599 15.5964 3.36802 14.6571 2.44692C13.7214 1.52583 12.5857 1.23755 11.3036 1.17427C9.98214 1.10044 6.02142 1.10044 4.69999 1.17427C3.42142 1.23403 2.28571 1.52231 1.34642 2.44341C0.407136 3.3645 0.11785 4.48247 0.0535644 5.74458C-0.0214355 7.04536 -0.0214355 10.9442 0.0535644 12.245C0.114279 13.5071 0.407136 14.625 1.34642 15.5461C2.28571 16.4672 3.41785 16.7555 4.69999 16.8188C6.02142 16.8926 9.98214 16.8926 11.3036 16.8188C12.5857 16.759 13.7214 16.4708 14.6571 15.5461C15.5928 14.625 15.8857 13.5071 15.95 12.245C16.025 10.9442 16.025 7.04888 15.95 5.7481ZM14.2428 13.6407C13.9643 14.3297 13.425 14.8606 12.7214 15.1383C11.6679 15.5497 9.16785 15.4547 8.00356 15.4547C6.83928 15.4547 4.33571 15.5461 3.28571 15.1383C2.58571 14.8641 2.04642 14.3333 1.76428 13.6407C1.34642 12.6036 1.44285 10.1426 1.44285 8.99653C1.44285 7.85044 1.34999 5.38599 1.76428 4.35239C2.04285 3.66333 2.58214 3.13247 3.28571 2.85474C4.33928 2.44341 6.83928 2.53833 8.00356 2.53833C9.16785 2.53833 11.6714 2.44692 12.7214 2.85474C13.4214 3.12895 13.9607 3.65981 14.2428 4.35239C14.6607 5.3895 14.5643 7.85044 14.5643 8.99653C14.5643 10.1426 14.6607 12.6071 14.2428 13.6407Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_497">
            <rect width="16" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2525 4.03741C15.2633 4.18842 15.2633 4.33946 15.2633 4.49046C15.2633 9.0964 11.7576 14.4035 5.35025 14.4035C3.37626 14.4035 1.54252 13.8318 0 12.8395C0.280467 12.8718 0.550109 12.8826 0.841367 12.8826C2.47015 12.8826 3.96953 12.3325 5.16687 11.394C3.63514 11.3617 2.35151 10.3585 1.90925 8.97777C2.125 9.01011 2.34072 9.03169 2.56727 9.03169C2.88007 9.03169 3.19291 8.98853 3.48414 8.91306C1.8877 8.58942 0.690326 7.18716 0.690326 5.49363V5.4505C1.15414 5.70938 1.69353 5.87118 2.26518 5.89273C1.32673 5.26709 0.711908 4.19921 0.711908 2.99108C0.711908 2.34388 0.884465 1.75061 1.18651 1.23284C2.90162 3.34705 5.47968 4.72774 8.37051 4.87878C8.31659 4.61989 8.28421 4.35025 8.28421 4.08057C8.28421 2.1605 9.83752 0.596436 11.7683 0.596436C12.7715 0.596436 13.6776 1.01712 14.314 1.69669C15.1014 1.54568 15.8565 1.25442 16.5253 0.85532C16.2664 1.66435 15.7163 2.34392 14.9936 2.77536C15.6948 2.69989 16.3743 2.50568 16.9999 2.23604C16.5254 2.92637 15.9321 3.54119 15.2525 4.03741Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.13375 14.0002H0.23125V4.6533H3.13375V14.0002ZM1.68094 3.3783C0.752813 3.3783 0 2.60955 0 1.68143C6.64312e-09 1.23561 0.177098 0.80806 0.492335 0.492823C0.807572 0.177587 1.23513 0.000488281 1.68094 0.000488281C2.12675 0.000488281 2.5543 0.177587 2.86954 0.492823C3.18478 0.80806 3.36188 1.23561 3.36188 1.68143C3.36188 2.60955 2.60875 3.3783 1.68094 3.3783ZM13.9969 14.0002H11.1006V9.45018C11.1006 8.3658 11.0787 6.97518 9.59156 6.97518C8.0825 6.97518 7.85125 8.1533 7.85125 9.37205V14.0002H4.95188V4.6533H7.73562V5.9283H7.77625C8.16375 5.19393 9.11031 4.41893 10.5225 4.41893C13.46 4.41893 14 6.3533 14 8.8658V14.0002H13.9969Z"
          fill="black"
        />
      </svg>
    ),
  },
];

const policyLinkData = [
  { name: 'Terms & Conditions', link: '/' },
  { name: 'Privacy Policy', link: '/' },
];

const footerLinks = [
  { link: '/', name: 'About us' },
  { link: '/', name: 'Support' },
  { link: '/', name: 'Jobs' },
  { link: '/', name: 'Nordic Chair' },
  { link: '/', name: 'Services' },
  { link: '/', name: 'Knowledge base' },
  { link: '/', name: 'Our team' },
  { link: '/', name: 'Kruzo Aero' },
  { link: '/', name: 'Blog' },
  { link: '/', name: 'Live chat' },
  { link: '/', name: 'Leadership' },
  { link: '/', name: 'Ergonomic' },
  { link: '/', name: 'Contact us' },
  { link: '/', name: 'Privacy Policy' },
];
export default function Footer() {
  return (
    <Container size="xl" mt={-30} pb={40}>
      <Text className={classes.heading}>{translate('temp5.header.logoText')}</Text>
      <Grid justify="space-between" mt={22}>
        <Grid.Col span={{ base: 12, md: 7, lg: 6, xl: 6 }}>
          <Box>
            <Text className={classes.footerContent}>
            {translate('temp5.body.usp.section2.desc')}{' '}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 12, lg: 6, xl: 6 }}>
          <Grid>
            {footerLinks.map((link) => (
                <Grid.Col key={link.name} span={{ base: 4, xs: 4, sm: 4, md: 3, lg: 3 }}>
                  <Link href={link.link} className={classes.footerLink}>
                  {translate('temp5.body.poc.chair2')}
                  </Link>
                </Grid.Col>
              ))}
          </Grid>
        </Grid.Col>
      </Grid>
      <Flex gap="12px" mt="12px">
        {svg.map((item, index) => (
            <Flex className={classes.iconStyle} key={index} justify="center">
              <Link href="/" className={classes.linkStyle}>
                {item.icon}
              </Link>
            </Flex>
          ))}
      </Flex>
      <Divider my="40px" />
      <Flex justify="space-between">
        <Text className={classes.footerContent}>
        {translate('temp5.footer')}
        </Text>
        <Flex gap="12px">
          {policyLinkData.map((link) => (
              <Link href={link.link} key={link.name} className={classes.policyLink}>
                <Text>{translate('temp5.body.poc.chair2')}</Text>
              </Link>
            ))}
        </Flex>
      </Flex>
    </Container>
  );
}
