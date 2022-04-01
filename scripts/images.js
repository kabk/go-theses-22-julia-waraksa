const { reactive } = window.Vue

/**
 * Service handling image popups
 */
export const Images = reactive({
  images: [
    {
      name: 'Figure 1',
      file: '00-image.jpg',
      text: ['Caption', '2009'],
    },
    {
      name: 'Figure 2',
      file: '01-cat.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: 'Monument to the Kurenivka Mudslide',
      file: '04-kurenivka-mudslide-monument.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: 'Kurenivka Disaster',
      file: '04-kurenivka-mudslide.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: 'The Road by Oskar Hansen',
      file: '02-oskar-hansen.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: "Denazification bomb falls in vicinity of Holocaust memorial site",
      file: '04-babyn-yar-missile-attack-2.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: "A stone inscription at the site of Babyn Yar",
      file: '04-babyn-yar-genesis-stone.jpg',
      text: ['Caption', '2019'],
    },
    {
      name: "Ravines of Babyn Yar",
      file: '04-ravines-of-babyn-yar.jpg',
      text: ['Caption', '2019'],
    },
  ],

  // Initializes the images
  // onProgress: callback used to notify about the progress of initialization
  async initialize(onProgress) {
    // find all <figure> element and link onclick event,
    // to show image popups
    //const figures = document.querySelectorAll('figure')
    const figures = document.querySelectorAll('a[href="#figure"]')
    for (const figure of Array.from(figures)) {
      const name = figure.getAttribute('title')
      figure.addEventListener('click', () => {
        this.show(name)
      })
    }

    // Notify about the progress
    if (onProgress) {
      await onProgress(this)
    }
  },

  // Image count
  get count() {
    return this.images.length
  },

  // Currently displayed image
  image: null,

  // URL of the currently displayed image
  get imageUrl() {
    return this.getUrl(this.image)
  },

  // URL of the specified image
  getUrl(image) {
    if (image) {
      return `content/images/${image.file}`
    }
  },

  // Returns true if any image is currently visible
  get isVisible() {
    return this.image != null
  },

  // Hides the currently displayed image
  hide() {
    this.image = null
  },

  // Displays the image
  async show(name) {
    const image = this.images.find((image) => image.name == name)
    if (!image) throw new Error(`Image ${name} not defined in Images service`)
    this.image = image
  },
})
