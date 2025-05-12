import primi_raviolopistacchioguanciale from './products/primi_raviolopistacchioguanciale.png'
import primi_pastacremaparmigiano from './products/primi_pastacremaparmigiano.png'
import primi_tagliatellemelanzana from './products/primi_tagliatellemelanzana.png'
import primi_pastabolognese from './products/primi_pastabolognese.png'
import primi_pastapestocasa from './products/primi_pastapestocasa.png'
import primi_pastafruttimare from './products/primi_pastafruttimare.png'
import primi_spaghettivongole from './products/primi_spaghettivongole.png'
import primi_pastatonnarina from './products/primi_pastatonnarina.png'
import primi_pastacilieginogamberoni from './products/primi_pastacilieginogamberoni.png'
import primi_raviolopestogamberoni from './products/primi_raviolopestogamberoni.png'

export const items = [
    {
        name: "Ravioli ripieni di Burrata con salsa al Pistacchio",
        image: primi_raviolopistacchioguanciale,
        price: 11,
        description: "Ravioli ripieni di Burrata con salsa al Pistacchio e Guanciale.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Pasta Fresca con Crema di Parmigiano",
        image: primi_pastacremaparmigiano,
        price: 9,
        description: "Pasta fresca con crema di Parmigiano, Speck e Zafferano.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Tagliatelle con Crema di Melanzana",
        image: primi_tagliatellemelanzana,
        price: 8,
        description: "Tagliatelle con Crema di Melanzana, Pancetta e Scaglie di Grana.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Pasta con Ragù alla Bolognese",
        image: primi_pastabolognese,
        price: 7,
        description: "Pasta con Ragù alla Bolognese.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        name: "Pasta con Pesto di Basilico e Salsiccia",
        image: primi_pastapestocasa,
        price: 9,
        description: "Pasta con Pesto di Basilico e Salsiccia.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Pasta ai Frutti di Mare",
        image: primi_pastafruttimare,
        price: 15,
        description: "Pasta ai Frutti di Mare.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Spaghetti alle Vongole",
        image: primi_spaghettivongole,
        price: 14,
        description: "Spaghetti alle Vongole.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        name: "Pasta alla Tonnarina",
        image: primi_pastatonnarina,
        price: 13,
        description: "Pomodorino, tonno fresco e mandorle.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Pasta Ciliegino e Gamberone",
        image: primi_pastacilieginogamberoni,
        price: 14,
        description: "Pasta Ciliegino e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
    {
        name: "Raviolo al Pesto di Pistacchio e Gamberone",
        image: primi_raviolopestogamberoni,
        price: 15,
        description: "Raviolo al Pesto di Pistacchio e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Pasta (*)"
    },
]

export const primi = items.map((item, index) => ({
    ...item,
    _id: `primi${index + 1}`
}));
