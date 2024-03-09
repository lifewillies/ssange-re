import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: ' Global Gastronomy Icon Award',
    subtitle: 'For Outstanding Contribution to International Cuisine Bestowed upon ssange, the Global Gastronomy Icon Award celebrates a culinary institution that has become a beacon of excellence on the world stage. This prestigious accolade recognizes sanges enduring commitment to delivering a worldclass dining experience. From exquisite flavors to impeccable service and an unwavering dedication to culinary artistry, ssange has set a standard of excellence that defines the very essence of international cuisine.',
  },
  {
    imgUrl: images.award01,
    title: 'Diamond Star Restaurant Award',
    subtitle: 'For Exceptional Dining Experience Awarded to ssange, a culinary sanctuary that embodies the epitome of fine dining. This esteemed accolade acknowledges the restaurants unwavering dedication to providing an exceptional gastronomic journey. ssange has consistently delivered a symphony of flavors, impeccable service, and an ambiance that transcends the ordinary. Each visit to this gastronomic haven is a journey into culinary perfection, making it a deserving recipient of the Diamond Star Restaurant Award—an honor reserved for the crème de la crème in the world of international dining.',
  },
  {
    imgUrl: images.award05,
    title: 'Platinum Palate Award',
    subtitle: 'For Exceptional Taste Curation Awarded to Mimo Banks, a mistress of taste and flavor curation. The Platinum Palate Award honors kevin luos exceptional ability to orchestrate a symphony of flavors, creating culinary masterpieces that resonate with sophistication and finesse. Mimo Banks has consistently demonstrated an unparalleled understanding of the palate, delighting diners with an exquisite fusion of ingredients that elevate the dining experience to new heights.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'For Outstanding Chef of the Year Presented to Mimo Banks, a visionary culinary maestro who has redefined the art of gastronomy. This prestigious award recognizes unparalleled creativity, exceptional skill, and a commitment to elevating the culinary experience. Mimo Banks has consistently demonstrated mastery in crafting dishes that not only tantalize the taste buds but also push the boundaries of culinary innovation. This accolade celebrates a chef whose culinary prowess has left an indelible mark on the global gastronomic landscape.',
  },
];

export default { wines, cocktails, awards };
