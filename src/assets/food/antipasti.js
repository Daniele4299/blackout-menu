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

export const items = [
    {
        name: "Roast-beef",
        image: antipasti_roastbeef,
        price: 8,
        description: "Cotto a bassa temperatura con rucola fresca e mirtilli di stagione.",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Contiene carne bovina. Possibili tracce di glutine."
    },
    {
        name: "Caponata siciliana",
        image: antipasti_caponata,
        price: 7,
        description: "Con profumo di basilico fresco e crostini della casa",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Veli di crudo di Parma",
        image: antipasti_crudo,
        price: 7,
        description: "Accompagnati da una fresca mozzarella di Bufala.",
        category: "Antipasti",
        cookingTime: "5-10",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        name: "Vitello Tonnato",
        image: antipasti_vitellotonnato,
        price: 9,
        description: "Accompagnato da una pioggia di capperi.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio."
    },
    {
        name: "Cannolo Salato",
        image: antipasti_cannolosalato,
        price: 8,
        description: "Accompagnato da pomodori secchi, olive nere, tuma, basilico su crema di melanzana.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine e lattosio. Cannolo Salato (**)"
    },
    {
        name: "Tagliere Gourmet",
        image: antipasti_taglieregourmet,
        price: 22,
        description: "Tagliere per due persone. Clicca per vedere gli ingredienti.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Caponata, formaggi vari, salumi, mozzarella di bufala, miele e pistacchio, cous-cous, involtino di crudo, crocchette, panelle, tuma, ciotoline di marmellata, salamino a pezzo e una ciotolina di olive verdi ripiene.  Può contenere tracce di glutine e lattosio."
    },
    {
        name: "Insalata di Mare",
        image: antipasti_insalatadimare,
        price: 11,
        description: "Insalata di Mare",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Insalata di Mare (**)"
    },
    {
        name: "Tris Fumè",
        image: antipasti_trisfume,
        price: 12,
        description: "Tris di salmone affumicato, tonno affumicato e pesce spada affumicato, olio, limone, aromi.",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Cozze Scoppiate",
        image: antipasti_cozzescoppiate,
        price: 9,
        description: "Cozze Scoppiate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Soutè di Cozze e Vongole",
        image: antipasti_soutecozzevongole,
        price: 12,
        description: "Soutè di Cozze e Vongole",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Polpo arrosto su Crema di Patate",
        image: antipasti_polpoarrostopatate,
        price: 12,
        description: "Polpo arrosto su Crema di Patate",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Polpo (*)"
    },
    {
        name: "Fritto misto piccolo",
        image: antipasti_frittomisto2,
        price: 8,
        description: "Fritto misto per due persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Patatine (*)"
    },
    {
        name: "Fritto misto grande",
        image: antipasti_frittomisto4,
        price: 12,
        description: "Fritto misto per quattro persone",
        category: "Antipasti",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Patatine (*)"
    },
]

export const antipasti = items.map((item, index) => ({
    ...item,
    _id: `antipasti_${index + 1}`
}));
