export const menuData = [
  {
    id: 'linha-tradicional',
    title: 'Linha Tradicional',
    bannerImage: '/images/cat_tradicional_1784216790560.png',
    description: 'Nossa clássica seleção de salgados assados, feitos com massa macia e ingredientes selecionados para o dia a dia.',
    products: [
      {
        id: 'esfiha-carne',
        name: 'Esfiha de Carne',
        ingredients: ['Carne bovina', 'Tomate', 'Cebola', 'Temperos'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/esfirra-carne-1.jpg',
          '/images/produtos/esfirra-carne-2.jpg'
        ]
      },
      {
        id: 'hamburguer-assado',
        name: 'Hambúrguer Assado',
        ingredients: ['Hambúrguer bovino', 'Presunto', 'Gergelim'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/hamburguer-assado-1.jpg',
          '/images/produtos/hamburguer-assado-2.jpg'
        ]
      },
      {
        id: 'pastelao',
        name: 'Pastelão',
        ingredients: ['Presunto', 'Muçarela', 'Orégano'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/pastelao-1.jpg',
          '/images/produtos/pastelao-2.jpg'
        ]
      }
    ]
  },
  {
    id: 'tortas-assadas',
    title: 'Tortas Assadas',
    bannerImage: '/images/cat_tortas_1784216799783.png',
    description: 'Tortas artesanais com massa dourada e recheios fartos, ideais para fatiar e servir com um bom café.',
    products: [
      {
        id: 'torta-frango',
        name: 'Torta de Frango',
        ingredients: ['Frango desfiado'],
        price: 'R$ 5,50',
        images: [
          '/images/produtos/torta-frango-1.jpg',
          '/images/produtos/torta-frango-2.jpg'
        ]
      },
      {
        id: 'torta-calabresa',
        name: 'Torta de Calabresa',
        ingredients: ['Calabresa', 'Muçarela', 'Orégano'],
        price: 'R$ 5,50',
        images: [
          '/images/produtos/torta-calabresa-1.jpg',
          '/images/produtos/torta-calabresa-2.jpg'
        ]
      },
      {
        id: 'torta-presunto-mucarela',
        name: 'Torta de Presunto e Muçarela',
        ingredients: ['Presunto', 'Muçarela'],
        price: 'R$ 5,50',
        images: [
          '/images/produtos/torta-presunto-mucarela-1.jpg',
          '/images/produtos/torta-presunto-mucarela-2.jpg'
        ]
      }
    ]
  },
  {
    id: 'trouxinhas-assadas',
    title: 'Trouxinhas Assadas',
    bannerImage: '/images/cat_trouxinhas_1784216810699.png',
    description: 'Pequenas delícias assadas com fechamento especial e sabores inconfundíveis.',
    products: [
      {
        id: 'trouxinha-frango-bacon',
        name: 'Trouxinha de Frango com Bacon',
        ingredients: ['Frango', 'Bacon'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/trouxinha-frango-bacon-1.jpg',
          '/images/produtos/trouxinha-frango-bacon-2.jpg'
        ]
      },
      {
        id: 'trouxinha-frango-catupiry',
        name: 'Trouxinha de Frango com Catupiry',
        ingredients: ['Frango', 'Requeijão (Catupiry)'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/trouxinha-frango-catupiry-1.jpg',
          '/images/produtos/trouxinha-frango-catupiry-2.jpg'
        ]
      }
    ]
  },
  {
    id: 'enroladinhos-assados',
    title: 'Enroladinhos Assados',
    bannerImage: '/images/cat_enroladinhos_1784216819801.png',
    description: 'O lanche rápido perfeito, com massa brilhante e recheios clássicos que agradam todos os paladares.',
    products: [
      {
        id: 'enroladinho-presunto-mucarela',
        name: 'Enroladinho de Presunto e Muçarela',
        ingredients: ['Presunto', 'Muçarela'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/enroladinho-presunto-mucarela-1.jpg',
          '/images/produtos/enroladinho-presunto-mucarela-2.jpg'
        ]
      },
      {
        id: 'enroladinho-salsicha',
        name: 'Enroladinho de Salsicha',
        ingredients: ['Salsicha', 'Molho de tomate'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/enroladinho-salsicha-1.jpg',
          '/images/produtos/enroladinho-salsicha-2.jpg'
        ]
      }
    ]
  },
  {
    id: 'mini-pizzas-congeladas',
    title: 'Mini Pizzas Congeladas',
    bannerImage: '/images/cat_pizzas_1784216829366.png',
    description: 'Praticidade para o seu negócio: mini pizzas prontas para assar e servir quentinhas a qualquer momento.',
    isFrozen: true,
    products: [
      {
        id: 'mini-pizza-presunto-mucarela',
        name: 'Mini Pizza de Presunto e Muçarela',
        ingredients: ['Molho de tomate', 'Presunto', 'Muçarela', 'Tomate', 'Orégano'],
        price: 'R$ 5,50',
        image: '/images/produtos/mp-presunto.jpg'
      },
      {
        id: 'mini-pizza-calabresa',
        name: 'Mini Pizza de Calabresa',
        ingredients: ['Molho de tomate', 'Muçarela', 'Calabresa', 'Orégano'],
        price: 'R$ 5,50',
        image: '/images/produtos/mp-calabresa.jpg'
      },
      {
        id: 'mini-pizza-frango-mucarela',
        name: 'Mini Pizza de Frango e Muçarela',
        ingredients: ['Molho de tomate', 'Frango', 'Muçarela', 'Orégano'],
        price: 'R$ 5,50',
        image: '/images/produtos/mp-frango.jpg'
      },
      {
        id: 'mini-pizza-chocolate',
        name: 'Mini Pizza de Chocolate',
        ingredients: ['Ganache', 'Gotas de chocolate'],
        price: 'R$ 6,00',
        image: '/images/produtos/mp-chocolate.jpg'
      },
      {
        id: 'mini-pizza-chocolate-disqueti',
        name: 'Mini Pizza de Chocolate com Disqueti',
        ingredients: ['Ganache', 'Chocolate confeitado colorido (Disqueti)'],
        price: 'R$ 6,00',
        image: '/images/produtos/mp-disquete.jpg'
      }
    ]
  },
  {
    id: 'frituras',
    title: 'Salgados Fritos',
    bannerImage: '/images/cat_frituras_1784216836695.png',
    description: 'Crocância incomparável por fora e recheios cremosos por dentro. O padrão de qualidade TudBom em cada mordida.',
    products: [
      {
        id: 'coxinha-frango',
        name: 'Coxinha de Frango',
        ingredients: ['Recheio de frango desfiado com batata'],
        price: 'R$ 5,50',
        images: [
          '/images/produtos/coxinha-frango-1.jpg',
          '/images/produtos/coxinha-frango-2.jpg'
        ]
      },
      {
        id: 'coxinha-frango-catupiry',
        name: 'Coxinha de Frango com Catupiry',
        ingredients: ['Recheio de frango desfiado com batata', 'Requeijão (Catupiry)'],
        price: 'R$ 5,50',
        images: [
          '/images/produtos/coxinha-frango-catupiry-1.jpg',
          '/images/produtos/coxinha-frango-catupiry-2.jpg'
        ]
      },
      {
        id: 'quibe-carne',
        name: 'Quibe de Carne',
        ingredients: ['Massa de quibe', 'Carne moída'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/quibe-carne-1.jpg',
          '/images/produtos/quibe-carne-2.jpg'
        ]
      },
      {
        id: 'quibe-queijo',
        name: 'Quibe de Queijo',
        ingredients: ['Massa de quibe', 'Muçarela'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/quibe-queijo-1.jpg',
          '/images/produtos/quibe-queijo-2.jpg'
        ]
      },
      {
        id: 'risole-carne-queijo',
        name: 'Risole de Carne e Queijo',
        ingredients: ['Carne moída', 'Muçarela'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/risole-carne-queijo-1.jpg',
          '/images/produtos/risole-carne-queijo-2.jpg'
        ],
        imagePositions: ['center 82%', 'center 68%']
      },
      {
        id: 'risole-presunto-mucarela',
        name: 'Risole de Presunto e Muçarela',
        ingredients: ['Presunto', 'Muçarela'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/risole-presunto-mucarela-1.jpg',
          '/images/produtos/risole-presunto-mucarela-2.jpg'
        ],
        imagePositions: ['center 82%', 'center center']
      },
      {
        id: 'enroladinho-salsicha-frito',
        name: 'Enroladinho de Salsicha',
        ingredients: ['Salsicha', 'Presunto', 'Muçarela'],
        price: 'R$ 5,00',
        images: [
          '/images/produtos/enroladinho-salsicha-frito-1.jpg',
          '/images/produtos/enroladinho-salsicha-frito-2.jpg'
        ],
        imagePositions: ['center 75%', 'center 65%']
      }
    ]
  }
];
