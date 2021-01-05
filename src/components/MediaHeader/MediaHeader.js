import React from 'react'
import { withRouter } from 'react-router-dom'
import './MediaHeader.css'

const MediaHeader = (props) => {
    return (
        <div id="MediaHeader">
            <div>
				<h4>{props.text}</h4>
			</div>
        </div>
    )
}

export default withRouter(MediaHeader)
