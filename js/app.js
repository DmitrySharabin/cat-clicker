new Vue({
  el: '#cat-clicker',
  data: {
    cats: [{
      name: 'Tom',
      clickCounter: 0,
      src: './images/tom.jpg'
    }, {
      name: 'Alice',
      clickCounter: 0,
      src: './images/alice.jpg'
    }]
  },
  methods: {
    incCounter(index) {
      this.cats[index].clickCounter += 1;
    }
  }
});
