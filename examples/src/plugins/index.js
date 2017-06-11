import React from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from 'material-ui/svg-icons/toggle/star'

// This is the ReactJS component which you can find below this snippet
import Component from './Component'

export default {
  Component: Component,
  IconComponent: <StarIcon />,
  name: 'github api framework',
  version: '0.0.1',
  text: 'GitHub API Framework',
  isInlineable: true,
  description: 'Load github repos'
}
