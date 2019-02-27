<template lang="pug" >
	.layout
		slot
	
</template>

<static-query>
query {
  metaData {
	siteName
  }
}
</static-query>

<style  lang="sass" >

header
	position: fixed
	top: 0
	left: 0
	right: 0
	z-index: 9
	padding-top: 50px
	transition: all 0.25s
	input[type=checkbox]:checked + ul
		opacity: 1
		visibility: visible
		.open-icon
			opacity: 0 
			visibility:  hidden
		.close-icon
			opacity: 1
			visibility: visible
		li
			opacity: 1
			visibility: visible
			transition: all 0.25s linear
		&:before
				opacity: 1
				visibility:  visible
				transition: all 0.15s linear
	&.scrolled
			background: #000
			padding-top: 15px
			padding-bottom: 15px
			.list-menu
				margin-top: 35px
			.menu-checkbox
				top: 20px
			.header-logo
				width: 12%
.header-container
	max-width:  1880px
	width: 95%
	display:  flex
	justify-content: space-between
	margin: auto

.first-link
	padding-top: 50px
.open-icon
	opacity: 1
	visibility: visible
.close-icon
	opacity: 0
	visibility: hidden
.menu-checkbox
	position: absolute
	height: 50px
	width: 50px
	opacity: 0
	top:  13px
	cursor: pointer
	right: 0
	z-index: 9
.menu-icon
	position: relative
	z-index: 9
.list-menu
	position: absolute
	right: 0
	width:  650px
	display: flex
	flex-direction: column
	&:before
			content: ''
			position: absolute
			left: 0px
			right: 0
			top: -65px
			bottom: 0
			width: 710px
			height: 693px
			background: #000
			opacity: 0
			visibility:  hidden
			
	img
		align-self:  flex-end
		position: absolute
		right: 0
		top: -25px
		z-index: 5
	li
		box-sizing: border-box
		padding-left: 60px
		background: #000000
		list-style: none
		opacity: 0
		visibility: hidden
		position: relative
		a
			font-size: 75px
			color: #fff
			text-decoration: none
			text-transform: uppercase
			font-family:  'Work Sans'
			font-weight: 900
			cursor: pointer
		&:hover
				a
					color: #cf9a1b
body
	margin: 0
figure
	margin: 0
h3,
h2
	margin: 0
.b1,
.b2,
.b3,
.b4,
.b5
	overflow: hidden
.header-logo
	width: 20%
.b1-image
	height: 695px
	position: relative
	background-position: center
	background-size: cover
	margin-bottom: -1px
.b1
	.v-carousel__prev
		left: 55px !important
		button
			&:before
					display: none !important
		span
			display: none !important
		i
			font-size: 0 !important
			&:before
					content: ''
					background-image: url('http://tinyimg.io/i/IOUmiml.png') 
					display: block
					width: 43px
					height: 103px
	.v-carousel__next
		right:  55px !important
		button
			&:before
					display: none !important
		span
			display: none !important
		i
			font-size: 0 !important
			&:before
					content: ''
					background-image: url('http://tinyimg.io/i/LnQ7xye.png') 
					display: block
					width: 43px
					height: 103px
	.v-ripple__container
		display: none !important
	figcaption
		position: absolute
		color: #fff
		font-size: 97px
		font-family:  'Work Sans'
		font-weight: 900
		letter-spacing: 2px
		line-height: 90px
		top: 50%
		transform: translateY(-50%)
		left: 29%
		display: flex
		flex-direction: column
	span
		display: flex
		font-size: 41px
		align-self: flex-start
		background: #cf9a1b
		padding: 17px 15px  
		box-sizing: border-box
		height: 65px
		line-height: 80%
		margin-top: 30px
		font-family: 'Work Sans'
		font-weight: 700
.b1-figure
	display: flex
	justify-content: center
	position: relative
	img
		width: 100%

.b2
	overflow: hidden
.b2-container
	display: flex
	img
		max-width: inherit
