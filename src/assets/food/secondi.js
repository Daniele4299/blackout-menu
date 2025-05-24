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
import secondi_tagliataangus from './products/secondi_tagliataangus.png'
import secondi_agnellopatate from './products/secondi_agnellopatate.png'

export const items = [
    {
        name: "Filetto alla Brace",
        image: secondi_filettobrace,
        price: 15,
        description: "Filetto alla Brace",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Scaloppine",
        image: secondi_scaloppinefunghi,
        price: 13,
        description: "Ai Funghi, o Limone o Marsala",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Filetto di Vitello con Melanzane Tunisine",
        image: secondi_filettovitelloscaglie,
        price: 15,
        description: "Filetto di Vitello con Pesto di Basilico, Melanzane Tunisine e Scaglie di grana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Bistecca alla Palermitana",
        image: secondi_bisteccapalermitana,
        price: 7,
        description: "Bistecca alla Palermitana.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Fiorentina",
        image: secondi_fiorentina,
        price: 4.5,
        description: "Grigliata di Carne. Prezzo all'etto.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Fiorentina e Angus (**)"
    },
    {
        name: "Grigliata Mista",
        image: secondi_grigliatamista,
        price: 18,
        description: "Fettina di vitello alla griglia, costata di maiale, salsiccia, agnello.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Tagliata di Vitello",
        image: secondi_tagliatavitello,
        price: 18,
        description: "Con Rucola, Scaglie di Grana e Aceto balsamico.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Agnello con Patate al Forno",
        image: secondi_agnellopatate,
        price: 15,
        description: "Agnello con Patate al Forno",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Tagliata di Angus alla Griglia",
        image: secondi_tagliataangus,
        price: 20,
        description: "Tagliata di Angus alla Griglia servita con Patate al Forno",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine."
    },
    {
        name: "Frittura di Calamari",
        image: secondi_fritturacalamari,
        price: 13,
        description: "Frittura di Calamari.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Calamari (*)"
    },
    {
        name: "Spiedini di Gambero",
        image: secondi_spiedinogambero,
        price: 18,
        description: "Spiedini di Gambero.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Gambero (*)"
    },
    {
        name: "Involtini di Spada",
        image: secondi_involtinospada,
        price: 15,
        description: "Involtini di Spada.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Spada (*)"
    },
    {
        name: "Tagliata di Tonno al Sesamo",
        image: secondi_tagliatatonno,
        price: 17,
        description: "Tagliata di Tonno al Sesamo.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Tonno (**)"
    },
    {
        name: "Pesce Spada alla Griglia",
        image: secondi_pescespadagriglia,
        price: 14,
        description: "Pesce Spada alla Griglia.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Spada (*)"
    },
    {
        name: "Grigliata Mista di Pesce",
        image: secondi_grigliatamistapesce,
        price: 22,
        description: "Grigliata Mista di Pesce.",
        category: "Secondi",
        cookingTime: "10-15",
        extraDescription: "Può contenere tracce di glutine. Grigliata Mista (*)"
    },
]

export const secondi = items.map((item, index) => ({
    ...item,
    _id: `secondi_${index + 1}`
}));
