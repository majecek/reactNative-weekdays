/**
 * Created by marek on 13/04/2017.
 */

// import some code
import React, { PropTypes } from 'react'
import { Text } from 'react-native'

// create our component

const DayItem = ({ day, daysUntil }) => {
  return (
    <Text style={style(daysUntil)}>
      {day}
    </Text>
  )
}

DayItem.propTypes = {
  day: PropTypes.String,
  daysUntil: PropTypes.number
}
DayItem.defaultProps = {}

const style = (daysUntil) => {
  console.log(daysUntil)
  return {
    color: color(daysUntil),
    fontWeight: Number(fontWeight(daysUntil)).toString(),
    fontSize: fontSize(daysUntil),
    lineHeight: lineHeight(daysUntil)
  }
}

const color = (daysUntil) => {
  daysUntil = daysUntil === 0 ? 0.0001 : daysUntil
  const opacity = 1 / daysUntil
  return 'rgba(0, 0, 0, ' + opacity + ')'
}

const fontWeight = (daysUntil) => {
  const weight = (7 - daysUntil) * 100
  console.log('fontWeight', daysUntil, weight)

  return weight === 0 ? 100 : weight
}

const fontSize = (daysUntil) => {
  return 60 - 6 * daysUntil
}

const lineHeight = (daysUntil) => {
  return 70 - 4 * daysUntil
}

export default DayItem
