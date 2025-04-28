import logo from './logo.png'
import header_img from './header_img.png'

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
import secondi_filettobrace from './products/secondi_filettobrace.png'
import secondi_scaloppinefunghi from './products/secondi_scaloppinefunghi.png'
import secondi_filettovitelloscaglie from './products/secondi_filettovitelloscaglie.png'
import secondi_bisteccapalermitana from './products/secondi_bisteccapalermitana.png'
import secondi_fiorentina from './products/secondi_fiorentina.png'
import secondi_grigliatamista from './products/secondi_grigliatamista.png'
import secondi_fritturacalamari from './products/secondi_fritturacalamari.png'
import secondi_tagliatavitello from './products/secondi_tagliatavitello.png'
import secondi_spiedinogambero from './products/secondi_spiedinogambero.png'
import secondi_involtinospada from './products/secondi_involtinospada.png'
import secondi_tagliatatonno from './products/secondi_tagliatatonno.png'
import secondi_pescespadagriglia from './products/secondi_pescespadagriglia.png'
import secondi_grigliatamistapesce from './products/secondi_grigliatamistapesce.png'
import contorni_patateforno from './products/contorni_patateforno.png'


export const assets = {
    logo,
    header_img
}

export const menu_list = [
    {
        menu_name: "Antipasti",
        menu_image: antipasti_taglieregourmet
    },
    {
        menu_name: "Primi",
        menu_image: primi_raviolopestogamberoni
    },
    {
        menu_name: "Secondi",
        menu_image: secondi_fiorentina
    },
    {
        menu_name: "Contorni",
        menu_image: contorni_patateforno
    },
    {
        menu_name: "Dessert",
        menu_image: antipasti_vitellotonnato
    },
    {
        menu_name: "Bevande",
        menu_image: antipasti_soutecozzevongole
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
        description: "Tagliere per due persone. ",
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
    {
        _id: "24",
        name: "Filetto alla Brace",
        image: secondi_filettobrace,
        price: 8,
        description: "Filetto alla Brace",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "25",
        name: "Scaloppine",
        image: secondi_scaloppinefunghi,
        price: 8,
        description: "Ai Funghi, o Limone o Marsala",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "26",
        name: "Filetto di Vitello con Melanzane Tunisine",
        image: secondi_filettovitelloscaglie,
        price: 8,
        description: "Filetto di Vitello con Pesto di Basilico, Melanzane Tunisine e Scaglie di grana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "27",
        name: "Bistecca alla Palermitana",
        image: secondi_bisteccapalermitana,
        price: 8,
        description: "Bistecca alla Palermitana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "28",
        name: "Fiorentina",
        image: secondi_fiorentina,
        price: 4.50,
        description: "Grigliata di Carne. Prezzo all'etto.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "29",
        name: "Grigliata Mista",
        image: secondi_grigliatamista,
        price: 8,
        description: "Grigliata mista.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "30",
        name: "Tagliata di Vitello",
        image: secondi_tagliatavitello,
        price: 8,
        description: "Con Rucola, Scaglie di Grana e Aceto balsamico.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "31",
        name: "Frittura di Calamari",
        image: secondi_fritturacalamari,
        price: 8,
        description: "Frittura di Calamari.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "32",
        name: "Spiedini di Gambero",
        image: secondi_spiedinogambero,
        price: 8,
        description: "Spiedini di Gambero.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "33",
        name: "Involtini di Spada",
        image: secondi_involtinospada,
        price: 8,
        description: "Involtini di Spada.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "34",
        name: "Tagliata di Tonno al Sesamo",
        image: secondi_tagliatatonno,
        price: 8,
        description: "Tagliata di Tonno al Sesamo.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "35",
        name: "Pesce Spada alla Griglia",
        image: secondi_pescespadagriglia,
        price: 8,
        description: "Pesce Spada alla Griglia.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "36",
        name: "Grigliata Mista di Pesce",
        image: secondi_grigliatamistapesce,
        price: 8,
        description: "Grigliata Mista di Pesce.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "37",
        name: "Patate al Forno",
        image: contorni_patateforno,
        price: 4,
        description: "Patate al Forno.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
];

