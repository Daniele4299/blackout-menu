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
import contorni_insalata from './products/contorni_insalata.png'
import contorni_purepatate from './products/contorni_purepatate.png'
import dessert_cheesecake from './products/dessert_cheesecake.png'
import dessert_tiramisu from './products/dessert_tiramisu.png'
import bevande_cocacola from './products/bevande_cocacola.png'
import bevande_sprite from './products/bevande_sprite.png'
import bevande_fanta from './products/bevande_fanta.png'
import hamburger_carne from './products/hamburger_carne.png'
import hamburger_pesce from './products/hamburger_pesce.png'
import vini_categoria from './products/vini_categoria.png'
import vini_adenzia_rosso from './products/vini_adenzia_rosso.png'
import vini_adenzia_bianco from './products/vini_adenzia_bianco.png'
import vini_cdc_bianco from './products/vini_cdc_bianco.png'
import vini_cdc_rosso from './products/vini_cdc_rosso.png'
import vini_laluci_bianco from './products/vini_laluci_bianco.png'
import vini_sofien_bianco from './products/vini_sofien_bianco.png'
import vini_allucia_bianco from './products/vini_allucia_bianco.png'
import vini_disiato_rosso from './products/vini_disiato_rosso.png'
import vini_scuro_rosso from './products/vini_scuro_rosso.png'
import vini_zahr_bianco from './products/vini_zahr_bianco.png'
import vini_narciso_bianco from './products/vini_narciso_bianco.png'
import vini_chardonnay_bianco from './products/vini_chardonnay_bianco.png'
import vini_zahar_bianco from './products/vini_zahar_bianco.png'
import vini_fidelio_rosso from './products/vini_fidelio_rosso.png'








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
        menu_name: "Hamburger",
        menu_image: hamburger_carne
    },
    {
        menu_name: "Contorni",
        menu_image: contorni_patateforno
    },
    {
        menu_name: "Dessert",
        menu_image: dessert_cheesecake
    },
    {
        menu_name: "Bevande",
        menu_image: bevande_cocacola
    },
    {
        menu_name: "Vini",
        menu_image: vini_categoria
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
        price: 8,
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
        price: 9,
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
        description: "Tagliere per due persone. Clicca per vedere gli ingredienti.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Caponata, formaggi vari, salumi, mozzarella di bufala, miele e pistacchio, cous-cous, involtino di crudo, crocchette, panelle, tuma, accompagnato con ciotoline di marmellata. Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "7",
        name: "Insalata di Mare",
        image: antipasti_insalatadimare,
        price: 9,
        description: "Insalata di Mare",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "8",
        name: "Tris Fumè",
        image: antipasti_trisfume,
        price: 12,
        description: "Tris di salmone affumicato, tonno affumicato e pesce spada affumicato, olio, limone, aromi.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "9",
        name: "Cozze Scoppiate",
        image: antipasti_cozzescoppiate,
        price: 9,
        description: "Cozze Scoppiate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "10",
        name: "Soutè di Cozze e Vongole",
        image: antipasti_soutecozzevongole,
        price: 12,
        description: "Soutè di Cozze e Vongole",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "11",
        name: "Polpo arrosto su Crema di Patate",
        image: antipasti_polpoarrostopatate,
        price: 12,
        description: "Polpo arrosto su Crema di Patate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "12",
        name: "Fritto misto piccolo",
        image: antipasti_frittomisto2,
        price: 8,
        description: "Fritto misto per due persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Patatine (*). Può contenere tracce di glutine."
    },
    {
        _id: "13",
        name: "Fritto misto grande",
        image: antipasti_frittomisto4,
        price: 12,
        description: "Fritto misto per quattro persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Patatine (*). Può contenere tracce di glutine."
    },
    {
        _id: "14",
        name: "Ravioli ripieni di Burrata con salsa al Pistacchio",
        image: primi_raviolopistacchioguanciale,
        price: 11,
        description: "Ravioli ripieni di Burrata con salsa al Pistacchio e Guanciale.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "15",
        name: "Pasta Fresca con Crema di Parmigiano",
        image: primi_pastacremaparmigiano,
        price: 9,
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
        price: 7,
        description: "Pasta con Ragù alla Bolognese.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "18",
        name: "Pasta con Pesto di Basilico e Salsiccia",
        image: primi_pastapestocasa,
        price: 9,
        description: "Pasta con Pesto di Basilico e Salsiccia.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "19",
        name: "Pasta ai Frutti di Mare",
        image: primi_pastafruttimare,
        price: 15,
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
        price: 13,
        description: "Pomodorino, tonno fresco e mandorle.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "22",
        name: "Pasta Ciliegino e Gamberone",
        image: primi_pastacilieginogamberoni,
        price: 14,
        description: "Pasta Ciliegino e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "23",
        name: "Raviolo al Pesto di Pistacchio e Gamberone",
        image: primi_raviolopestogamberoni,
        price: 15,
        description: "Raviolo al Pesto di Pistacchio e Gamberone.",
        category: "Primi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "24",
        name: "Filetto alla Brace",
        image: secondi_filettobrace,
        price: 9,
        description: "Filetto alla Brace",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "25",
        name: "Scaloppine",
        image: secondi_scaloppinefunghi,
        price: 9,
        description: "Ai Funghi, o Limone o Marsala",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "26",
        name: "Filetto di Vitello con Melanzane Tunisine",
        image: secondi_filettovitelloscaglie,
        price: 12,
        description: "Filetto di Vitello con Pesto di Basilico, Melanzane Tunisine e Scaglie di grana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "27",
        name: "Bistecca alla Palermitana",
        image: secondi_bisteccapalermitana,
        price: 7,
        description: "Bistecca alla Palermitana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "28",
        name: "Fiorentina",
        image: secondi_fiorentina,
        price: 4,
        description: "Grigliata di Carne. Prezzo all'etto.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "29",
        name: "Grigliata Mista",
        image: secondi_grigliatamista,
        price: 18,
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
        price: 12,
        description: "Frittura di Calamari.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "32",
        name: "Spiedini di Gambero",
        image: secondi_spiedinogambero,
        price: 18,
        description: "Spiedini di Gambero.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "33",
        name: "Involtini di Spada",
        image: secondi_involtinospada,
        price: 15,
        description: "Involtini di Spada.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "34",
        name: "Tagliata di Tonno al Sesamo",
        image: secondi_tagliatatonno,
        price: 12,
        description: "Tagliata di Tonno al Sesamo.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "35",
        name: "Pesce Spada alla Griglia",
        image: secondi_pescespadagriglia,
        price: 9,
        description: "Pesce Spada alla Griglia.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "36",
        name: "Grigliata Mista di Pesce",
        image: secondi_grigliatamistapesce,
        price: 22,
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
    {
        _id: "38",
        name: "Insalata di Lattuga",
        image: contorni_insalata,
        price: 3,
        description: "Insalata di Lattuga.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "39",
        name: "Purè di Patate",
        image: contorni_purepatate,
        price: 4,
        description: "Purè di Patate.",
        category: "Contorni",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        _id: "40",
        name: "Cheesecake",
        image: dessert_cheesecake,
        price: 4.50,
        description: "Cheesecake.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "41",
        name: "Tiramisù",
        image: dessert_tiramisu,
        price: 4.50,
        description: "Tiramisù.",
        category: "Dessert",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        _id: "42",
        name: "Coca-Cola",
        image: bevande_cocacola,
        price: 2,
        description: "25cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "43",
        name: "Sprite",
        image: bevande_sprite,
        price: 2,
        description: "25cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "44",
        name: "Fanta",
        image: bevande_fanta,
        price: 2,
        description: "25cl",
        category: "Bevande",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "47",
        name: "Blackout",
        image: hamburger_carne,
        price: 15,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger nero, angus, ciliegino a fette, bacon alla griglia, cheddar, salsa burger. Può contenere tracce di glutine."
    },
    {
        _id: "48",
        name: "Pepe verde",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di Scottona, cipolla caramellata, pepe verde, lattuga iceberg, salsa alle erbe. Può contenere tracce di glutine."
    },
    {
        _id: "49",
        name: "Agli Agrumi",
        image: hamburger_carne,
        price: 9,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di pollo panato, gorgonzola, pomodoro picadilly, misticanza, olio, sale, pepe nero, maionese agli agrumi. Può contenere tracce di glutine."
    },
    {
        _id: "50",
        name: "Polpetta",
        image: hamburger_carne,
        price: 16,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di polpetta ripiena al pistacchio e formaggio, mortadella, crema di pistacchio. Può contenere tracce di glutine."
    },
    {
        _id: "51",
        name: "Classico",
        image: hamburger_carne,
        price: 8,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger, lattuga, pomodoro, cheddar, cetriolo, salsa maionese, salsa barbecue. Può contenere tracce di glutine."
    },
    {
        _id: "52",
        name: "Double Burger",
        image: hamburger_carne,
        price: 15,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Doppio Hamburger, lattuga a strati, pomodoro a strati, cheddar a strati, cetriolo, salsa burger. Può contenere tracce di glutine."
    },
    {
        _id: "53",
        name: "Spicy",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di Manzo, cipolla croccante, paprika, pepe, cheddar, succo di lime, coriandolo, pangrattato, lattuga, salsa piccante. Può contenere tracce di glutine."
    },
    {
        _id: "54",
        name: "Il Manzo Strazzato",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Straccetti di manzo cotto a bassa temperatura, cheddar, lattuga, pomodoro a fette, salsa barbecue. Può contenere tracce di glutine."
    },
    {
        _id: "55",
        name: "Il Pollo Strazzato",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Straccetti di petto di pollo, gorgonzola, olio, sale, paprika dolce, senape, foglie di basilico fresco. Può contenere tracce di glutine."
    },
    {
        _id: "56",
        name: "Al Salmone",
        image: hamburger_pesce,
        price: 18,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Trancio di Salmone, iceberg, noci sgusciate, olio, aceto balsamico. Può contenere tracce di glutine."
    },
    {
        _id: "58",
        name: "Cristo di Campobello | CDC",
        image: vini_cdc_bianco,
        price: 22,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        _id: "57",
        name: "Cristo di Campobello | Adenzia",
        image: vini_adenzia_bianco,
        price: 24,
        description: "Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "59",
        name: "Cristo di Campobello | Laluci",
        image: vini_laluci_bianco,
        price: 25,
        description: "Grillo Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "62",
        name: "Cristo di Campobello | CDC",
        image: vini_cdc_rosso,
        price: 24,
        description: "Rosso - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        _id: "66",
        name: "Cristo di Campobello | Adenzia",
        image: vini_adenzia_rosso,
        price: 25,
        description: "Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "65",
        name: "Navarra | Zahr",
        image: vini_zahr_bianco,
        price: 18,
        description: "Bianco Frizzante",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "60",
        name: "Navarra | Sofien",
        image: vini_sofien_bianco,
        price: 20,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        _id: "61",
        name: "Navarra | Allucià",
        image: vini_allucia_bianco,
        price: 22,
        description: "Grillo Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "64",
        name: "Navarra | Disiato",
        image: vini_disiato_rosso,
        price: 20,
        description: "Frappato Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "63",
        name: "Navarra | Scurò",
        image: vini_scuro_rosso,
        price: 22,
        description: "Nero d'Avola Rosso - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        _id: "67",
        name: "Principe di Corleone | Narciso",
        image: vini_narciso_bianco,
        price: 18,
        description: "Lucido Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "68",
        name: "Principe di Corleone | Chardonnay",
        image: vini_chardonnay_bianco,
        price: 20,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        _id: "69",
        name: "Principe di Corleone | Zahar",
        image: vini_zahar_bianco,
        price: 18,
        description: "Bianco Frizzante",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        _id: "70",
        name: "Principe di Corleone | Fidelio",
        image: vini_fidelio_rosso,
        price: 16,
        description: "Nero D'Avola Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
];

