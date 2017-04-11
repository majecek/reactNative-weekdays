/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Text, View, AppRegistry } from 'react-native'

const weekDays = (props) => {
  return (
    <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  )
}

weekDays.propTypes = {}
weekDays.defaultProps = {}

export default weekDays

AppRegistry.registerComponent('weekdays', () => weekDays)