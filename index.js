import sites from "./sites.js"

const siteList = new Vue({
  el: '#app',
  data: {
    sites,
    orientation: window.innerWidth > 1060 ? 'horisontal' : 'vertical'
  },
  methods: {
    random: function(){
      const url = sites[Math.floor(Math.random() * sites.length)].url
      window.location.href = url
    }
  },
  mounted() {
    this.$nextTick(() => {
      	window.addEventListener('resize', () => {
      		if (window.innerWidth > 1060) {
      			this.orientation = 'horisontal'
      		} else {
      			this.orientation = 'vertical'
      		}
    	})
    })
  }
})
