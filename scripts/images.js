const { reactive } = window.Vue

/**
 * Service handling image popups
 */
export const Images = reactive({
  images: [
    {
      name: 'Figure 1',
      file: '00-image.jpg',
      text: ['', '2009'],
    },
    {
      name: 'Figure 2',
      file: '01-cat.jpg',
      text: ['', '2019'],
    },
    {
      name: 'Monument to the Kurenivka Mudslide',
      file: '04-kurenivka-mudslide-monument.jpg',
      text: ['', '2019'],
    },
    {
      name: 'Aftermath of the Kurenivka mudslide',
      file: '04-kurenivka-mudslide-2.jpg',
      text: ['', '1961'],
    },
    {
      name: 'The Road by Oskar Hansen',
      file: '02-oskar-hansen.jpg',
      text: ['', '2019'],
    },
    {
      name: "Denazification bomb falls in vicinity of Holocaust memorial site",
      file: '04-babyn-yar-missile-attack-3.jpg',
      text: ['', '2019'],
    },
    {
      name: "A stone inscription at the site of Babyn Yar",
      file: '04-babyn-yar-genesis-stone.jpg',
      text: ['', '2019'],
    },
    {
      name: "Ravines of Babyn Yar",
      file: '04-ravines-of-babyn-yar.jpg',
      text: ['', '2019'],
    },
    {
      name: "Monument to Soviet citizens and prisoners of war",
      file: '04-babyn-yar-soviet-memorial-2.jpg',
      text: ['', '2019'],
    },
    {
      name: "The Soviet memorial at Babyn Yar in December",
      file: '04-babyn-yar-december.jpg',
      text: ['', '2019'],
    },
    {
      name: "Reconstruction of the ravine",
      file: '04-babyn-yar-3d-model-2.jpg',
      text: ['', '2019'],
    },
    {
      name: "The Crystal Wall of Crying",
      file: '04-crystal-wall-of-crying.jpg',
      text: ['', '2019'],
    },
    {
      name: "A Place for Reflection",
      file: '04-a-place-for-reflection.jpg',
      text: ['(From the caption at the site) A Place for Reflection is a symbolic synagogue designed in the shape of a book that opens and closes with the help of special machinery. The structure stands 11 meters tall and is made of century-old oak wood harvested from old derelict buildings all accross Ukraine. The ceiling inside the synagogue is a map of the Northern Sky and reproduces the position of the stars on 29 September, 1941, the day the mass shootings began at Babyn Yar.', '2021'],
    },
    {
      name: "Mound of Memory or Museum of the History of the Tragedy",
      file: '04-mound-of-memory.jpg',
      text: ['Render view by SUB Architects. The memorial is currently in progress of construction.', '2021'],
    },
    {
      name: "The Mirror Field and the TV Tower",
      file: '04-mirror-field-blending-tv-tower.jpg',
      text: ['From a certain perspective, the Mirror Field blends with the TV tower in the back of the site. The TV tower was bombed on March 1, 2022 by the Russian Army.', '2022'],
    },
    {
      name: "The Mirror Field",
      file: '04-the-mirror-field-4.jpg',
      text: ['The installation in September 2021. Image by the BHYMC.', '2021'],
    },
    {
      name: "The Mirror Field at Night",
      file: '04-the-mirror-field-2.jpg',
      text: ['At night the light and sound of memory passes through the holes.', '2021'],
    },
    {
      name: "Bullet holes in the Mirror Field",
      file: '04-mirror-field-bullet-hole-2.jpg',
      text: ['The bullet holes are made using the same caliber as those during the killings.', '2021'],
    },
    {
      name: "Babyn Yar Masterplan Open Ideas Competition",
      file: '04-babyn-yar-competition.jpg',
      text: ['Due to the war, the competition has been (temporarily) cancelled.', '2022'],
    },
    {
      name: "The abandoned soccer field at Babyn Yar",
      file: '04-abandoned-soccer-field.jpg',
      text: ['A rusty frame remains in the fenced field, since September 2021 the site for the Mirror Field installation.', '2021'],
    },
    {
      name: "3D Model of the Babyn Yar site",
      file: '04-map-of-shootings.jpg',
      text: ['Model and research by the Centre for Spatial Technologies and BHYMC.', '2021'],
    },
    {
      name: "Babyn Yar Memorials Map",
      file: '04-babyn-yar-memorials-map.jpg',
      text: ['', '2021'],
    },
    {
      name: "Kabbalah, Tree of Life",
      file: '04-kabbalah.jpg',
      text: ['', '13th Century'],
    },
    {
      name: "National competition for the Memorial park of Babyn Yar",
      file: '04-babyn-yar-memorial-competition-1965.jpg',
      text: ['Participating figures were famous Soviet architects, sculptors and artists, mostly of Jewish origin. Archival footage courtesy of the Babyn Yar Holocaust Memorial Centre. ', '1965'],
    },
    {
      name: "Plaster model of the ideologically approved monument",
      file: '04-babyn-yar-plaster-model.jpg',
      text: ['The model displays the typical Soviet propaganda figures of a soldier, worker, and sailor.', '1968'],
    },
    {
      name: "Construction of the Park at Babyn Yar",
      file: '04-park-of-babyn-yar-1980s.jpg',
      text: ['In 1980s, pedestrian routes were laid through the entire park, paved with cement and rubble. Its original appearance was lost already before the construction.', '1980s'],
    },
    {
      name: "Unsuggestive sculptures at Babyn Yar",
      file: '04-sculpture-at-babyn-yar-park.jpg',
      text: ['', '1980s'],
    },
    {
      name: "Inscription below the Soviet memorial",
      file: '04-babyn-yar-soviet-memorial-inscription.jpg',
      text: ['The multilingual inscription reads dedicated to the Kyiv residents and prisoners of war murdered by the German fascist invaders.', '1980s'],
    },
    {
      name: " The first Babyn Yar memorial stands far away from the massacres",
      file: '04-babyn-yar-soviet-memorial-inscription.jpg',
      text: ['The multilingual inscription reads dedicated to the Kyiv residents and prisoners of war murdered by the German fascist invaders.', '1980s'],
    },
    {
      name: "Vardo in Memory of Romani executed in Babyn Yar",
      file: '04-babyn-yar-vardo-memorial.jpg',
      text: ['The memorial commemorates the Sinti and Roma who were killed at Babyn Yar. The monument was moved from another location in the city into the park.', '2016'],
    }

    
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
