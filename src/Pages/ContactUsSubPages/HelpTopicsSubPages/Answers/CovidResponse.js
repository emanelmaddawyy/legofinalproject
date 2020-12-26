import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CovidResponse = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />


			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<button
								className='btn d-flex align-items-center'
								id='backBtn'
								onClick={props.history.goBack}>
								<img src='/left-arrow.svg' alt='' height='10px' />
								<div id='back-text'>Back to all Help Topics</div>
							</button>
							<h1 id='title'>
								Our updates on COVID-19
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>

                            <h3 className="question">Where is my order?</h3>
                            <p className="answer">Due to increased levels of shipments going through the U.S. Postal Service, orders placed between November 30 and December 13 may arrive later than expected. USPS has ensured us they’re doing everything they can to deliver as many orders as possible, but are unable to guarantee delivery in time for Christmas.</p>

                            <h3 className="question">Contacting LEGO Customer Service</h3>
                            <p className="answer">Due to high volumes our customer service teams are very busy right now. We’re grateful for your patience as it will likely take us a little longer to answer your email, chat or phone call.</p>

                            <h3 className="question">Why is the set I want currently out of stock?</h3>
                            <p className="answer">We expect more of our products will be on backorder for longer than usual in some regions. We’re working hard to make as many products available as possible and you’ll receive a confirmation email once your order’s shipped.</p>

                            <h3 className="question">Are LEGO stores open?</h3>
                            <p className="answer">Most of our LEGO stores are now open.</p>

                            <h3 className="question">How are you keeping customers safe in stores?</h3>
                            <p className="answer">Strict safety measures are in place in our stores. We’ve set limits on how many people can be in a store at one time and we’ve removed some fixtures to give everyone more space. We’re asking customers to follow social distancing guidelines both inside and outside the store. Play tables, building demos and building events are still unavailable and, we’re sorry, but our Pick A Brick walls are currently still closed. We’ve introduced extra cleaning measures at all of our stores. You may see our wonderful Brick Specialists wearing masks as they’ll be taking extra precautions and they’ll be using hand santizers regularly. They’ll also be following social distancing rules at the checkout and throughout the store. We’ll continue to follow the latest local guidelines at all of our stores around the world.</p>
                            <p className="answer">As well as running our own stores, we also partner with LEGO Certified Stores. To find out if a LEGO Certified Store is open, please contact them directly. Our partner stores will be taking all necessary safety measures to protect the safety of visitors and employees.</p>


                            <h3 className="question">Am I able to buy LEGO parts?</h3>
                            <p className="answer">Yes, we’ve opened our Bricks & Pieces service in all our usual regions. Pick A Brick, our other online parts service, is open as well. Due to a large number of requests, Bricks & Pieces purchases are taking up to three weeks to be fulfilled.</p>

                            <h3 className="question">How do I sanitize my new sets?</h3>
                            <p className="answer">We’re continuing to take great care to make sure our employees and customers stay safe. Our factories, warehouses and distribution centers follow guidelines we have in place across all of our sites which meet the strictest global safety standards. If you’re ever concerned about any packaging, you should wipe it down with a disinfectant and wash your hands afterwards.</p>

                            <h3 className="question">
                            What about my LEGO bricks? How can I keep them sanitized?
                            </h3>
                            <p className="answer">
                            We don't recommend cleaning LEGO bricks with anything more than soapy warm water because any other ingredients could degrade the quality of the bricks over time. If you’re using a large quantity of bricks in your school, camp or organization, you can rotate different batches of bricks for 72 hours before using them again.
                            </p>

                            <h3 className="question">How are you keeping your employees safe?</h3>
                            <p className="answer">Making sure that our employees and their families are safe is very important to us. We’re helping all LEGO employees whose jobs allow them to work flexibly, to stay safe at home so that they can balance work with family and childcare responsibilities more easily.</p>
                            <p className="answer">For our colleagues who need to come to work, we’re taking extraordinary measures to protect their health and wellbeing. Employees are able to have their temperature checked and we’re following strict hand washing and sanitizing guidelines. We’ve also rearranged our workspaces and stores so that employees can spread out and make sure they have enough space between each other.</p>

                            <h3 className="question">What are you doing to help the community during this time?</h3>
                            <p className="answer">We believe that we have a responsibility as a business to support our partners, our colleagues and our communities. When this situation began, we supported relief efforts in Wuhan and Hubei Province by donating RMB 1 million and face masks to China Foundation for Poverty Alleviation, an NGO working in the region. More recently, we’ve also donated $50 million USD to organizations, including Education Cannot Wait, to help provide education for children who are facing incredibly difficult times all around the world. We’re also continuing to support local charities in communities where we have a significant presence.</p>

                        </div>
					</div>
				</div>
			</div>
            <OurService />
		</div>
	);
};

export default withRouter(CovidResponse);
