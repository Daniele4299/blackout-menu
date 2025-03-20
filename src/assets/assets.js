import logo from './logo.png'
import header_img from './header_img.png'
import menu_1 from './categories/menu_1.png'
import menu_2 from './categories/menu_2.png'
import menu_3 from './categories/menu_3.png'
import menu_4 from './categories/menu_4.png'
import menu_5 from './categories/menu_5.png'

import food_1 from './products/food_1.png'
import food_2 from './products/food_2.png'
import food_3 from './products/food_3.png'
import food_4 from './products/food_4.png'
import food_5 from './products/food_5.png'
import food_6 from './products/food_6.png'
import food_7 from './products/food_7.png'
import food_8 from './products/food_8.png'
import food_9 from './products/food_9.png'
import food_10 from './products/food_10.png'
import food_11 from './products/food_11.png'
import food_12 from './products/food_12.png'
import food_13 from './products/food_13.png'
import food_14 from './products/food_14.png'
import food_15 from './products/food_15.png'
import food_16 from './products/food_16.png'
import food_17 from './products/food_17.png'
import food_18 from './products/food_18.png'
import food_19 from './products/food_19.png'
import food_20 from './products/food_20.png'

export const assets = {
    logo,
    header_img
}

export const menu_list = [
    {
        menu_name: "Antipasti",
        menu_image: menu_1
    },
    {
        menu_name: "Primi",
        menu_image: menu_2
    },
    {
        menu_name: "Secondi",
        menu_image: menu_3
    },
    {
        menu_name: "Dessert",
        menu_image: menu_4
    },
    {
        menu_name: "Bevande",
        menu_image: menu_5
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Insalata Caprese",
        image: food_1,
        price: 12,
        description: "Un'insalata fresca con pomodori, mozzarella, basilico e olio d'oliva.",
        category: "Antipasti",
        cookingTime: "5-10"
    },
    {
        _id: "2",
        name: "Bruschetta",
        image: food_2,
        price: 18,
        description: "Pane grigliato con pomodori freschi, aglio e basilico.",
        category: "Antipasti",
        cookingTime: "5-10"
    },
    {
        _id: "3",
        name: "Panzanella",
        image: food_3,
        price: 16,
        description: "Un'insalata toscana con pane, pomodori, cetrioli, cipolle e basilico.",
        category: "Antipasti",
        cookingTime: "5-10"
    },
    {
        _id: "4",
        name: "Frittata di Zucchine",
        image: food_4,
        price: 24,
        description: "Una frittata italiana con zucchine e uova.",
        category: "Antipasti",
        cookingTime: "10-15"
    },
    {
        _id: "5",
        name: "Lasagna alla Bolognese",
        image: food_5,
        price: 14,
        description: "Lasagna classica con strati di pasta, ragù e besciamella.",
        category: "Primi",
        cookingTime: "45-60"
    },
    {
        _id: "6",
        name: "Pasta alla Carbonara",
        image: food_6,
        price: 12,
        description: "Pasta con uova, guanciale, pecorino e pepe nero.",
        category: "Primi",
        cookingTime: "15-20"
    },
    {
        _id: "7",
        name: "Risotto ai Funghi",
        image: food_7,
        price: 20,
        description: "Un risotto cremoso con funghi freschi.",
        category: "Primi",
        cookingTime: "25-35"
    },
    {
        _id: "8",
        name: "Pasta al Pesto",
        image: food_8,
        price: 15,
        description: "Pasta con un sugo di basilico, pinoli, parmigiano e olio d'oliva.",
        category: "Primi",
        cookingTime: "15-20"
    },
    {
        _id: "9",
        name: "Tiramisù",
        image: food_9,
        price: 14,
        description: "Un dolce italiano a base di mascarpone, caffè e cacao.",
        category: "Dessert",
        cookingTime: "5-10"
    },
    {
        _id: "10",
        name: "Panna Cotta",
        image: food_10,
        price: 22,
        description: "Un dolce al cucchiaio cremoso a base di panna e vaniglia.",
        category: "Dessert",
        cookingTime: "240-360"
    },
    {
        _id: "11",
        name: "Gelato alla Vaniglia",
        image: food_11,
        price: 10,
        description: "Gelato classico alla vaniglia, fresco e cremoso.",
        category: "Dessert",
        cookingTime: "5-10"
    },
    {
        _id: "12",
        name: "Semifreddo al Cioccolato",
        image: food_12,
        price: 12,
        description: "Un dolce semifreddo a base di cioccolato e panna.",
        category: "Dessert",
        cookingTime: "120-180"
    },
    {
        _id: "13",
        name: "Panino con Pollo",
        image: food_13,
        price: 12,
        description: "Un panino con pollo grigliato, insalata e salse.",
        category: "Secondi",
        cookingTime: "10-15"
    },
    {
        _id: "14",
        name: "Panino Vegano",
        image: food_14,
        price: 18,
        description: "Un panino con verdure grigliate, hummus e avocado.",
        category: "Secondi",
        cookingTime: "10-15"
    },
    {
        _id: "15",
        name: "Panino Grigliato",
        image: food_15,
        price: 16,
        description: "Un panino farcito con prosciutto cotto, formaggio e verdure, grigliato alla perfezione.",
        category: "Secondi",
        cookingTime: "5-10"
    },
    {
        _id: "16",
        name: "Panino con Salsiccia",
        image: food_16,
        price: 24,
        description: "Panino con salsiccia, peperoni e cipolla caramellata.",
        category: "Secondi",
        cookingTime: "15-20"
    },
    {
        _id: "17",
        name: "Torta al Cioccolato",
        image: food_17,
        price: 14,
        description: "Una ricca torta al cioccolato, soffice e golosa.",
        category: "Bevande",
        cookingTime: "30-40"
    },
    {
        _id: "18",
        name: "Torta Vegana",
        image: food_18,
        price: 12,
        description: "Torta vegana a base di ingredienti naturali e senza uova.",
        category: "Bevande",
        cookingTime: "30-40"
    },
    {
        _id: "19",
        name: "Torta alla Nocciola",
        image: food_19,
        price: 20,
        description: "Un dolce alle nocciole con una morbida crema.",
        category: "Bevande",
        cookingTime: "40-50"
    },
    {
        _id: "20",
        name: "Torta di Mele",
        image: food_20,
        price: 15,
        description: "Una torta rustica con mele fresche, perfetta per ogni occasione.",
        category: "Bevande",
        cookingTime: "40-50"
    }
];

