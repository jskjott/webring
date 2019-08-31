import sites from "./sites.js"

const siteList = new Vue({
  el: '#app',
  data: {
    sites,
    orientation: window.innerWidth > 1060 ? 'horisontal' : 'vertical'
  },
  computed: {
    // only explore sites with the Webring link
    sitesToExplore: function () {
      return this.sites.filter( (s) => s.hasRingLink )
    }
  },
  methods: {
    random: function(){
      const url = sites[Math.floor(Math.random() * sites.length)].url
      window.location.href = url
    },
    explore: function(){
      /* explore is the first time the user wants to explore the webring */
      let choice = confirm("do you want to go in a ring?")
      if (choice == true) {
        alert("Cool!\nThe game is to **find the RC logo on each site**.\nGood luck!")
        const theSite = this.sitesToExplore[0]
        const visited = JSON.stringify([theSite])
        window.localStorage.setItem('lastVisted', Date.now())
        window.localStorage.setItem('visited', visited)
        window.location.href = theSite.url
      } else {
        console.log("ok.")
      }
    },
    keepExploring: function() {
      const visited = JSON.parse(window.localStorage.getItem('visited'))
      if (visited) { // then we have an array with at least 1 element
        if (visited.length >= this.sitesToExplore.length) {
          alert("Congratulations! You completed the ring!")
          window.localStorage.clear()
        } else {
          const yes = confirm("let's keep going?")
          if (yes) {
            const newSite = this.sitesToExplore[visited.length]
            const newVisited = JSON.stringify([...visited, newSite])
            window.localStorage.setItem('visited', newVisited)
            window.localStorage.setItem('lastVisted', Date.now())
            window.location.href = newSite.url
          } else {
            window.localStorage.clear()
          }
        }
      } else {
        // then it's the first time
      }
    }
  },
  mounted() {
    this.keepExploring()
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
