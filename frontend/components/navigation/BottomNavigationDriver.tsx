import React from 'react'
import {
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Slide,
  Text,
} from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { InterfaceIconProps } from 'native-base/lib/typescript/components/primitives/Icon/types'
import { useNavigationState } from '../../store/useNavigationState'
import AtomButton from '../atoms/AtomButton'
import { logOut } from '../../utils/authentication'
import HomePage from '../../page/driver/HomePage'

interface NavigationItem {
  icon: InterfaceIconProps['as']
  label: string
  onPress: () => void
  component: React.ReactElement
}

const BottomNavigationDriverItem: React.FC<
  NavigationItem & { isSelected: boolean }
> = ({ icon, label, onPress, isSelected }) => (
  <Pressable opacity={isSelected ? 1 : 0.5} py="3.5" flex={1} onPress={onPress}>
    <Center>
      <Icon mb="1" as={icon} color="white" size="lg" />
      <Text color="white" fontSize="12">
        {label}
      </Text>
    </Center>
  </Pressable>
)

const BottomNavigationDriver: React.FC = () => {
  const { selectedPage, setSelectedPage } = useNavigationState()

  const navigationItems: NavigationItem[] = [
    {
      icon: (
        <MaterialCommunityIcons
          name={selectedPage === 0 ? 'home' : 'home-outline'}
        />
      ),
      label: 'Home',
      onPress: () => setSelectedPage(0),
      component: <HomePage />,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={selectedPage === 1 ? 'wallet' : 'wallet-outline'}
        />
      ),
      label: 'Saldo',
      onPress: () => setSelectedPage(1),
      component: <Center>Comming soon</Center>,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={selectedPage === 2 ? 'chat' : 'chat-outline'}
        />
      ),
      label: 'Chat',
      onPress: () => setSelectedPage(2),
      component: <Center>Comming soon</Center>,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={selectedPage === 3 ? 'account' : 'account-outline'}
        />
      ),
      label: 'Account',
      onPress: () => setSelectedPage(3),
      component: (
        <Center>
          <AtomButton
            bg={'primary.700'}
            label="Log Out"
            variant="textOnly"
            onPress={() => logOut()}
          />
        </Center>
      ),
    },
  ]

  const Component = () => (
    <>
      {navigationItems.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {index === selectedPage && item.component}
          </React.Fragment>
        )
      })}
    </>
  )

  return (
    <Box
      flex={1}
      width="100%"
      alignSelf="center"
      justifyContent={'space-between'}
      safeAreaTop
    >
      <Box flexGrow={1} position={'relative'}>
        <Component />
      </Box>
      <HStack
        bg="primary.100"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        zIndex={1}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationDriverItem
            key={index}
            {...item}
            isSelected={index === selectedPage}
          />
        ))}
      </HStack>
    </Box>
  )
}

export default BottomNavigationDriver
