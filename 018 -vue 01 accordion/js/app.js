console.log("app.js is working and loaded at the bottom of <body>");

new Vue({
  el: "#app",
  data: {
    isOpen: true
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
        "is-open": this.isOpen
      };
    }
  }
});
