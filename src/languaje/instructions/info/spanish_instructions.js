export const spanish_instructions = {
    productionTitle: 'Instrucciones',
    productionText: 'Ésta herramienta fué hecha para calcular la ganancia por hora para cada edificio. Es una forma de saber la viabilidad en determinado momento y puede servir para tomar mejores decisiones dentro del juego.',
    productionArray: [
        {
            id: 1,
            title: 'Presione el botón "Obtén precios" ',
            text: 'Ésta acción obtendrá los precios desde el mercado usando la API de Sim Company y los guardará en tu navegador',
        },
        {
            id: 2,
            title: 'Escribe la información requerida',
            text: 'Todos los numeros deberán ser positivos. Si cometes un error el valor por default será 0',
        },
        {
            id: 3,
            title: 'Selecciona el edificio, fase y calidad',
            text: 'Cuando cambies alguno de éstos valores los cambios se aplicarán de inmediato',
        },
        {
            id: 4,
            title: 'Presiona el botón "Calcular"',
            text: 'Ésto aplicará y guardará todos los cambios',
        },
    ],

    considerationsTitle: 'Algunas consideraciones',
    considerationsText: 'Hay algunas cosas que debes tener en cuenta antes de usar ésta herramienta. Algunas de ellas son:',
    considerationsArray: [
        {
            id: 1,
            text: 'El botón "Obtén precios" estará en color amarillo si los precios fueron leidos del almacenamiento de tu navegador, rojo si no los tienes ni los has descargado y verde cuando ya hayas pulsado el botón en la sesión actual.',
        },
        {
            id: 2,
            text: 'La calculadora obtiene los precios de todas las calidades para todos los productos y los guarda en el almacenamiento local de tu navegador. Esto significa que no es necesario presionarlo antes de cada cálculo o modificación. Incluso si reabres el sitio web en la mayoría de casos los precios seguirán ahí.',
        },
        {
            id: 3,
            text: 'Puedes cambiar el modo entre claro/oscuro, así como el lenguaje usando el respectivo botón y menú. Los cambios se guardarán también en el navegador.',
        },
        {
            id: 4,
            text: 'La razón por la cuál esta herramienta toma los precios desde el mercado es que de ésa forma es más fácil conocer la ganancia real. Ésto puede ayudarte a tomar mejores desiciónes pero aún debes tener tu propio criterio.',
        },
    ],

    partsProductionTitle: 'Partes de la calculadora de producción',
    columnsTitle:'Columnas',
    columnsProductionArray: [
        {
            id: 1,
            title: 'Producto',
            text: 'El nombre del producto',
        },
        {
            id: 2,
            title: 'Costo total de producción',
            text: 'Se refiere al costo por unidad. Puedes ver más información en la sección "Detalle".',
        },
        {
            id: 3,
            title: 'Precio en mercado',
            text: 'Se refiere al precio por unidad de la calidad seleccionada para éste producto.',
        },
        {
            id: 4,
            title: 'Unidades/hora',
            text: 'Para llegar a éste número se toma en cuenta el bonus de producción, el nivel de edificio y la fase seleccionada.',
        },
        {
            id: 5,
            title: 'Ganancia/hora Mercado',
            text: 'La ganancia que obtendrías por hora si vendieras tus productos en el mercado al precio indicado en (3). Para llegar a éste número se toma en cuanta la columna (2),(4), la comisión, así como el costo del trasnporte.',
        },
        {
            id: 6,
            title: 'Ganancia/hora Contrato',
            text: 'La ganancia que obtendrías por hora si se vendieran los productos vía contratos. Para llegar a ésta cifra se toman en cuenta las columnas (3),(4) así como el precio del transporte y el porcentate de venta bajo mercado indicado',
        },
        {
            id: 7,
            title: 'Materia prima',
            text: 'El nombre de las materias primas usadas para elaborar el producto final.',
        },
        {
            id: 8,
            title: 'Cantidad',
            text: 'Cantidad de materia prima necesaria',
        },
        {
            id: 9,
            title: 'Costo unitario',
            text: 'Se refier al precio de mercado de una unidad de la materia prima. Éste precio es el de un nivel de calidad menor a tu producto final. Por ejemplo, si se intenta elaborar un producto nivel 6 necesitarás materias primas nivel 5.',
        },
        {
            id: 10,
            title: 'Costo total',
            text: 'Éste es el resultado de multiplicar la columna (8) y (9).',
        }, 
    ],
    rowsTitle:'Filas',
    rowsProductionArray: [
        {
            id: 'A',
            title: 'Producto',
            text: 'Fila que incluye la información del producto a elaborar.',
        },
        {
            id: 'a',
            title: 'Materias primas',
            text: 'Filas que contienen la información de las materias primas necesarias para elaboarar un producto.',
        },
        {
            id: 'b',
            title: 'Costo total de materias primas',
            text: 'Es la suma de los costos de las materias primas',
        },
        {
            id: 'c',
            title: 'Salarios',
            text: 'Hace referencia al costo de los salarios que hay que pagar por unidad. Esto se calcula usando la información de (4) y los salarios por hora del edificio.',
        },
        {
            id: 'd',
            title: 'Administración',
            text: 'Cantidad de dinero que se paga por gastos administrativos. Se calcula usando la información de (c) y el porcentaje de gastos administrativos proporcionado.',
        },
        {
            id: 'e',
            title: 'Costo total de produción',
            text: 'Costo total de fabricación de una unidad. Es la suma de (b),(c),(d) y (e).',
        },
    ],
}