.b2-info
	background: #cf9a1b
	padding:  0px 120px
	padding-bottom: 45px
	box-sizing: border-box
	display:  flex
	justify-content: flex-end
	position: relative
	width: 100%
	flex-direction:  column
	h2
		color: #fff
		position: absolute
		left: -100px
		top: 80px
		text-transform: uppercase
		font-size: 97px
		font-weight:  normal
		font-family: 'Work Sans'
		font-weight: 900
		letter-spacing:  2px
	p
		max-height: 330px
		overflow: hidden
		font-size: 33px
		max-width:  830px
		line-height: 42px
		margin:  0
		margin-top: 30px
		text-align:  justify
		color:  #fff
		font-family: 'GandhiSans Regular'

.b3
	height: 770px
	width: 100%
	display: block
	background-size: cover
	padding: 60px 0
	box-sizing: border-box
.b3-container
	max-width:  1880px
	margin: auto
	display:  flex
	justify-content: space-between
	width: 95%
.b3-player
	display: flex
	h3
		padding-top: 25px
		font-size: 93px
		font-family: 'Work Sans'
		font-weight: 900
		color: #cf9a1b
		padding-right: 70px
		line-height: 95px
	span
		display: block
	iframe
		border:  25px solid #000
		width: 500px
		height: 650px
		&:first-child
				display:  none
		.dq
			padding: 15px 0px !important

.b4
	background: #cf9a1b
	iframe
		width: 100%
		max-width: 80%
		height: 700px
		margin: auto
.b4-container
	max-width:  1880px
	margin: auto
	padding-top: 60px
	padding-bottom: 70px
	width: 95%
.b4-title
	display:  flex
	align-items: center
	margin-bottom: 60px
	h3
		font-family: 'Work Sans'
		font-weight: 900
		color: #fff
		font-size: 91px
		margin-right: 20px
.b4-video
	display: flex
	justify-content: center


.b5
	background: #000
.b5-container
	max-width:  1880px
	margin: auto
	padding: 70px 0
	display: flex
	flex-wrap: wrap
	width: 95%
	h3
		font-family: 'Work Sans'
		font-weight: 900
		color: #cf9a1b
		font-size: 91px
.b5-title
	width:  100%
	margin-bottom: 50px
.b5-info
	color: #fff
	display: flex
	flex-direction: column
	width: 35%
	span
		font-size: 25px
		font-family: "Work Sans"
		margin-bottom:  45px
		font-weight: 800
	em
		font-size:  25px
		display: block
		font-style: normal
		font-family: 'Work Sans'
		font-weight: 400
.b5-form
	width: 45%
	.v-text-field
		margin-bottom: 66px !important
	.v-input input
		line-height: 35px !important
	.v-input .v-label
		line-height: 30px !important
		height: 32px !important
		top:  -6px !important
	.v-text-field .v-label--active
		transform: translateY(-33px) scale(0.75) !important
	label
		color: #fff !important
		font-size: 35px
		font-family: "Work Sans"
		font-weight: 800
	input
		color: #fff !important
	.v-input__slot
		&:before,
		&:after
				border-color:#cf9a1b !important
				border: 3px solid #cf9a1b !important

.footer-landing
	display:  flex
	justify-content: center
	background: #cf9a1b
	height: 165px
	align-items: center
	a
		display: flex
		margin: 0 90px
	img
		width: 60px

ul
	padding-left: 0
img
	max-width: 100%
	height: auto
	display: block
.triangle-style-2
	width: 0
	height: 0
	border-style: solid
	border-width: 30px 0 30px 31px
	border-color: transparent transparent transparent #fff
	margin-left:  15px
.triangle-style
	width: 0
	height: 0
	border-style: solid
	border-width: 17.5px 0 17.5px 28px
	border-color: transparent transparent transparent #ffffff
.b5-form
	display: flex
	flex-direction: column
.b5-form-input
	display: flex
	flex-direction: column
	margin-bottom: 50px
	span
		font-size: 25px
		color: #fff
		font-family: 'Work Sans'
		font-weight: 600
		display: block
		margin-bottom: 15px
	input
		margin: 0
		background: transparent
		border: none
		border-bottom: 5px solid  #cf9a1b
		font-size: 20px
		font-family: 'Work Sans'
		font-weight: 400
		height: 30px
		&:focus
				outline-offset: 0 !important
				outline: none
