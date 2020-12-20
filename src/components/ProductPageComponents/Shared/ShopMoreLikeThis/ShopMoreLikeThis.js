import React from 'react'
import { withRouter } from 'react-router-dom';
import './ShopMoreLikeThis.css'



const ShopMoreLikeThis = (props) => {
    // console.log('ShopMoreLikeThis props',props)
    return (
        <div className="ShopmorelikethisStyle">
            <p>Shop more like this:</p>
            <p>
                <span className="ShopmorelikethisItems">{props.location.state.theme}</span>
                <span className="ShopmorelikethisItems">{props.location.state.interests}</span>
            </p>
        </div>
    )
}

export default withRouter(ShopMoreLikeThis)
