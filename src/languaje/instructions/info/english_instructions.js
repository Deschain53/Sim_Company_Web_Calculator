export const english_instructions = {
    productionTitle: 'Instructions',
    productionText: 'This tool was made to calculate the profit per hour for each product from a building. It is a way to know the viability at that moment and can be used to take better decisions at the game.',
    productionArray: [
        {
            id: 1,
            title: 'Push the button "Get prices".',
            text: 'This action is going to get the current prices from the market using the Sim company\'s API and is going to save them in your browser.',
        },
        {
            id: 2,
            title: 'Fill the information needed.',
            text: 'All numbers should be positive. If you made a mistake the value per defaul is going to be readed as 0',
        },
        {
            id: 3,
            title: 'Select the building, fase and quality.',
            text: 'When you change this values the changes are applied inmediatly.',
        },
        {
            id: 4,
            title: 'Press the button "Calculate".',
            text: 'This will apply and save the changes.',
        },
    ],

    considerationsTitle: 'Some considerations',
    considerationsText: 'There things that are good to keep in mind while you use this tool. Some of them are:',
    considerationsArray: [
        {
            id: 1,
            text: 'The button \'Get prices\' will be in color yellow if the prices were readed from your local storage in your browser, red if you don\'t have prices in your local storage and green if you pressed the button in the current sesion.',
        },
        {
            id: 2,
            text: 'The calculator get the prices of all qualitys for all products and save them in your local storage, all calculations are made using this prices saved. This mean that it is not necessary to press it before each calculation. Even if you close and open the website again in most cases the prices are going to be there, saved.',
        },
        {
            id: 3,
            text: 'You can change between the mode light/dark and the languaje using the respectve button and menu. This changes are going to be saved in your browser.',
        },
        {
            id: 4,
            text: 'The reason this tool take the market prices to make the calculus is because that way is better to check the real profit. These could help you to take better desicions but you have to had your own criteria. We are not responsably for any consecuences you might cause, use these at your own risk',
        },
    ],

    partsProductionTitle: 'Parts of the production calculator table',
    columnsTitle:'Columns',
    columnsProductionArray: [
        {
            id: 1,
            title: 'Product',
            text: 'The name of the product',
        },
        {
            id: 2,
            title: 'Cost',
            text: 'The total cost of production of one unit. More information about how this number was get it\'s in the section \'Detail\'.',
        },
        {
            id: 3,
            title: 'Market price',
            text: 'This is the current market price of one unit for the quality selected.',
        },
        {
            id: 4,
            title: 'Units/hour',
            text: 'The units/hour produced per hour. This is calculated using the information of the building level, the bonus and the fase selected.',
        },
        {
            id: 5,
            title: 'Profit/hour Market',
            text: 'This indicate the amount you would get per hour if you sold in the market at the price indicated in (3). To get this number colum (2),(4) and the comission of -3% is used. The information of the cost of one unit of transport and the hole amount needed is considered as well.',
        },
        {
            id: 6,
            title: 'Profit/hour Contracts',
            text: 'This indicate the amount you would get per hour if you sold by contract with the discount of the porcentaje under market price indicated. In this example a porcentaje of -3% is used. To get this numer also colum (2),(4) and information of the cost of transport and a half of the amount needed is used.',
        },
        {
            id: 7,
            title: 'Item',
            text: 'The name of the items that are needed to make one unit of the product.',
        },
        {
            id: 8,
            title: 'Amount',
            text: 'Amount of the item needed.',
        },
        {
            id: 9,
            title: 'Unit cost',
            text: 'Price in the market of one unit of the item needed. Remember that this price is one qualiy less than the product you are making. So if you are making a product quality 6 you will need items quality 5.',
        },
        {
            id: 10,
            title: 'Total cost',
            text: 'This number is the result of multiplying (8) and (9).',
        }, 
    ],
    rowsTitle:'Rows',
    rowsProductionArray: [
        {
            id: 'A',
            title: 'Products',
            text: 'Row corresponding at the product you are making',
        },
        {
            id: 'a',
            title: 'Items',
            text: 'Items needed to make the product in (A) .',
        },
        {
            id: 'b',
            title: 'Total cost items',
            text: 'The addition of the total cost of items (a) .',
        },
        {
            id: 'c',
            title: 'Wages',
            text: 'This indicates the wages you pay per unit is calculated using the information from (4)  and the wages of the building.',
        },
        {
            id: 'd',
            title: 'Administration overhead',
            text: 'The amount is calculated using the info of the admin you indicated and the wages from (c) .',
        },
        {
            id: 'e',
            title: 'Total cost of fabrication',
            text: 'Total cost of fabrication. It\'s calculated adding up (b) , (c) , (d)  and (e) .',
        },
    ],
}