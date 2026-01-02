const express = require('express')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Wellcome to Digital store')
})
//get request
app.get('/products', (req, res) => {
    const products = [{
        id: 1,
        product: 'product 1'
    }, {
        id: 2,
        product: 'product 2'
    }, {
        id: 3,
        product: 'product 3'
    }];
    res.json(products)
})
//dynamic routing 
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [{
        id: 1,
        product: 'product 1'
    }, {
        id: 2,
        product: 'product 2'
    }, {
        id: 3,
        product: 'product 3'
    }];
    const singleProduct = products.find((product) => product.id === productId);
    if (singleProduct) {
        res.json(singleProduct);
    } else {
        res.status(404).send('product not found');
    }
})
app.use((req, res, next) => {
    res.status(404).send('page not found');
    next();
})
app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})