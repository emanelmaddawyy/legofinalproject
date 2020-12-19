import React, { useState,useRef } from 'react';
import { Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay'
import "./TooltipTop.css"

const TooltipTop = () => {

    function TooltipUpFun() {
		const [show, setShow] = useState(false);
		const target = useRef(null);

		return (
		  <>
			<Button variant="transparent"  className="iStyleTop"
			ref={target} onClick={() => setShow(!show)}>i</Button>
			<Overlay target={target.current} show={show} placement="top">
			  {({ placement, arrowProps, show: _show, popper, ...props }) => (
				<div className="overlayStyle" {...props}>
				  <h4>VIP Points</h4>

					<span>The VIP Points value shown is an estimate <br/>
						and actual points will be calculated when <br/>
						you check out.</span>
				</div>
			  )}
			</Overlay>
		  </>
		);
	  }


    return (
        <div>
    		<TooltipUpFun/>
        </div>
    )
}

export default TooltipTop
