import ReactDOM from 'react-dom'
import React,{ Component }  from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'

if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_TRACE_UPDATES) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets


import 'ory-editor-ui/lib/index.css'

// react-tap-event-plugin is required for material-ui which is used by ory-editor-ui
// require('react-tap-event-plugin')()

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
import 'ory-editor-plugins-slate/lib/index.css'

// The spacer plugin
import spacer from 'ory-editor-plugins-spacer'
import 'ory-editor-plugins-spacer/lib/index.css'

// The image plugin
import image from 'ory-editor-plugins-image'
import 'ory-editor-plugins-image/lib/index.css'

// The video plugin
import video from 'ory-editor-plugins-video'
import 'ory-editor-plugins-video/lib/index.css'

// The parallax plugin
import parallax from 'ory-editor-plugins-parallax-background'
import 'ory-editor-plugins-parallax-background/lib/index.css'

// The divider plugin
import divider from 'ory-editor-plugins-divider'


import content from './content.js'
import './styles.css'

const plugins = {
  content: [slate(), spacer, image, video, divider],
  layout: [parallax({ defaultPlugin: slate() })]
}

export default class Article extends Component {
  render() {
    return <HTMLRenderer state={content[0]} plugins={plugins} />
  }
}
