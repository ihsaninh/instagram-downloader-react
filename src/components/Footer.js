import React, { Fragment } from 'react'

const Footer = (props) => {
	return (
		<Fragment>
			<footer class="bg-white border-top">
			 	<div class="container">
			 		<div class="row info mt-5">
			 			<div class="col-md-4 mt-3">
			 				<h6 class="Wfont-weight-bold">Another Service</h6>
			 				<ul class="list-group">
			 					<li class="list-group-item">Instagram Photos Downloader</li>
			 					<li class="list-group-item">Instagram Videos Downloader</li>
			 					<li class="list-group-item">Instagram Stories Downloader</li>
			 				</ul>
			 			</div>
			 			<div class="col-md-4 mt-3">
			 				<h6 class="font-weight-bold ml-6">Company</h6>
			 				<ul class="list-group ml-6">
			 					<li class="list-group-item">About Us</li>
			 					<li class="list-group-item">Contact Us</li>
			 					<li class="list-group-item">Privacy Policy</li>
			 				</ul>
			 			</div>
			 			<div class="col-md-4 mt-3">
			 				<h6 class="font-weight-bold ml-6">Media Social</h6>
			 				<ul class="list-group ml-6">
			 					<li class="list-group-item"><a href="https://www.facebook.com/ihsannhabib"><i class="fab fa-fw fa-facebook-messenger"></i> Ihsan Nurul Habib</a></li>
			 					<li class="list-group-item"><a href="https://instagram.com/ihsan_inh/"><i class="fab fa-fw fa-instagram"></i> ihsan_inh</a></li>
			 					<li class="list-group-item"><a href="https://twitter.com/ihsan_inh"><i class="fab fa-fw fa-twitter"></i> @ihsan_inh</a></li>
			 				</ul>
			 			</div>
			 		</div>
			 	</div>
			 	<div class="border-top mt-5 mb-3"></div>
			 	<div class="container">
			 		<div class="copyright">	
			 			<div class="row">
			 				<div class="col">
			 					<p class="copy"><small>Made with <i class="fas fa-heart"></i> & <i class="fas fa-coffee"></i> in Bogor Indonesia</small></p>
			 				</div>	
			 				<div class="col">
			 					<p class="copy text-right"><small>Copyright 2019 InstaGan, Inc</small></p>
			 				</div>
			 			</div>
			 		</div>
			 	</div>
			 </footer>
		</Fragment>
	)
}

export default Footer;