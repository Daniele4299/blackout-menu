import bevande_acquanaturale from './products/bevande_acquanaturale.png'
import bevande_acquafrizzante from './products/bevande_acquafrizzante.png'
import bevande_cocacola from './products/bevande_cocacola.png'
import bevande_sprite from './products/bevande_sprite.png'
import bevande_fanta from './products/bevande_fanta.png'
import bevande_cocazero from './products/bevande_cocazero.png'
import bevande_birramessina from './products/bevande_birramessina.png'
import bevande_ceres from './products/bevande_ceres.png'
import bevande_chinotto from './products/bevande_chinotto.png'
import bevande_fuzetealimone from './products/bevande_fuzetealimone.png'
import bevande_fuzeteapesca from './products/bevande_fuzeteapesca.png'
import bevande_gazzosa from './products/bevande_gazzosa.png'
import bevande_ichnusa from './products/bevande_ichnusa.png'
import bevande_kinleytonic from './products/bevande_kinleytonic.png'
import bevande_heineken from './products/bevande_heineken.png'
import bevande_becks from './products/bevande_becks.png'
import bevande_semerossa from './products/bevande_semerossa.png'

export const items = [
    {
        name: "Acqua Naturale",
        image: bevande_acquanaturale,
        price: 3,
        description: "75cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Acqua Frizzante",
        image: bevande_acquafrizzante,
        price: 3,
        description: "75cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Coca-Cola",
        image: bevande_cocacola,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Coca-Cola Zero",
        image: bevande_cocazero,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Fanta",
        image: bevande_fanta,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Sprite",
        image: bevande_sprite,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Gazzosa",
        image: bevande_gazzosa,
        price: 2.50,
        description: "27cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Chinotto",
        image: bevande_chinotto,
        price: 2.50,
        description: "27cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Acqua Tonica",
        image: bevande_kinleytonic,
        price: 2,
        description: "20cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Thè Pesca",
        image: bevande_fuzeteapesca,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Thè Limone",
        image: bevande_fuzetealimone,
        price: 2.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Heineken",
        image: bevande_heineken,
        price: 3.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Becks",
        image: bevande_becks,
        price: 3.50,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Birra Messina",
        image: bevande_birramessina,
        price: 4,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Ichnusa",
        image: bevande_ichnusa,
        price: 4,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Semedorato Rossa",
        image: bevande_semerossa,
        price: 4,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: "Doppio malto"
    },
    {
        name: "Ceres",
        image: bevande_ceres,
        price: 5,
        description: "33cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
]

export const bevande = items.map((item, index) => ({
    ...item,
    _id: `bevande_${index + 1}`
}));