.form-btn
	font-family: 'Work Sans'
	font-weight: 800
	background-color: #cf9a1b !important
	width: 130px
	margin: 0
	font-size: 25px
	border: none
	text-transform: uppercase
	cursor: pointer
.b5-content
	display: flex
	width: 80%
	justify-content: space-between
	margin: auto
.list-menu li
	margin-bottom: 15px
@media screen and (max-width: 1200px)
	.b1 figcaption 
		font-size: 75px
		line-height: 70px
	.b2-info h2
		font-size: 80px
	.b2-info
		padding: 0 50px
	.b2-info p
		font-size: 25px
		line-height: 35px
		margin-bottom: 30px
		max-height: 310px
	.b4 iframe
		height: 500px
	.b2-container
		figure
			width: 50%
	.b3-player h3
		font-size: 50px
	.b3-player span
		display: inline-block
	.b3
		height: auto
	.b3-player
		flex-direction: column
	.b3-player h3 br
		display: none
	.b4-title
		margin-bottom: 30px
	.b5-content
		width: 95%
@media screen and (max-width: 960px)
	.b2-container
		flex-direction: column
	.b2-container figure
		width: 100%
		background: #000
		display: flex
		justify-content: center
	.b2-info
		padding-top: 30px
		padding-bottom: 30px
	.b2-info h2
		position: static
		font-size: 60px
	.b2-info p
		margin-top: 0
	.b3-container
		flex-direction: column
	.b3-player h3
		text-align: center
		padding-right: 0
	.b3-player iframe
		margin: auto
	.b4-title h3
		font-size: 60px
	.b4-container
		padding-top: 40px
		padding-bottom: 50px
	.b5-container h3
		font-size: 60px
	.b5-container
		flex-direction: column
	.b5-title
		order: -2
	.b5-form
		order: -1
		padding-right: 0
		width: 100%
		margin-bottom: 60px
	.b5-info
		padding-left: 0
	.triangle-style-2
		transform: scale(0.6)
		margin-left: 0
	.triangle-style
		display: none
	.b5-content
		flex-direction: column
	.list-menu img
		transform: scale(0.8)
@media screen and (max-width: 850px)
	header
		padding-top: 20px
	.b1 figcaption
		font-size: 45px
		line-height: 60px
		line-height: 45px
		top: 50%
		bottom: inherit
		left: 0
		transform: none
		width: 100%
		text-align: center
		br
			display: none
	.b1 span
		margin: 20px auto
	.footer-landing
		justify-content: space-around
	.footer-landing a
		margin: 0
	header.scrolled .header-logo
		width: 150px
@media screen and (max-width: 650px)
	.header-logo
		width: 35%
	.b1 span
		font-size: 30px
		height: auto
		line-height: 100%
		width: auto
		max-width: 90%
		letter-spacing: 0
	.list-menu li a
		font-size: 45px
	.list-menu:before
		height: 500px
		width: 407px
	.list-menu
		width: 400px
	.b1-image
		height: 500px
	.b2-info
		padding-left: 20px
		padding-right: 20px
	.b2-info p
		font-size: 20px
		line-height: 28px
	.b2-container
		img
			height: 350px
	.b3-player iframe
		width: 100%
		height: 500px
	.b3-player h3
		font-size: 30px
	.b4-title h3
		font-size: 45px
	.b5-container h3
		font-size: 45px
	.b3-player h3
		font-size: 45px
	.b3-player h3
		line-height: 45px
	.b2-info h2
		font-size: 45px
	.b4 iframe
		height: 300px
	.b5-info em, .b5-info span
		font-size: 18px
	.footer-landing img
		width: 40px
		height: 40px
	.b5-form .v-text-field .v-label--active
		transform: translateY(-10px) scale(0.55)!important
	.b5-title
		margin-bottom: 30px
	.b5-form .v-text-field
		margin-bottom: 40px
	.b5-content
		width: 100%
	.b3-player iframe
		border: none
		margin-top: 30px
	.b3-player
		&:first-child
				margin-bottom: 30px
</style>
