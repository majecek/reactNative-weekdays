/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import DayItem from './src/dayItem'
import Moment from 'moment'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' // move stuff width wise
  }
})

const weekDays = () => (
  <View style={styles.container}>
    <Text>
      {Moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
    </Text>
    {daysComponent()}
  </View>
)

const daysComponent = () => {
  const daysItems = []
  for (let i = 0; i < 8; i++) {
    const day = Moment().add(i, 'days').format('dddd')
    daysItems.push(
      <DayItem key={i} day={day} daysUntil={i} />
    )
  }

  return daysItems
}

weekDays.propTypes = {}
weekDays.defaultProps = {}

export default weekDays

AppRegistry.registerComponent('weekdaysNew', () => weekDays)
