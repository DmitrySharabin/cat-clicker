const catClicker = new Vue({
  el: '#cat-clicker',
  data: {
    currentCat: {},
    cats: [{
      name: 'Tom',
      clickCounter: 0,
      src: './images/tom.jpg'
    }, {
      name: 'Alice',
      clickCounter: 0,
      src: './images/alice.jpg'
    },
    {
      name: 'Tigger',
      clickCounter: 0,
      src: './images/tigger.jpg'
    }, {
      name: 'Kitty',
      clickCounter: 0,
      src: './images/kitty.jpg'
    }, {
      name: 'Oliver',
      clickCounter: 0,
      src: './images/oliver.jpg'
    }, {
      name: 'Bella',
      clickCounter: 0,
      src: './images/bella.jpg'
    }]
  },
  methods: {
    incCounter() {
      this.currentCat.clickCounter += 1;
    }
  }
});

catClicker.currentCat = catClicker.cats[0];
