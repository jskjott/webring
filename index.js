import sites from "./sites.js"

console.log(sites)

const siteList = new Vue({
  el: '#app',
  data: {
    sites,
    layout: window.innerWidth > 1000,
  },
  mounted() {
    this.$nextTick(() => {
      	window.addEventListener('resize', () => {
      		if (window.innerWidth > 1060) {
      			this.layout = true
      			console.log(this.layout)
      		} else {
      			this.layout = false
      			console.log(this.layout)
      		}
    	})
    })
  }
})

console.log(siteList.sites)