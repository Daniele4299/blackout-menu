import hamburger_carne from './products/hamburger_carne.png'
import hamburger_pesce from './products/hamburger_pesce.png'

export const items = [
    {
        name: "Blackout",
        image: hamburger_carne,
        price: 14,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger nero, angus, ciliegino a fette, bacon alla griglia, cheddar, salsa burger. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Pepe verde",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di Scottona, cipolla caramellata, pepe verde, lattuga iceberg, salsa alle erbe. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Agli Agrumi",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di pollo panato, gorgonzola, pomodoro picadilly, misticanza, olio, sale, pepe nero, maionese agli agrumi. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Polpetta",
        image: hamburger_carne,
        price: 15,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger, polpetta di cavallo, formaggio, mortadella, crema di pistacchio. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Classico",
        image: hamburger_carne,
        price: 9,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger, lattuga, pomodoro, cheddar, cetriolo, salsa maionese, salsa barbecue. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Double Burger",
        image: hamburger_carne,
        price: 14,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Doppio Hamburger, lattuga a strati, pomodoro a strati, cheddar a strati, cetriolo, salsa burger. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Spicy",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Hamburger di Manzo, cipolla croccante, paprika, pepe, cheddar, succo di lime, coriandolo, pangrattato, lattuga, salsa piccante. Può contenere tracce di glutine. Burger (*)"
    },
    {
        name: "Il Manzo Strazzato",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Straccetti di manzo cotto a bassa temperatura, cheddar, lattuga, pomodoro a fette, salsa barbecue. Può contenere tracce di glutine."
    },
    {
        name: "Il Pollo Strazzato",
        image: hamburger_carne,
        price: 12,
        description: "Clicca per vedere gli ingredienti.",
        category: "Hamburger",
        cookingTime: "10-15",
        extraDescription: "Straccetti di petto di pollo, gorgonzola, olio, sale, paprika dolce, senape, foglie di basilico fresco. Può contenere tracce di glutine. Pollo (**)"
    },
]

export const hamburger = items.map((item, index) => ({
    ...item,
    _id: `hamburger_${index + 1}`
}));