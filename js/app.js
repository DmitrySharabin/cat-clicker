new Vue({
  el: '#cat-clicker',
  data: {
    cats: [{
      name: 'Tom',
      clickCounter: 0,
      src: './images/tom.jpg',
      visible: false
    }, {
      name: 'Alice',
      clickCounter: 0,
      src: './images/alice.jpg',
      visible: false
    },
    {
      name: 'Tigger',
      clickCounter: 0,
      src: './images/tigger.jpg',
      visible: false
    }, {
      name: 'Kitty',
      clickCounter: 0,
      src: './images/kitty.jpg',
      visible: false
    }, {
      name: 'Oliver',
      clickCounter: 0,
      src: './images/oliver.jpg',
      visible: false
    }, {
      name: 'Bella',
      clickCounter: 0,
      src: './images/bella.jpg',
      visible: false
    }]
  },
  methods: {
    incCounter(index) {
      this.cats[index].clickCounter += 1;
    },

    makeVisible(index) {
      this.cats.forEach(cat => {
        cat.visible = false;
      });
      this.cats[index].visible = true;
    }
  }
});
