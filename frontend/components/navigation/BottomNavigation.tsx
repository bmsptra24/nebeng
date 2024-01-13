import React, { useState } from 'react'
import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
} from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { InterfaceIconProps } from 'native-base/lib/typescript/components/primitives/Icon/types'
import MolForm from '../molecules/login/MolForm'
import TempAuth from '../templates/TempAuth'
import MolBtnLogin from '../molecules/auth/MolBtn'
import AtomButton from '../atoms/AtomButton'
import HomePage from '../../page/passanger/HomePage'

interface NavigationItem {
  icon: InterfaceIconProps['as']
  label: string
  onPress: () => void
  component: React.ReactElement
}

const BottomNavigationItem: React.FC<
  NavigationItem & { isSelected: boolean }
> = ({ icon, label, onPress, isSelected }) => (
  <Pressable opacity={isSelected ? 1 : 0.5} py="3.5" flex={1} onPress={onPress}>
    <Center>
      <Icon mb="1" as={icon} color="white" size="sm" />
      <Text color="white" fontSize="12">
        {label}
      </Text>
    </Center>
  </Pressable>
)

const BottomNavigation: React.FC = () => {
  const [selected, setSelected] = useState(1)
  console.log({ selected })

  const navigationItems: NavigationItem[] = [
    {
      icon: (
        <MaterialCommunityIcons
          name={selected === 0 ? 'home' : 'home-outline'}
        />
      ),
      label: 'Home',
      onPress: () => setSelected(0),
      component: <HomePage />,
    },
    {
      icon: <MaterialIcons name="search" />,
      label: 'Search',
      onPress: () => setSelected(1),
      component: <></>,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={selected === 2 ? 'cart' : 'cart-outline'}
        />
      ),
      label: 'Cart',
      onPress: () => setSelected(2),
      component: <Text>dddd</Text>,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={selected === 3 ? 'account' : 'account-outline'}
        />
      ),
      label: 'Account',
      onPress: () => setSelected(3),
      component: <Text>fff</Text>,
    },
  ]

  const Component = () => (
    <>
      {navigationItems.map((item, index) => {
        if (index === selected) return item.component
      })}
    </>
  )

  return (
    <Box
      flex={1}
      width="100%"
      alignSelf="center"
      justifyContent={'space-between'}
    >
      <ScrollView mb={'16'}>
        <Component />
      </ScrollView>
      <HStack
        bg="primary.100"
        alignItems="center"
        safeAreaBottom
        shadow={6}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        {navigationItems.map((item, index) => (
          <BottomNavigationItem
            key={index}
            {...item}
            isSelected={index === selected}
          />
        ))}
      </HStack>
    </Box>
  )
}

export default BottomNavigation
