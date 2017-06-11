import React from 'react'
import ImageIcon from 'material-ui/svg-icons/image/panorama'

import { iconStyle } from '../common.js'
import type { PropTypes } from '../index.js'
import { doGet } from "./extend"


const Display = ({ state }: PropTypes) => {
    if(state.src) {
        // doGet("https://api.github.com/users/mojombo/received_events").end(
            // data=> {
                console.log("fetch api.github.com")
                return (
                    <div>
                        <img className="ory-plugins-content-image" src={state.src} />
                    </div>
                    )
            // }
        // )
    } else {
        return (
        <div>
            <div className="ory-plugins-content-image-placeholder">
                <ImageIcon style={iconStyle} />
            </div>
        </div>
        )
    }
}
export default Display
