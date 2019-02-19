// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from 'vue-scrollto'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
	// Set default layout as a global component
	Vue.use(VueScrollTo)
	Vue.component('Layout', DefaultLayout)

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,700,800,900'
	  })
  
}