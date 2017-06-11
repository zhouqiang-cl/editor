import React,{ Component }  from 'react'
import ReactDOM from 'react-dom'

if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_TRACE_UPDATES) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

// import demo from './demo'

// Renders json state to html, can be used on server and client side
import { HTMLRenderer } from 'ory-editor-renderer'

// The content state
import content from './content.js'
// const content = createEmptyState()
import './styles.css'
import { createArticle } from './backend'

// Define which plugins we want to use (all of the above)
export default class Admin extends Component {
    componentDidMount(){
         const plugins = {
      content: [slate(), spacer, image, video, divider],
      layout: [parallax({ defaultPlugin: slate() })]
    }

    const editor = new Editor({
      plugins: plugins,
      defaultPlugin:slate(),
      editables: [
        ...content,
        createEmptyState()
      ],
    })

    const element = document.getElementById("main")
    // for (const element of elements) {
      ReactDOM.render((
        <Editable
          editor={editor}
          id={element.dataset.id}
          onChange={(state) => {
            if(editor.store.getState().display.mode === "save") {
              const title = document.getElementById("input_title").value
              createArticle(title,JSON.stringify(state))
            }
          }}
        />
      ), element)
    // }
    console.log(element.dataset.id)

    ReactDOM.render((
      <div>
        <Trash editor={editor} />
        <DisplayModeToggle editor={editor} />
        <Toolbar editor={editor} />
      </div>
    ), document.getElementById('controls'))
      ReactDOM.render((
        <MuiThemeProvider>
          <TextField
            hintText="Input Title"
            id="input_title"/>
        </MuiThemeProvider>
      ), document.getElementById('title'))
    }
    render () {
      return (
        <div>
          <div class="title">
            <div id="title">BBABAAB
            </div>
          </div>
          <div class="container">
            <div class="editable editable-area" data-id="1" id="main"></div>
          </div>
          <div id="controls"></div>
        </div>
        )
    }
  }