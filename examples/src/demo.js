import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from 'material-ui/svg-icons/toggle/star'

// This is the ReactJS component which you can find below this snippet
import InputTextField from './component'

export default {
  Component: InputTextField,
  IconComponent: <StarIcon />,
  name: 'example/content/input-text-field',
  version: '0.0.1',
  text: 'API Framework'
}