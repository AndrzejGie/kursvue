new Vue({
    el: '#vue-app',
    data: {
    //   name: 'Andrzej',
    //   job: 'assassin',
    //   website: 'http://www.thenetninja.co.uk',
    //   websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
    //   age: 29,
    //   x: 0,
    //   y: 0,
    },
    methods: {
        logName: function(){
            console.log('enter name')
        },
        logAge: function(){
            console.log('enter age')
        }
        // add: function(inc){
        //     this.age += inc;
        // },
        // subtact: function(dec){
        //     this.age -= dec;
        // },
        // updateXY: function(event){
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click: function(){
        //     alert('Clicked me');
        // }
    //   greet: function(time){
    //     return 'Good ' + time + ' ' + this.name;
    //   }
    }
  });