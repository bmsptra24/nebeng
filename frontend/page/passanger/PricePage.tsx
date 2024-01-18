import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Octicons,
} from '@expo/vector-icons'
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  PresenceTransition,
  Text,
  VStack,
  View,
} from 'native-base'
import React, { Fragment, useEffect, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { usePositionState } from '../../store/usePositionState'
import AtomBoxInputOrder from '../../components/molecules/passanger/order/AtomBoxInputOrder'
import AtomButton from '../../components/atoms/AtomButton'
import { Platform } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import { useNavigationState } from '../../store/useNavigationState'

const PricePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedTime, setSelectedTime] = useState(new Date())
  const [showTimePicker, setShowTimePicker] = useState(false)

  const [isScheduleVisible, setIsScheduleVisible] = useState(false)

  const { setActivity } = useNavigationState()
  const [step, setStep] = useState<
    | 'estimate'
    | 'select-schedule'
    | 'selected-schelude'
    | 'order-proses'
    | 'finish-order'
  >('estimate')

  const handleOrderNowClick = () => {
    setStep('select-schedule')
    setIsScheduleVisible(true)
  }

  const handleBackButtonClick = () => {
    setStep('estimate')
    setIsScheduleVisible(false)
  }

  const {
    markerDestination,
    markerUserPosition,
    polylineCoordinates,
  } = usePositionState()

  const [mapRegion, setMapRegion] = useState({
    latitude: markerDestination.latitude,
    longitude: markerDestination.longitude,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  })

  useEffect(() => {
    setMapRegion({
      latitude: markerDestination.latitude,
      longitude: markerDestination.longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }, [markerDestination])

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    // Callback yang akan dijalankan ketika tanggal berubah
    setShowDatePicker(Platform.OS === 'ios') // iOS otomatis menutup date picker setelah memilih tanggal
    if (date) {
      setSelectedDate(date)
    }
  }

  const handleTimeChange = (event: DateTimePickerEvent, date?: Date) => {
    // Callback yang akan dijalankan ketika tanggal berubah
    setShowTimePicker(Platform.OS === 'ios') // iOS otomatis menutup date picker setelah memilih tanggal
    if (date) {
      setSelectedTime(date)
    }
  }

  const handlePress = () => {
    setStep('selected-schelude')
  }

  return (
    <Box safeAreaTop position={'relative'} w={'full'} h={'full'}>
      {/* maps */}
      <View
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        flex={1}
      >
        <MapView
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 48,
          }}
          region={mapRegion}
        >
          {/* Add Marker component */}
          <Marker
            coordinate={markerDestination}
            title="Your Location"
            description="This is your location"
          >
            <FontAwesome5 name="map-marker" size={36} color="red" />
          </Marker>

          <Marker
            coordinate={markerUserPosition}
            title="Your Location"
            description="This is your location"
          >
            <FontAwesome name="circle" size={30} color="blue" />
          </Marker>

          {/* Add Polyline component */}
          <Polyline
            coordinates={polylineCoordinates}
            strokeColor="blue"
            strokeWidth={2}
          />
        </MapView>
      </View>

      {/* Order now */}
      <VStack
        px={'6'}
        py={'10'}
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        justifyContent={'space-between'}
      >
        {step !== 'order-proses' && <AtomBoxInputOrder />}

        {step === 'estimate' && (
          <VStack
            bg={'white'}
            p={'5'}
            shadow={'6'}
            rounded={'3xl'}
            space={'1.5'}
          >
            <HStack justifyContent={'space-between'}>
              <Text>Estimate to destination</Text>
              <Text>4 Min</Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text>Price</Text>
              <Text>Rp7.000</Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text>Your Balance</Text>
              <Text>Rp15.000</Text>
            </HStack>
            <Text fontSize={'xs'}>You ‘ll earn 1 poin if Order Now</Text>
            <HStack alignItems={'center'} space={'5'}>
              <AntDesign
                name="calendar"
                size={50}
                color="red"
                onPress={handleOrderNowClick}
              />
              <AtomButton
                onPress={async () => {
                  setStep('order-proses')
                  // tunggu 5 detik
                  setTimeout(() => {
                    setStep('finish-order')
                  }, 5000)
                }}
                bg={'primary.700'}
                label="Order Now"
                variant="textOnly"
                style={{ flexGrow: 1, width: 'auto' }}
              />
            </HStack>
          </VStack>
        )}

        {step === 'order-proses' && (
          <VStack
            bg={'white'}
            p={'5'}
            shadow={'6'}
            rounded={'3xl'}
            space={'1.5'}
            alignItems={'center'}
            position={'absolute'}
            bottom={0}
            left={0}
            right={0}
            m={8}
          >
            <Text>Order Process</Text>
            <Text>Great! Your order is in process</Text>
            <Text>looking for someone to drive you</Text>
            <Button
              bg={'primary.700'}
              rounded={'full'}
              w={'1/2'}
              onPress={() => setStep('estimate')}
            >
              Cancel
            </Button>
          </VStack>
        )}

        {step === 'finish-order' && (
          <VStack
            bg={'white'}
            p={'5'}
            shadow={'6'}
            rounded={'3xl'}
            space={'1.5'}
            position={'absolute'}
            bottom={0}
            left={0}
            right={0}
            m={8}
          >
            <Text>Driver Name: Abeng</Text>
            <Text>Vehicle number plate: BG 1234 EA</Text>
            <Text fontSize={'xs'}>
              You can click button to pay and finish order
            </Text>
            <Button
              bg={'primary.700'}
              rounded={'full'}
              onPress={() => {
                setStep('estimate')
                setActivity('default')
              }}
            >
              <HStack w={'full'}>
                <Text color={'white'}>Finish Order </Text>
                <Text color={'white'}>Rp7.000</Text>
              </HStack>
            </Button>
          </VStack>
        )}
      </VStack>

      {/* schedule */}
      <PresenceTransition
        style={{
          position: 'absolute',
          zIndex: 2,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        visible={isScheduleVisible}
        initial={{
          opacity: 0,
          translateY: 400,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: {
            duration: 250,
          },
        }}
      >
        <VStack
          bg={'white'}
          p={'5'}
          shadow={'9'}
          roundedTop={'3xl'}
          space={'5'}
          mx={'6'}
        >
          <HStack justifyContent={'space-between'} alignItems={'center'}>
            <Ionicons
              name="chevron-back"
              size={40}
              color="black"
              onPress={handleBackButtonClick}
            />
            <Text fontSize={'3xl'} fontWeight={'semibold'}>
              Schedule
            </Text>
            <Ionicons name="chevron-back" size={40} color="transparent" />
          </HStack>

          {step === 'select-schedule' && (
            <Fragment key={'unselect-date'}>
              <HStack
                alignItems={'center'}
                space={'2.5'}
                onTouchStart={() => setShowDatePicker(true)}
              >
                <AntDesign name="calendar" size={40} color="red" />
                <VStack>
                  <Text fontWeight={'bold'}>Date</Text>
                  <Text>{`${selectedDate.toDateString()}`}</Text>
                </VStack>
              </HStack>

              <HStack
                alignItems={'center'}
                space={'2.5'}
                onTouchStart={() => setShowTimePicker(true)}
              >
                <Octicons name="clock" size={40} color="red" />
                <VStack>
                  <Text fontWeight={'bold'}>Time</Text>
                  <Text>{`${selectedTime.toTimeString()}`}</Text>
                </VStack>
              </HStack>

              <HStack alignItems={'center'}>
                {showDatePicker && (
                  <DateTimePicker
                    key="date-picker"
                    value={selectedDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
                {showTimePicker && (
                  <DateTimePicker
                    key="time-picker"
                    value={selectedTime}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                  />
                )}

                <AtomButton
                  onPress={handlePress}
                  bg={'primary.700'}
                  label="Set Order"
                  variant="textOnly"
                  style={{ justifyContent: 'center' }}
                />
              </HStack>
            </Fragment>
          )}

          {step === 'selected-schelude' && (
            <Fragment key={'selected-date'}>
              <VStack
                p={'5'}
                shadow={'6'}
                bg={'white'}
                rounded={'3xl'}
                space={'5'}
              >
                <HStack>
                  <Text>Lorong Tembesu</Text>
                </HStack>
                <HStack>
                  <Text>Bukit Lama</Text>
                </HStack>
                <Text>{`${selectedDate.toLocaleDateString()} at ${selectedTime.toLocaleTimeString()}`}</Text>
              </VStack>
            </Fragment>
          )}
        </VStack>
      </PresenceTransition>
    </Box>
  )
}

export default PricePage
