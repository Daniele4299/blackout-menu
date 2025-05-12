import contorni_patateforno from './products/contorni_patateforno.png'
import contorni_insalata from './products/contorni_insalata.png'
import contorni_purepatate from './products/contorni_purepatate.png'
import contorni_verduregrigliate from './products/contorni_verduregrigliate.png'
import antipasti_frittomisto2 from './products/antipasti_frittomisto2.png'

export const items = [
    {
        name: "Patate al Forno",
        image: contorni_patateforno,
        price: 4,
        description: "Patate al Forno.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Insalata Mista",
        image: contorni_insalata,
        price: 3,
        description: "Insalata Mista.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Purè di Patate",
        image: contorni_purepatate,
        price: 4,
        description: "Purè di Patate.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Patatine Fritte",
        image: antipasti_frittomisto2,
        price: 3,
        description: "Patatine fritte.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Patatine (*)"
    },
    {
        name: "Verdure Grigliate",
        image: contorni_verduregrigliate,
        price: 4,
        description: "Verdure Grigliate.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
]

export const contorni = items.map((item, index) => ({
    ...item,
    _id: `contorni_${index + 1}`
}));
