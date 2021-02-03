const app = new Vue({
  el: "#app",
  data: {
    yourname: "CoderInTest",
    nasi: 5000,
    lauk: 10000,
    minum: 5000,
  },
  computed: {
    total: function () {
      const total = [this.nasi, this.lauk, this.minum];
      return (total.reduce((a, c) => a + c))
    },
  },  
  methods: {
    formatPrice(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
});
