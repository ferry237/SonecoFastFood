import { image } from "framer-motion/client"

const MyStaticsData = {

Images:[
    { src:"/ImagesFastfood/IMGS.jpg", alt: "Facade Soneco" },
    { src: "/ImagesFastfood/IMGS1.jpg", alt: "Etage vue sur le super marché " },
    { src: "/ImagesFastfood/IMG1.jpg", alt: "entrée fast food" },
    { src: "/ImagesFastfood/IMG2.jpg", alt: "entrée" },
    { src: "/ImagesFastfood/IMG3.jpg", alt: "fast food" },
    { src: "/ImagesFastfood/IMG4.jpg", alt: "fast food" },
],

 menuItems : [
    "Burger",
    "Frites", 
    "Pizza",
    "Shawamar",
    "Poulet pané" ,
    "Poulet routi",
    "Wings",
    "Jus de fruits",
    " Glasses",
     "Boissons",
    ],
     MenuData : [
  {
    type: "HAMBURGERS",
    image: "/imagesburger 2.svg",
    items: [
      { name: "Viande de Boeuf", prix: 1500 },
      { name: "Burger Poulet", prix: 1500 },
      { name: "Burger + Frites", prix: 2000 },
      { name: "Burger + Frites + Jus Naturel", prix: 2500 },

    ],
  },
  {
    type: "NUGGETS",
    image: "/NuggetIMG.svg",
    items: [
      { name: "Nugget de poulet * 3", prix: 1000 },
      { name: "Nugget de Poulet + Frites", prix: 1500 },
    ],
  },
  {
    type: "SHAWARMAS",
    image: "/ShawarmaIMG.svg",
       items: [
      { name: "Shawama Viande de Boeuf + Frites", commentaires:"Pain libanais, viande de boeuf, pommes, oignons, popiks, laitue, jus de citron.", prix: 1500 },
      { name: "Shawama Jus Naturel + Frites",commentaires:"Pain libanais, viande de boeuf, pommes, oignons, popiks, laitue, jus de citron.", prix: 2000 },
    ],
  },
    {
    type: "PIZZAS",
    image: "/PizzaIMG.svg",
        items: [
      { name: "Pizza Marguerita ",commentaires:"Pate à pizza, sauce à pizza, fromage, baselic.", prix: 2500 },
      { name: "Pizza Viande ",commentaires:"Pate à pizza, viande hachée, fromage, aromade, sauce à pizza.", prix: 3500 },
      { name: "Pizza Poulet ",commentaires:"Pate à pizza, blanc de poulet, fromage, champignons, aromade, sauce à pizza.", prix: 4000 },
      { name: "Pizza Rejina ",commentaires:"Pate à pizza, mozzarella, poivron, jambon, champignons, sauce à pizza.", prix: 4000 },
      { name: "Pizza SONECO",commentaires:"Pate à pizza, viande hachée, saucisson, fromage, crème fraiche, jambon.", prix: 5000 },
      { name: "Pizza SONECO",commentaires:"Pate à pizza, lardons, champignons, crème fraiche, jambon.", prix: 5500 },
      { name: "Emballage Pizza", prix: 500 },
    ],
  },
  {
    type: "CREPES et GAUFFRES",
    image: "/GauffreIMG.svg",
    items: [
      { name: "Crepes Nature * 3", prix: 1000 },
      { name: "Crepes Fourée Choco * 3", prix: 1400 },
      { name: "Gauffres Nature", prix: 500 },
      { name: "Gauffres à la Glace", prix: 1500 },
    ],
  },
  {
    type: "POULET PANE",
    image: "/PouletPaneIMG.svg",
    items: [
      { name: "Pilon * 2 + Frites", prix: 2000 },
      { name: "Haut de cuisse * 2 + Frites", prix: 2000 },
      { name: "1/4 poulet + frites", prix: 2500 },
      { name: "1/4 + frites + jus naturel", prix: 3000 },
      { name: "Entier + Frites * 4", prix: 9500 },
      { name: "Entier + Frites * 4 + Jus de naturel * 2", prix: 12000 },
    ],
  },
    {
    type: "POULET ROTI",
    image: "/PouletRotiIMG.svg",
    items: [
      { name: "1/4 Poulet roti + Frites + Jus naturel ", prix: 5000 },
      { name: "1/4 Poulet roti entier + Frites * 2 + Jus naturel * 2 ", prix: 9500 },
    ],
  },
  {
    type: "WINGS",
    image: "/WingIMG.svg",
    items: [
      { name: "Wings * 2", prix: 1500 },
      { name: "Wings + Frites", prix: 2000 },
    ],
  },
    {
    type: "ACCOMPAGNEMENTS",
    image: "/FriteRB.svg",
    items: [
      { name: "Frites de Pommes ", prix: 650 },
    ],
  },
   
],
Boissons:[
  {
    type:"JUS",
    image:"/JUS.svg",
    items:[
      { name: "Jus RAZZL 33CL", prix: 500 },
      { name: "Jus YOUZOU 33CL", prix: 500 },
      { name: "Jus WORLD COLA 33CL", prix: 500 },
      { name: "Jus SPECIAL UCB 33CL", prix: 500 },
      { name: "Jus TOP 33CL", prix: 500 },
      { name: "Jus PLANETE 33CL", prix: 500 },
      { name: "Jus DJINO 33CL", prix: 500 },
    ]
  },
  {
    type:"BIERES",
    image:"/BierresIMG.svg",
    items:[
      { name: "CHILL", prix: 1000 },
      { name: "ICE (BTLE)", prix: 1000 },
      { name: "PM GUINNESS (BTLE)", prix: 1000 },
      { name: "33 EXPORT", prix: 1000 },
      { name: "ISENBECK", prix: 1000 },
      { name: "BEAUFORT LIGHT", prix: 1000 },
      { name: "BEAUFORT ORDINAIRE", prix: 1000 },
      { name: "BOOSTER COLA", prix: 1000 },
      { name: "CASTEL", prix: 1000 },
      { name: "DOPPEL", prix: 1000 },
      { name: "MUTZIG", prix: 1000 },
      { name: "VODY VODKA", prix: 1000 },
      { name: "1664 BLANC", prix: 1500 },
      { name: "HEINEKEN BTLE 33CL", prix: 1500 },
      { name: "HEINEKEN CTE 50CL", prix: 1500 },
    ]
  },
  {
    type:"BOISSONS SANS ALCOOL",
    image:"/SansAlcool.svg",
    items:[
      {name: "TANGUI 0.5L", prix: 350 },
      {name: "SUPERMONT 0.5L", prix: 350 },
      {name: "REACTOR 33CL", prix: 500 },
      {name: "REACTOR 0.5L", prix: 1000 },
      {name: "JUS NATUREL", prix: 1000 },
      {name: "MALTA VANILLE", prix: 1000 },
      {name: "BAVARIA 0% ALC", prix: 1000 },
    ]
  },
  {
    type:"VINS ROUGES",
    image:"/VINRIMG.svg",
    items:[
      { name: "TOUR CANTELOU 75CL", prix: 4000 },
      { name: "GRAND VERSANT RESERVE 75CL", prix: 5000 },
      { name: "LOUIS ESCHENAUER CAB SAU 75CL", prix: 6000 },
      { name: "CARILLONADE CAB SAU 75CL", prix: 7000 },
      { name: "EL CASTILLA SYRAH 75CL", prix: 7500 },
      { name: "RIO LINDO SYRAH 75CL", prix: 7500 },
      { name: "DAMATI IL", prix: 7500 },
      { name: "PONTE VILLONI 75CL", prix: 8500 },
    ]
  },
  {
    type:"VINS BLANCS",
    image:"/VINBIMG.svg",
    items:[
      { name: "VIEUX MOULIN 75CL", prix: 3500 },
      { name: "TOUR CANTELOU 75CL", prix: 4000 },
      { name: "MAITRE MONT BLAZAC 75CL", prix: 4500 },
      { name: "LOUIS ESCHENAUER MOELLEUX 75CL", prix: 7500 },
      { name: "CARILLONADE MOELLEUX 75CL", prix: 7500 },
    ]
  }
]

}
export default MyStaticsData
