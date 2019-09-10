new Vue({
    el: '#vue-app',
    data: {
      name: 'Andrzej',
      job: 'assassin',
      website: 'http://www.thenetninja.co.uk',
      websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
      age: 29,
      x: 0,
      y: 0,
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        subtact: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    //   greet: function(time){
    //     return 'Good ' + time + ' ' + this.name;
    //   }
    }
  });