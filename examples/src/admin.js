import React,{ Component }  from 'react'
import ReactDOM from 'react-dom'

if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_TRACE_UPDATES) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' // we also want to load the stylesheets

import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-ui/lib/index.css'

import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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

// The content state
import content from './content.js'
// const content = createEmptyState()
import './styles.css'
import { createArticle } from './backend'

import github from "./plugins"

export default class Admin extends Component {
    componentDidMount(){
      const plugins = {
        content: [slate(), spacer, image, video, divider, github],
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
          <div class="title" style={{ textAlign: "center"}}>
            <div id="title" >
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
