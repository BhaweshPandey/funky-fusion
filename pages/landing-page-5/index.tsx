/* eslint-disable linebreak-style */
import { FunctionComponent } from 'react';
import { Box, useMantineColorScheme } from '@mantine/core';
import ProductSection from '@/components/modules/Landing-Page-5/ProductSection/ProductSection';
import ServicesSection from '@/components/modules/Landing-Page-5/ServicesSection/ServicesSection';
import AboutServices from '@/components/modules/Landing-Page-5/AboutServices/AboutServices';
import TestimonialSection from '@/components/modules/Landing-Page-5/TestimonialSection/TestimonialSection';
import RecentBlog from '@/components/modules/Landing-Page-5/RecentBlog/RecentBlog';
import NewsLetter from '@/components/modules/Landing-Page-5/NewsLetter/NewsLetter';
import Footer from '@/components/modules/Landing-Page-5/Footer/Footer';
import { Header } from '@/components/modules/Landing-Page-5/Header/Header';




const Homepage: FunctionComponent = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Box style={{ backgroundColor: colorScheme === 'light' ? '#EFF2F1' : '#000' }}>
        <Header />
        <ProductSection />
        <ServicesSection />
        <AboutServices />
        <TestimonialSection />
        <RecentBlog />
      </Box>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Homepage;
