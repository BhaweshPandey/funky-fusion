/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { forwardRef, useContext, useState } from 'react';
import {
  Container,
  Group,
  Burger,
  Text,
  Flex,
  Box,
  Button,
  Code,
  Tooltip,
  useMantineColorScheme,
  ScrollArea,
  Drawer,
  Divider,
  rem,
} from '@mantine/core';
import { HotkeyItem, useDisclosure, useHotkeys } from '@mantine/hooks';
import {
  IconUser,
  IconShoppingCart,
  IconLanguage,
  IconBrightnessDownFilled,
  IconMoonFilled,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Header.module.css';
import { isRtl, toggleLang } from '@/pages/landing-page-5';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';

const headerLinks = [
  { name: 'title1', link: '/' },
  { name: 'title2', link: '/about' },
  { name: 'title3', link: '/services' },
  { name: 'title4', link: '/blog' },
  { name: 'title5', link: '/contact' },
];
const ToolTipToogle = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props}>
    <ThemeToggleButton />
  </div>
));
const ThemeToggleButton: React.FC = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  return colorScheme === 'dark' ? (
    <IconBrightnessDownFilled className={classes.icon} onClick={() => toggleColorScheme()} />
  ) : (
    <IconMoonFilled className={classes.icon} onClick={() => toggleColorScheme()} />
  );
};
const CustomToolTip = forwardRef<HTMLDivElement>((props, ref) => {
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <div ref={ref} {...props}>
      <IconLanguage className={classes.icon} onClick={() => changeLanguage()} />
    </div>
  );
});

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(headerLinks[0].link);
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  const { toggleColorScheme } = useMantineColorScheme();

  const hotkeys: HotkeyItem[] = [
    ['mod+J', () => toggleColorScheme()],
    ['ctrl+L', () => changeLanguage()],
  ];

  useHotkeys(hotkeys);

  const items = headerLinks.map((link) => (
    <a
      key={link.name}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {translate(`temp5.navbar.${link.name}` as keyof typeof translate)}
    </a>
  ));

  return (
    <Box
      className={classes.subHeader}
      style={{
        backgroundPosition: language == 'ar' ? 'center left, 15% 20%' : 'center right, 95% 20%',
      }}
    >
      <Container size="xl">
        <header className={classes.header}>
          <Container size="xl" className={classes.inner}>
            <Text className={classes.headingLogo}>{translate('temp5.header.logoText')}</Text>
            <Group gap={5} visibleFrom="sm">
              {items}
              <Flex gap="24px" ml="33px">
                <Link href="/user" className={classes.links} aria-label="user">
                  <IconUser className={classes.icon} />
                </Link>
                <Link href="/user" className={classes.links} aria-label="shopping cart">
                  <IconShoppingCart className={classes.icon} />
                </Link>

                <Tooltip
                  withinPortal
                  position="bottom"
                  withArrow
                  label={
                    <Text>
                      <Code>ctrl+L</Code> to switch language
                    </Text>
                  }
                >
                  <CustomToolTip />
                </Tooltip>
                <Tooltip label="Ctrl+J toggle theme" withArrow position="bottom" arrowSize={8}>
                  <ToolTipToogle />
                </Tooltip>
              </Flex>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              aria-label="menu"
            />
          </Container>
        </header>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Text ml={20} className={classes.headingLogo}>
              {translate('temp5.header.logoText')}
            </Text>
            <Group gap={30} display="flex" ml={10}>
              <Button
                variant="subtle"
                h="50px"
                color="gray"
                onClick={() => {
                  changeLanguage();
                }}
                aria-label="toggle language"
              >
                <Flex direction="column" align="center">
                  <IconLanguage />
                </Flex>
              </Button>
              <Link href="/user" className={classes.links} aria-label="user">
                <IconUser className={classes.icon} />
              </Link>
              <Link href="/user" className={classes.links} aria-label="shopping cart">
                <IconShoppingCart className={classes.icon} />
              </Link>
            </Group>
            <Divider my="sm" />
            <>
              <a href="#" className={classes.link}>
                {translate('temp5.navbar.title1')}
              </a>
              <a href="#" className={classes.link}>
                {translate('temp5.navbar.title2')}
              </a>
              <a href="#" className={classes.link}>
                {translate('temp5.navbar.title3')}
              </a>
              <a href="#" className={classes.link}>
                {translate('temp5.navbar.title4')}
              </a>
              <a href="#" className={classes.link}>
                {translate('temp5.navbar.title5')}
              </a>
            </>
          </ScrollArea>
        </Drawer>
        <Flex>
          <Box>
            <Text className={classes.tagline}>{translate('temp5.header.tagline')}</Text>
            <Flex gap="33px" mt={33}>
              <Button className={classes.shopNowBtn}>{translate('temp5.header.button1')}</Button>
              <Button className={classes.exploreBtn}>{translate('temp5.header.button2')}</Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
