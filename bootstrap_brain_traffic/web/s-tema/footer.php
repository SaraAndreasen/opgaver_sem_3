<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package s-tema
 */

?>

	<footer id="colophon" class="site-footer">
		<h2>Join the Brain Traffic mailing list</h2>
			<p class="footer-desc">Sign up for email about upcoming events, new posts, and other delightful tidbits.</p>
		<section class="mailing-section">
			
			<div class="navn">
				<label for="fname" class="field-label">First Name</label>
				<input type="text" id="fname" name="firstname" >
			</div>
				
			<div class="navn">
				<label for="lname" class="field-label">Last Name</label>
				<input type="text" id="lname" name="lastname">
			</div>
				
			<div class="navn">
				<label for="email" class="field-label">Email Address</label>
				<input type="text" id="email" name="emailaddress">
			</div>

				<div class="navn-button">
				<button class="knap">Submit</button>	
				</div>
				
				
		</section><!-- .site-info -->
		<div class="wrapper">
			<ul class="footer-list">
				<li class="list-item">© 2020 Brain Traffic</li>
				<li class="list-item"><a href="#">Confab Conference</a></li>
				<li class="list-item"><a href="#">Button Conference</a></li>
				<li class="list-item"><a href="#">Content Strategy Podcast</a></li>
				<li class="list-item"><a href="#">Contact Us</a></li>
				<li class="list-item"><a href="#">Newsletter</a></li>
				<li class="list-item"><a href="#">Twitter</a></li>
				<li class="list-item"><a href="#">LinkedIn</a></li>
			</ul>
		</div>
		<div class="warning">
		This is a school project, I am in no way associated with the company or any of the people mentioned on this website.
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<!--- font awesome ikoner -->
<script src="https://kit.fontawesome.com/9cb253356d.js" crossorigin="anonymous"></script>
</body>
</html>
