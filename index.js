import sites from "./sites.js"

const siteList = new Vue({
  el: '#app',
  data: {
    redirect: false,
    visited: null,
    sites,
    orientation: window.innerWidth > 1060 ? 'horisontal' : 'vertical',
    timeout: null,
  },
  methods: {
    random: function(){
      const url = sites[Math.floor(Math.random() * sites.length)].url
      window.location.href = url
    },
    explore: function(){
      /* explore is the first time the user wants to explore the webring */
        // because localStorage doesn't know how to store objects
        this.redirect = true

        const theSite = sites[0]
        const visited = JSON.stringify([theSite])

        window.localStorage.setItem('lastVisted', Date.now())
        window.localStorage.setItem('visited', visited)

        this.timeout = setTimeout(this.sendToSite, 4000)
    },
    sendToSite: function(){
      if (this.redirect) {
          let newSite
          let newVisited

          if (this.visited) {
            newSite = sites[this.visited.length]
            newVisited = JSON.stringify([...this.visited, newSite])
          } else {
            newSite = sites[0]
            newVisited = JSON.stringify([newSite])            
          }

          window.localStorage.setItem('visited', newVisited)
          window.localStorage.setItem('lastVisted', Date.now())

          window.location.href = newSite.url
      } else {
        window.localStorage.clear();
      }
    },
    cancel: function(){
      this.redirect = false
      this.visited = null
      clearTimeout(this.timeout)

      window.localStorage.clear()
    },
    clear: function(){
      this.redirect = false
      this.visited = null

      window.localStorage.clear()
    }
  },
  mounted() {
    this.visited = JSON.parse(window.localStorage.getItem('visited'))

    if (this.visited) { // then we have an array with at least 1 element
      if (this.visited.length >= sites.length) {
        this.redirect = true
        this.timeout = setTimeout(this.clear, 3000)
      } else {
        this.redirect = true
        this.timeout = setTimeout(this.sendToSite, 2500)
      }
    } else {
      // then it's the first time
    }

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
