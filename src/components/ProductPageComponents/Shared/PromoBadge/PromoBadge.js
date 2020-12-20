import React from 'react'
import Media from 'react-bootstrap/Media'
import "./PromoBadge.css"

const PromoBadge = () => {
    return (
        <>
            <Media className="PromoBadgeStyle">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="/PromoBadge.png"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <span>
                    FREE exclusive Ice Skating Rink with purchases over $150.*
                    </span>
                    <p className="text-primary mb-0 mt-2">Learn more</p>
                </Media.Body>
            </Media>
        </>
    )
}

export default PromoBadge
