const catClicker = new Vue({
  el: '#cat-clicker',
  data: {
    currentCat: null,

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
    }],

    isAdminModeOn: false
  },
  methods: {
    incCounter() {
      this.currentCat.clickCounter += 1;
    },

    updateCat(event) {
      this.currentCat.name = event.srcElement[0].value;
      this.currentCat.src = event.srcElement[1].value;
      this.currentCat.clickCounter = Number(event.srcElement[2].value);
      this.isAdminModeOn = false;
    }
  }
});

catClicker.currentCat = catClicker.cats[parseInt(Math.random() * 6)];
