<template  lang="pug" >
	.container-landing
		header.header(  v-on:scroll="handleScrollT" v-bind:class="{ 'scrolled': scrolled }" )
			.header-container
				a(href="#").header-logo
					img(src="http://tinyimg.io/i/787YlsY.png")
				div.menu-icon() 
					input.menu-checkbox( type="checkbox" )
					ul.list-menu
						img.open-icon( src="http://tinyimg.io/i/1LUOy8N.png" )
						img.close-icon( src="http://tinyimg.io/i/36EIVGj.png" )
						li.first-link
							a(   v-scroll-to="'#home'") Home
						li 
							a( v-scroll-to="'#about'") About
						li 
							a( v-scroll-to="'#work'") Trabajos
						li 
							a( v-scroll-to="'#video'") Videos
						li 
							a( v-scroll-to="'#contact'") Contacto
		.b1( id="home" )
			.b1-image( style="background-image:url('https://i.ibb.co/LRwYgyS/gustavo-villegas-musico-principal.png')"  )
				figcaption
					| TALLERES  <br/> DE VERANO
					span INICIO 07 DE ENERO
		.b2( id="about" )
			.b2-container
				figure
					img( src="http://tinyimg.io/i/25mS4de.png" )
				.b2-info
					h2 about
					span.triangle-style
					p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
		.b3( id="work" style="background-image:url('http://tinyimg.io/i/qKPMnKB.png')" )
			.b3-container
				.b3-player
					h3 
						span ARRE
						span GLOS
					iframe(width='100%', height='300', scrolling='no', frameborder='no', allow='autoplay', src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/697939737&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true')
				.b3-player
					h3 
						span COM
						span POSI
						span CIÓN
					iframe(width='100%', height='300', scrolling='no', frameborder='no', allow='autoplay', src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/697939737&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true')
		.b4( id="video" )
			.b4-container
				.b4-title
					h3  VIDEOS
					span.triangle-style-2
					span.triangle-style-2
				.b4-video
					iframe(width='560', height='315', src='https://www.youtube.com/embed/3x7PAwUe2OE', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
		.b5( id="contact" )
			.b5-container
				.b5-title
					h3 Contácto
				.b5-content
					.b5-info
						span Dirección
							em Av. Benavides 276. Miraflores 
						span Teléfono
							em 051 - 448 1764
							em 051 - 448 1764
						span Correo
							em gvillegaseddowes@gmail.com
					form.b5-form( submit="" )
						.b5-form-input
							span Nombre y Apellido
							input( type="text"
							)
						.b5-form-input
							span Correo
							input( type="text"
							)
						button.form-btn Enviar
		footer.footer-landing
			a(href="#")
				img(src="http://tinyimg.io/i/szezB45.png")
			a(href="#")
				img(src="http://tinyimg.io/i/Ma5suWz.png")
			a(href="#")
				img(src="http://tinyimg.io/i/A5n1u2i.png")
</template>

<script>
export default {
	data(){
		return {
			scrolled: false
		}
	},
	methods:{
		handleScroll (val) {

			if( window.scrollY > 120 ){
				this.scrolled = true
			}else {
				this.scrolled = false
			}

		},
		handleScrollT(val){
			console.log(val)
		}
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
	}
}
</script>
