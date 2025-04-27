import logo from './logo.png'
import header_img from './header_img.png'
import menu_1 from './categories/menu_1.png'
import menu_2 from './categories/menu_2.png'
import menu_3 from './categories/menu_3.png'
import menu_4 from './categories/menu_4.png'
import menu_5 from './categories/menu_5.png'

import antipasti_roastbeef from './products/antipasti_roastbeef.png'
import antipasti_caponata from './products/antipasti_caponata.png'
import antipasti_crudo from './products/antipasti_crudo.png'
import antipasti_vitellotonnato from './products/antipasti_vitellotonnato.png'
import antipasti_cannolosalato from './products/antipasti_cannolosalato.png'
import antipasti_taglieregourmet from './products/antipasti_taglieregourmet.png'
import antipasti_insalatadimare from './products/antipasti_insalatadimare.png'
import antipasti_trisfume from './products/antipasti_trisfume.png'
import antipasti_cozzescoppiate from './products/antipasti_cozzescoppiate.png'
import antipasti_soutecozzevongole from './products/antipasti_soutecozzevongole.png'
import antipasti_polpoarrostopatate from './products/antipasti_polpoarrostopatate.png'
import antipasti_frittomisto2 from './products/antipasti_frittomisto2.png'
import antipasti_frittomisto4 from './products/antipasti_frittomisto4.png'
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
        name: "Roast-beef",
        image: antipasti_roastbeef,
        price: 8,
        description: "Cotto a bassa temperatura con rucola fresca e mirtilli di stagione.",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Contiene carne bovina. Possibili tracce di glutine."
    },
    {
        _id: "2",
        name: "Caponata siciliana",
        image: antipasti_caponata,
        price: 7,
        description: "Con profumo di basilico fresco e crostini della casa",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "3",
        name: "Veli di crudo di Parma",
        image: antipasti_crudo,
        price: 7,
        description: "Accompagnati da una fresca mozzarella di Bufala.",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },    
    {
        _id: "4",
        name: "Vitello Tonnato",
        image: antipasti_vitellotonnato,
        price: 7,
        description: "Accompagnato da una pioggia di capperi.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "5",
        name: "Cannolo Salato",
        image: antipasti_cannolosalato,
        price: 8,
        description: "Accompagnato da pomodori secchi, olive nere, tuma, basilico su crema di melanzana.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "6",
        name: "Tagliere Gourmet",
        image: antipasti_taglieregourmet,
        price: 22,
        description: "Tagliere per due persone. Caponata, formaggi vari, salumi, mozzarella di bufala ...",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Caponata, formaggi vari, salumi, mozzarella di bufala, miele e pistacchio, cous-cous, involtino di crudo, crocchette, panelle, tuma, accompagnato con ciotoline di marmellata. Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "7",
        name: "Insalata di Mare",
        image: antipasti_insalatadimare,
        price: 12,
        description: "Insalata di Mare",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "8",
        name: "Tris Fumè",
        image: antipasti_trisfume,
        price: 10,
        description: "Tris di salmone affumicato, tonno affumicato e pesce spada affumicato, olio, limone, aromi.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "9",
        name: "Cozze Scoppiate",
        image: antipasti_cozzescoppiate,
        price: 10,
        description: "Cozze Scoppiate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "10",
        name: "Soutè di Cozze e Vongole",
        image: antipasti_soutecozzevongole,
        price: 10,
        description: "Soutè di Cozze e Vongole",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "11",
        name: "Polpo arrosto su Crema di Patate",
        image: antipasti_polpoarrostopatate,
        price: 10,
        description: "Polpo arrosto su Crema di Patate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "12",
        name: "Fritto misto (2 pers.)",
        image: antipasti_frittomisto2,
        price: 6,
        description: "Fritto misto per due persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "13",
        name: "Fritto misto (4 pers.)",
        image: antipasti_frittomisto4,
        price: 10,
        description: "Fritto misto per quattro persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "14",
        name: "Ravioli di Burrata al Pistacchio",
        image: primi_raviolopistacchioguanciale,
        price: 8,
        description: "Ravioli di Burrata con pesto di Pistacchio e Guanciale.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "15",
        name: "Pasta Fresca con Crema di Parmigiano",
        image: primi_pastacremaparmigiano,
        price: 8,
        description: "Pasta fresca con crema di Parmigiano, Speck e Zafferano.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "16",
        name: "Tagliatelle con Crema di Melanzana",
        image: primi_tagliatellemelanzana,
        price: 8,
        description: "Tagliatelle con Crema di Melanzana, Pancetta e Scaglie di Grana.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "17",
        name: "Pasta con Ragù alla Bolognese",
        image: primi_pastabolognese,
        price: 8,
        description: "Pasta con Ragù alla Bolognese.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "18",
        name: "Pasta con Pesto della casa",
        image: primi_pastapestocasa,
        price: 7,
        description: "Pasta con Pesto della casa.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "19",
        name: "Pasta ai Frutti di Mare",
        image: primi_pastafruttimare,
        price: 10,
        description: "Pasta ai Frutti di Mare.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "20",
        name: "Spaghetti alle Vongole",
        image: primi_spaghettivongole,
        price: 12,
        description: "Spaghetti alle Vongole.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "21",
        name: "Pasta alla Tonnarina",
        image: primi_pastatonnarina,
        price: 12,
        description: "Pomodorino, tonno fresco e mandorle.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "22",
        name: "Pasta Ciliegino e Gamberone",
        image: primi_pastacilieginogamberoni,
        price: 12,
        description: "Pasta Ciliegino e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "23",
        name: "Raviolo al Pesto di Pistacchio e Gamberone",
        image: primi_raviolopestogamberoni,
        price: 14,
        description: "Raviolo al Pesto di Pistacchio e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
];

