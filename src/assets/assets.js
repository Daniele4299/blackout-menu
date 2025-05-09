import logo from './logo.png'
import header_img from './header_img.png'

import { antipasti } from './food/antipasti'
import { primi } from './food/primi'
import { secondi } from './food/secondi'
import { hamburger } from './food/hamburger'
import { contorni } from './food/contorni'
import { dessert } from './food/dessert'
import { bevande } from './food/bevande'
import { vini } from './food/vini'

import antipasti_taglieregourmet from './food/products/antipasti_taglieregourmet.png'
import primi_raviolopestogamberoni from './food/products/primi_raviolopestogamberoni.png'
import secondi_fiorentina from './food/products/secondi_fiorentina.png'
import hamburger_carne from './food/products/hamburger_carne.png'
import contorni_patateforno from './food/products/contorni_patateforno.png'
import dessert_cheesecake from './food/products/dessert_cheesecake.png'
import bevande_cocacola from './food/products/bevande_cocacola.png'
import vini_categoria from './food/products/vini_categoria.png'

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
    ...antipasti,
    ...primi,
    ...secondi,
    ...hamburger,
    ...contorni,
    ...dessert,
    ...bevande,
    ...vini,
];

