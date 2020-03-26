const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.png?cs=srgb&dl=modern-bed-inside-bedroom-3773577.jpg&fm=jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: 60,
      promoPrice: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/3773581/pexels-photo-3773581.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/3675263/pexels-photo-3675263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 60,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/2806350/pexels-photo-2806350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'featured',
      compare: false,
      image:
        'https://images.pexels.com/photos/2775320/pexels-photo-2775320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/3637740/pexels-photo-3637740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/2030119/pexels-photo-2030119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/1150962/pexels-photo-1150962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'saleoff',
      compare: false,
      image:
        'https://images.pexels.com/photos/3773581/pexels-photo-3773581.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/2775320/pexels-photo-2775320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/3753435/pexels-photo-3753435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: 70,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/3229076/pexels-photo-3229076.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/3316918/pexels-photo-3316918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'topseller',
      compare: false,
      image:
        'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/1697232/pexels-photo-1697232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/1647662/pexels-photo-1647662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/2745090/pexels-photo-2745090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'chair',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/373530/pexels-photo-373530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      tabs: 'toprated',
      compare: false,
      image:
        'https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'chair',
      price: 30,
      oldPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1484981/pexels-photo-1484981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2626753/pexels-photo-2626753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'chair',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/733638/pexels-photo-733638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'sofa',
      price: 30,
      oldPrice: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1726074/pexels-photo-1726074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/269141/pexels-photo-269141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3757065/pexels-photo-3757065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/733638/pexels-photo-733638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'sofa',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'sofa',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-61',
      name: 'Aenean Ru Bristique 61',
      category: 'sofa',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-62',
      name: 'Aenean Ru Bristique 62',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-63',
      name: 'Aenean Ru Bristique 63',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-64',
      name: 'Aenean Ru Bristique 64',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2806353/pexels-photo-2806353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-65',
      name: 'Aenean Ru Bristique 65',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-66',
      name: 'Aenean Ru Bristique 66',
      category: 'table',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1080719/pexels-photo-1080719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-67',
      name: 'Aenean Ru Bristique 67',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2829030/pexels-photo-2829030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-68',
      name: 'Aenean Ru Bristique 68',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3258303/pexels-photo-3258303.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-69',
      name: 'Aenean Ru Bristique 69',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3773583/pexels-photo-3773583.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-70',
      name: 'Aenean Ru Bristique 70',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-71',
      name: 'Aenean Ru Bristique 71',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2041005/pexels-photo-2041005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3740293/pexels-photo-3740293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-73',
      name: 'Aenean Ru Bristique 73',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2088258/table-dining-room-chair-dining-area-2088258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-74',
      name: 'Aenean Ru Bristique 74',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-75',
      name: 'Aenean Ru Bristique 75',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-76',
      name: 'Aenean Ru Bristique 76',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3454073/pexels-photo-3454073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-77',
      name: 'Aenean Ru Bristique 77',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-78',
      name: 'Aenean Ru Bristique 78',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-79',
      name: 'Aenean Ru Bristique 79',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3139124/pexels-photo-3139124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-80',
      name: 'Aenean Ru Bristique 80',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-81',
      name: 'Aenean Ru Bristique 81',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/269262/pexels-photo-269262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-82',
      name: 'Aenean Ru Bristique 82',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-83',
      name: 'Aenean Ru Bristique 83',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/358572/pexels-photo-358572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-84',
      name: 'Aenean Ru Bristique 84',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-85',
      name: 'Aenean Ru Bristique 85',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-86',
      name: 'Aenean Ru Bristique 86',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/3848879/pexels-photo-3848879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-87',
      name: 'Aenean Ru Bristique 87',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/271647/pexels-photo-271647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-88',
      name: 'Aenean Ru Bristique 88',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      image:
        'https://images.pexels.com/photos/2343470/pexels-photo-2343470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  cart: {
    products: [],
  },

  tabs: [
    {
      id: 'featured',
      name: 'Featured',
      image:
        'https://images.pexels.com/photos/2343470/pexels-photo-2343470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'topseller',
      name: 'Top seller',
      image:
        'https://images.pexels.com/photos/271647/pexels-photo-271647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'saleoff',
      name: 'Sale off',
      image:
        'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'toprated',
      name: 'Top rated',
      image:
        'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],

  feedback: [
    {
      id: 1,
      name: 'John Smith',
      status: 'Future Client',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg',
      description:
        'Mattis pellentesque id nibh tortor id. Amet venenatis urna cursus eget nunc scelerisque. Vitae suscipit tellus mauris a. Cursus euismod quis viverra nibh. Scelerisque purus semper eget duis at. Pretium lectus quam id leo in vitae turpis massa sed. Quam vulputate dignissim suspendisse in est ante in nibh. Pharetra massa massa ultricies mi. ',
    },
    {
      id: 2,
      name: 'Antonio Hayes',
      status: 'Client',
      picture: 'https://randomuser.me/api/portraits/men/4.jpg',
      description:
        'Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nam aliquam sem et tortor consequat id. Praesent elementum facilisis leo vel. Cras adipiscing enim eu turpis. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ut sem nulla pharetra diam. In fermentum et sollicitudin ac orci phasellus egestas. In est ante in nibh mauris cursus mattis molestie.',
    },
    {
      id: 3,
      name: 'Riley Meyer',
      status: 'VIP Client',
      picture: 'https://randomuser.me/api/portraits/women/64.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet. Sit amet tellus cras adipiscing enim eu turpis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Lacus vel facilisis volutpat est velit egestas. Ante in nibh mauris cursus. ',
    },
    {
      id: 4,
      name: 'Hailey Cook',
      status: 'Future Client',
      picture: 'https://randomuser.me/api/portraits/women/15.jpg',
      description:
        'Turpis egestas sed tempus urna et pharetra. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Velit aliquet sagittis id consectetur purus ut. Feugiat vivamus at augue eget arcu dictum varius duis at. Velit ut tortor pretium viverra. Ac ut consequat semper viverra nam libero justo. In massa tempor nec feugiat nisl pretium fusce. ',
    },
    {
      id: 5,
      name: 'Vanessa Berry',
      status: 'Client',
      picture: 'https://randomuser.me/api/portraits/women/24.jpg',
      description:
        'Euismod nisi porta lorem mollis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Integer enim neque volutpat ac. Bibendum at varius vel pharetra vel turpis nunc. Fusce id velit ut tortor pretium viverra. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. In aliquam sem fringilla ut morbi tincidunt augue interdum.',
    },
  ],
};

export default initialState;
