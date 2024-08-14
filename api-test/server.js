const express = require('express');
const app = express();
const port = 3002;

// Permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Endpoint que devuelve una lista de productos
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
        { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
        { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports' },
        { id: 4, name: 'Coffee Maker', price: 49.99, category: 'Home Appliances' },
    ];
    res.json(products);
});

// Endpoint que devuelve una lista de categorías
app.get('/categories', (req, res) => {
    const categories = [
        { id: 1, name: 'Electronics', description: 'Gadgets y dispositivos electrónicos' },
        { id: 2, name: 'Sports', description: 'Equipamiento y accesorios deportivos' },
        { id: 3, name: 'Home Appliances', description: 'Electrodomésticos para tu hogar' },
        { id: 4, name: 'Books', description: 'Varios géneros de libros' },
    ];
    res.json(categories);
});

// Nuevo endpoint que devuelve una lista de reseñas de productos
app.get('/reviews', (req, res) => {
    const reviews = [
        { id: 1, productId: 1, rating: 4.5, comment: 'Excelente portátil, muy rápido!', author: 'John Doe' },
        { id: 2, productId: 2, rating: 4.0, comment: 'Joder pero que buenos graficos.', author: 'Jane Smith' },
        { id: 3, productId: 3, rating: 5.0, comment: 'Zapatillas cómodas para correr!', author: 'Mike Johnson' },
        { id: 4, productId: 4, rating: 3.5, comment: 'Cafetera decente por el precio.', author: 'Sarah Brown' },
    ];
    res.json(reviews);
});

app.listen(port, () => {
    console.log(`Nueva API REST corriendo en http://localhost:${port}`);
});