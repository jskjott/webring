'use strict'

// protocol://url.domain.ext

// The `hasRingLink` property refers to the RC logo link that can be found on any site
// If `hasRingLink` is true then the "explore" feature will include that site.
// Else "explore" will omit the site.
const sites = [
	{ url: 'https://www.jskjott.com', title: 'jskjott', author: 'Jonathan Skjøtt', hasRingLink: true },
	{ url: 'https://tomlisankie.com', title: 'Thomas Lisankie', author: 'Thomas Lisankie', hasRingLink: false},
	{ url: 'https://www.fekadu.com', title: 'mfekadu', author: 'Michael Fekadu', hasRingLink: true },
	{ url: 'http://www.charstiles.com', title: 'charstiles', author: 'Char Stiles', hasRingLink: true },
	{ url: 'https://blog.wesleyac.com', title: 'wesleyac', author: 'Wesley Aptekar-Cassels', hasRingLink: false },
	{ url: 'https://mclare.blog', title: 'mclare', author: 'Maryanne Wachter', hasRingLink: true},
	{ url: 'https://vaibhavsagar.com', title: 'vaibhavsagar', author: 'Vaibhav Sagar', hasRingLink: true },
	{ url: 'https://jon.network', title: 'Jon\' Network', author: 'JonPizza', hasRingLink: true },
	{ url: 'https://chirag.io', title: 'Chirag Davé', author: 'Chirag Davé', hasRingLink: true },
	{ url: 'https://sequential.me', title: 'Winston Smith', author: 'Winston Smith', hasRingLink: true },
	{ url: 'https://chatha-sphere.github.io/about', title: 'pchatha', author: 'Prayag (Nikku) Chatha', hasRingLink: true }
	/* ~~ Remember to add the RC logo to your site, as described in the README.md ~~ */
]

export default sites
