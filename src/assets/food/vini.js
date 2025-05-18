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
import vini_narciso_rosso from './products/vini_narciso_rosso.png'


export const items = [
    {
        name: "Cristo di Campobello | CDC",
        image: vini_cdc_bianco,
        price: 22,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Cristo di Campobello | Adenzia",
        image: vini_adenzia_bianco,
        price: 24,
        description: "Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Cristo di Campobello | Laluci",
        image: vini_laluci_bianco,
        price: 25,
        description: "Grillo Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Cristo di Campobello | CDC",
        image: vini_cdc_rosso,
        price: 24,
        description: "Rosso - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Cristo di Campobello | Adenzia",
        image: vini_adenzia_rosso,
        price: 25,
        description: "Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Navarra | Zahr",
        image: vini_zahr_bianco,
        price: 18,
        description: "Bianco Frizzante",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Navarra | Sofien",
        image: vini_sofien_bianco,
        price: 20,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Navarra | Allucià",
        image: vini_allucia_bianco,
        price: 22,
        description: "Grillo Bianco",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Navarra | Disiato",
        image: vini_disiato_rosso,
        price: 20,
        description: "Frappato Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Navarra | Scurò",
        image: vini_scuro_rosso,
        price: 22,
        description: "Nero d'Avola Rosso - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Principe di Corleone | Narciso",
        image: vini_narciso_bianco,
        price: 18,
        description: "Lucido Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Principe di Corleone | Chardonnay",
        image: vini_chardonnay_bianco,
        price: 20,
        description: "Bianco - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Principe di Corleone | Zahar",
        image: vini_zahar_bianco,
        price: 18,
        description: "Bianco Frizzante - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
    {
        name: "Principe di Corleone | Fidelio",
        image: vini_fidelio_rosso,
        price: 16,
        description: "Nero D'Avola Rosso",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: ""
    },
    {
        name: "Principe di Corleone | Narciso",
        image: vini_narciso_rosso,
        price: 18,
        description: "Rosso - Nerello Mascarese - Bottiglia o Calice",
        category: "Vini",
        cookingTime: "10-15",
        extraDescription: "Calice 6€"
    },
]

export const vini = items.map((item, index) => ({
    ...item,
    _id: `vini_${index + 1}`
}));