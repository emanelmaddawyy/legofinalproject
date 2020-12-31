import React from 'react';
import './Toast.css';


const Toast = () => {
    return (
        <div>
            <div class="Toast">
                <img src={"/myBag.png"} alt="" className="ToastImg"/>
                <span class="ToastSpan">Added to bag</span>
            </div>

        </div>
    )
}

export default Toast



// const Toast = () => {


//     function Example() {
//         const [show, setShow] = useState(false);

//         return (
//           <Row>
//             <Col xs={6}>
//               <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
//                 <Toast.Header>
//                   <img
//                     src="holder.js/20x20?text=%20"
//                     className="rounded mr-2"
//                     alt=""
//                   />
//                   <strong className="mr-auto">Bootstrap</strong>
//                   <small>11 mins ago</small>
//                 </Toast.Header>
//                 <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//               </Toast>
//             </Col>
//             <Col xs={6}>
//               <Button onClick={() => setShow(true)}>Show Toast</Button>
//             </Col>
//           </Row>
//         );
//       }

//     return (
//         <div>
//             <Example />
//         </div>
//     )
// }

// export default Toast


