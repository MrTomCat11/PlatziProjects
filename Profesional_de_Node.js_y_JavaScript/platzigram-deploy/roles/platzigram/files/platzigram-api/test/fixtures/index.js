export default {
  getImage () {
    return {
      id: '3756a5b0-a25c-4c89-9281-f0a079f0bade',
      publicId: '52BEM137ze63E0PIdXEjkh',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/52BEM137ze63E0PIdXEjkh.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag (tag) {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '3756a5b0-a25c-4c89-9281-f0a079f0bade',
      name: 'Freddy Vega',
      username: 'freddier',
      email: 'f@platzi.test',
      password: 'pl4tzi',
      createdAt: new Date().toString()
    }
  }
}
