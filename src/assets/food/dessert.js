import dessert_cheesecake from './products/dessert_cheesecake.png'
import dessert_tiramisu from './products/dessert_tiramisu.png'
import dessert_parfaitmandorlecioccolato from './products/dessert_parfaitmandorlecioccolato.png'
import dessert_parfaitpistacchioamarena from './products/dessert_parfaitpistacchioamarena.png'
import dessert_mousselimonelamponi from './products/dessert_mousselimonelamponi.png'
import dessert_moussecioccbiancomore from './products/dessert_moussecioccbiancomore.png'
import dessert_moussecioccarancia from './products/dessert_moussecioccarancia.png'
import dessert_setteveliartigianale from './products/dessert_setteveliartigianale.png'
import dessert_cremacannoloartigianale from './products/dessert_cremacannoloartigianale.png'
import dessert_cassataartigianale from './products/dessert_cassataartigianale.png'
import dessert_nutellapistacchioartigianale from './products/dessert_nutellapistacchioartigianale.png'

export const items = [

    {
        name: "Parfait Mandorle e Cioccolato",
        image: dessert_parfaitmandorlecioccolato,
        price: 5,
        description: "Parfait Mandorle e Cioccolato.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "Parfait Pistacchio e Amarena",
        image: dessert_parfaitpistacchioamarena,
        price: 5,
        description: "Parfait Pistacchio e Amarena.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "Mousse Limone e Lamponi",
        image: dessert_mousselimonelamponi,
        price: 5,
        description: "Mousse Limone e Lamponi.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "Mousse Cioccolato Bianco e More",
        image: dessert_moussecioccbiancomore,
        price: 5,
        description: "Mousse Cioccolato Bianco e More.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "Mousse Cioccolato e Arancia",
        image: dessert_moussecioccarancia,
        price: 5,
        description: "Mousse Cioccolato e Arancia.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "Cheesecake",
        image: dessert_cheesecake,
        price: 5,
        description: "Cheesecake.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "I Mori | 7 Veli Artigianale",
        image: dessert_setteveliartigianale,
        price: 4.50,
        description: "I Mori | 7 Veli artigianale.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "I Mori | Crema al cannolo Artigianale",
        image: dessert_cremacannoloartigianale,
        price: 4.50,
        description: "I Mori | Crema al cannolo Artigianale.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "I Mori | Cassata Artigianale",
        image: dessert_cassataartigianale,
        price: 4.50,
        description: "I Mori | Cassata Artigianale.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "I Mori | Tiramisù Artigianale",
        image: dessert_tiramisu,
        price: 4.50,
        description: "I Mori | Tiramisù Artigianale.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
    {
        name: "I Mori | Nutella al Pistacchio Artigianale",
        image: dessert_nutellapistacchioartigianale,
        price: 4.50,
        description: "I Mori | Nutella al Pistacchio Artigianale.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Dessert (*)"
    },
]

export const dessert = items.map((item, index) => ({
    ...item,
    _id: `dessert_${index + 1}`
}));
