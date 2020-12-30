import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import './Shipping.css';

const Shipping = () => {
	return (
		<div id='Shipping'>
			<Header />
			<Slider />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12 p-0'>
					<div className='row m-0'>
						<div className='col-12 p-0'>
							<h1 id='title'>SHIPPING & RETURNS</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<main className='row'>
							<h2>
								We’re currently receiving a lot of LEGO orders! We’re expecting
								delivery to take longer than usual. Please order early and check
								your Order Status for updates.
							</h2>
						</main>
						<div className='Shipping-wrapper'>
							<p className='answer'>
								Your LEGO® order can be shipped direct to you or a
								friend/relative in North America.
							</p>
							<p className='answer'>
								Chart below applies to in-stock items only, and does not reflect
								shipping times for gift cards or Pick a Brick orders.
							</p>
							<h3c className='question'>About Your Shipment</h3c>
							<p className='answer'>
								<ul className='ul'>
									<li>
										Items in stock ship the next business day (Monday through
										Friday excluding holidays) if placed by 12pm EST.
									</li>
									<li>
										Items not in stock ship as soon as they become available.
									</li>
									<li>
										All orders are subject to review which may affect shipping
										times.
									</li>
									<li>
										Please note there is a surcharge of $12.50 for Express
										service to Alaska and Hawaii.
									</li>
								</ul>
							</p>
						</div>

						<div className='Shipping-wrapper'>
							<table class='table table-striped'>
								<thead>
									<tr className='w-100'>
										<th scope='col' className='w-25 cell'>
											Order Value{' '}
										</th>
										<th scope='col' className='w-25 cell'>
											Standard
										</th>
										<th scope='col' className='w-25 cell'>
											Express Saver*
										</th>
										<th scope='col' className='w-25 cell'>
											Express*
										</th>
									</tr>
								</thead>
								<tbody class=' tbody'>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 0.00 - $ 25.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$4.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 14.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 19.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 25.01 - $ 35.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$6.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 16.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 21.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 35.01 - $ 50.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 16.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 21.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 50.01 - $ 75.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 18.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 23.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 75.01 - $ 100.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 20.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 25.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 100.01 - $ 150.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 22.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 27.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 150.01 - $ 200.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 24.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 29.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 200.01 - $ 350.00</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 27.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 32.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>$ 350.01 and over</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>Free</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 34.95</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>$ 39.95</span>
											</span>
										</td>
									</tr>
									<tr>
										<td class=' cell'>
											<span>
												<span>Estimated Delivery</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>3-5 business days (Monday through Friday)</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>2-3 business days (Monday through Friday)</span>
											</span>
										</td>
										<td class=' cell'>
											<span>
												<span>1-2 business days (Monday through Friday)</span>
											</span>
										</td>
									</tr>
								</tbody>{' '}
							</table>
						</div>

						<div className='Shipping-wrapper'>
							<h3 className='question'>Standard Shipping</h3>
							<p className='answer'>
								<ul className='ul'>
									<li>
										We love our customers-- get FREE SHIPPING every day on
										orders over $35! Qualifying purchase includes merchandise
										only; any applicable taxes or value of gift cards purchased
										do not apply to merchandise total. Free shipping will
										automatically be added to your order. Free shipping is via
										standard ground service; upgrades do not apply. If you
										choose another shipping option, additional charges will
										apply.
									</li>
									<li>
										Once you have placed your order, the LEGO® Group will ship
										the order the next business day (Monday through Friday
										excluding holidays). Orders will be delivered within 3-5
										business days (Monday through Friday excluding holidays) via
										FedEx or FedEx SmartPost.
									</li>
									<li>
										Sorry! Rural areas may be subject to an additional 3
										business days for a total of 8 business days (Monday through
										Friday excluding holidays).
									</li>
									<li>
										Please allow 5 business days (Monday through Friday
										excluding holidays) for shipping to Alaska, Hawaii, Puerto
										Rico, Guam, Micronesia and the US Virgin Islands.
										Non-continental US territories and APO’s will be shipped via
										USPS and will not have order tracking available.
									</li>
									<li>
										Orders shipping to a P.O. Box will be delivered via US
										Postal Service.
									</li>
									<li>
										If you order a large quantity of custom bricks, we may
										combine and ship them in one box.
									</li>
									<li>
										Since Pick A Brick orders are all unique, they require
										additional processing time before they are shipped. These
										custom orders take 13-18 business days (Monday through
										Friday, excluding holidays) to be delivered. Rural areas may
										be subject to an additional 3 business days. If your order
										includes custom items and standard sets, they are shipped
										separately.
									</li>
								</ul>
							</p>
						</div>

						<div className='Shipping-wrapper'>
							<h3 className='question'>Express Saver</h3>
							<p className='answer'>
								<ul className='ul'>
									<li>
										The LEGO® Group will ship your order the next business day
										(Monday through Friday excluding holidays). Orders will
										arrive In 2-3 business days (Monday through Friday excluding
										holidays).
									</li>
									<li>Orders will ship via FedEx.</li>
									<li>Saturday delivery is not available.</li>
								</ul>
							</p>
						</div>

						<div className='Shipping-wrapper'>
							<h3 className='question'>Express Shipping</h3>
							<p className='answer'>
								<ul className='ul'>
									<li>
										The LEGO® Group will ship your order the next business day
										(Monday through Friday excluding holidays). Orders arrive in
										1-2 business days (Monday through Friday excluding
										holidays).
									</li>
									<li>Orders will ship via FedEx.</li>
									<li>Saturday delivery is not available.</li>
								</ul>
							</p>
						</div>
						<div className='Shipping-wrapper'>
							<h3 className='question'>Shipping Restrictions</h3>
							<p className='answer'>
								Express and Express Saver are not available to P.O. boxes, APO
								and FPO addresses, Micronesia, the US Virgin Islands, Puerto
								Rico or other areas considered rural by the carrier. Express and
								Express Saver are not available for LEGO® gift card orders and
								LEGO Pick a Brick customized products. Gift cards arrive via
								USPS.
							</p>
							<p className='answer'>
								Please note: in order to protect our consumers and maintain our
								commitment to service excellence, we do not ship to Freight
								Forwarding Services.
							</p>
						</div>

						<div className='Shipping-wrapper'>
							<h3 className='question'>Shipping & Service Delays</h3>
							<p className='answer'>
								Shipment dates are estimates in accordance with our carriers. If
								you live in an area experiencing an unexpected service delay
								(i.e. severe weather, natural disasters, unscheduled events,
								etc.), please note there may be additional shipping time to
								receive your order.
							</p>
						</div>
						<div className='Shipping-wrapper'>
							<h3 className='question'>Ordering a Gift as a Surprise?</h3>
							<p className='answer'>
								Your order will arrive in a shipping box marked LEGO®. Don’t
								worry though! On every order you can specify a “Ship To”
								address. Keep your surprise safe by having it sent to a friend
								or relative’s house or to your place of employment.
							</p>
						</div>
						<div className='Shipping-wrapper'>
							<h3 className='question'>Tracking Your Package</h3>
							<p className='answer'>
								If you have provided your email address we will send you a ship
								confirmation email when your order ships. For all orders
								(excluding orders shipped via USPS) this email will include a
								tracking number which you can use to track your package on the
								appropriate shipping carrier’s website.
							</p>
						</div>
						<div className='Shipping-wrapper'>
							<h3 className='question'>Return Policy</h3>
							<p className='answer'>
								We believe our LEGO bricks and other products must live up to
								your highest expectations, and our service must live up to the
								quality of our toys. If for any reason you need to return your
								order, it’s easy and free! All returns or exchanges must be made
								within 90 days of receipt of your order. To get a free return
								label on LEGO.com, log into your account and go to your Order
								Status page. From there, click on “Return Items” and follow the
								instructions.
							</p>
							<p className='answer'>
								If you don’t have access to a printer to print out your own
								label, get in touch with{' '}
								<Link to='/service' className='link'>
									Customer Service
								</Link>
								.
							</p>
							<p className='answer'>
								All refunds are made in the original payment method.
							</p>
							<p className='answer'>
								<strong>Unopened sets: </strong> Simply return your unopened
								LEGO set to the address listed on your packing slip. If the
								total value of the unopened set is under $200, you can return
								your unopened LEGO set to any of our LEGO Brand Retail stores
								with your original packing slip or receipt, and we'll give you a
								full refund in form of store credit or a gift card. However, for
								orders purchased using PayPal, if you return an unopened set to
								the address listed on your packing slip, your refund will be
								provided in the form of a gift card, and if you return an
								unopened set that is under $200 to a LEGO Brand Retail store,
								your refund will be provided in the form of a store credit. In
								order to receive a refund to your PayPal account you must
								contact Customer Service. Unopened sets that are not accompanied
								by a packing slip or receipt can no longer be exchanged or
								returned to a LEGO Brand Retail Store. You can set up a return
								on LEGO.com or contact Customer Service so they can help you.
								Total value of returned items over $200 cannot be returned in
								the store.
							</p>
							<p className='answer'>
								<strong>Opened Sets: </strong> Returns of opened LEGO sets must
								include the original packing slip or receipt and can be returned
								for exchange or merchandise credit only.
							</p>
							<p className='answer'>
								<strong>Customized Orders: </strong> Customized items such as
								LEGO Pick A Brick orders cannot be modified, returned or
								exchanged. Sorry!
							</p>
							<p className='answer'>
								<strong>Software: </strong> Returns are only accepted if the
								item has not been opened. This includes but is not limited to
								video games and DVDs. Sorry, we can't accept returns on opened
								video games and DVDs.
							</p>
							<p className='answer'>
								<strong>Gift Cards: </strong> Gift cards cannot be returned and
								cannot be exchanged for cash,{' '}
								<strong>unless cash redemption is required by law.</strong>
							</p>
							<p className='answer'>
								The following additional terms and conditions shall apply for
								Product exchange of the LEGO® STAR WARS™ MILLENNIUM FALCON™
								#75192 as well as the LEGO® STAR WARS™ IMPERIAL STAR DESTROYER™
								#75252:
							</p>
							<p className='answer'>
								Always subject to applicable federal or state law, any request
								for exchange of the Product (“Return Product”) with another
								Product (“New Product”) is subject to you providing LEGO with a
								valid credit card as security for LEGO receiving the Return
								Product. If LEGO has not received the Return Product within 30
								days of the date where LEGO has shipped the New Product to you,
								LEGO will charge the full purchase price listed at the time of
								shipment on LEGO.com/US to your credit card. Please provide
								track and trace information to Customer Service to allow LEGO to
								track your shipment of the Return Product.
							</p>
							<p className='answer'>
								If for any reason you are not entirely satisfied with an order,
								please contact our Customer Service team. We're always happy to
								help!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shipping;
