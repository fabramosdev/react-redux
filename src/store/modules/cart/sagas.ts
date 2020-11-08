import { all, takeLatest } from 'redux-saga/effects';

function ckeckProductStock() {
    console.log('ADD AO CARRINHO')
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART', ckeckProductStock),
]);