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
    },
    explore: function(){
      /* explore is the first time the user wants to explore the webring */
      let choice = confirm("do you want to go in a ring?")
      if (choice == true) {
        // because localStorage doesn't know how to store objects
        const theSite = sites[0]
        const visited = JSON.stringify([theSite])
        window.localStorage.setItem('lastVisted', Date.now())
        window.localStorage.setItem('visited', visited)
        window.location.href = theSite.url
      } else {
        console.log("ok.")
      }
    }
  },
  mounted() {
    const visited = JSON.parse(window.localStorage.getItem('visited'))
    if (visited) { // then we have an array with at least 1 element
      if (visited.length >= sites.length) {
        alert("Congratulations! You completed the ring!")
        window.localStorage.clear()
      } else {
        const yes = confirm("let's keep going?")
        if (yes) {
          const newSite = sites[visited.length]
          const newVisited = JSON.stringify([...visited, newSite])
          window.localStorage.setItem('visited', newVisited)
          window.localStorage.setItem('lastVisted', Date.now())
          window.location.href = newSite.url
        } else {
          window.localStorage.clear();
        }
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
