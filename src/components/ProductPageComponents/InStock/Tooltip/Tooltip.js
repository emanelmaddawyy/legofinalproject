import React, { useState,useRef } from 'react';
import { Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay'

import "./Tooltip.css"

const Tooltip = () => {

    // document.getElementsByTagName("Overlay")[0].setAttribute("placement", "democlass");


	function Tooltip() {
		const [show, setShow] = useState(false);
		const target = useRef(null);

		return (
		  <>
			<Button variant="transparent"  className="iStyle"
			ref={target} onClick={() => setShow(!show)}>i</Button>
			<Overlay target={target.current} show={show} placement="right">
			  {({ placement, arrowProps, show: _show, popper, ...props }) => (
				<div className="overlayStyle" {...props}>
				  <h4>Limit</h4>

					<span>We restrict the limit a household can buy <br/>
                    in order to be fair to all of our fans.<br/>
                    If you’ve already reached that limit through<br/>
                    previous orders your order may be cancelled.</span>
				</div>
			  )}
			</Overlay>
		  </>
		);
	  }


	return (
		<>
		<Tooltip/>
		</>
	);
};

export default Tooltip;
