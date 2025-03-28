const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart')

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString)
        return storedCart
    }
    return []
}

const saveToCartLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
};

const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage()
    // cart.push(id)
    const newCart = [...cart, id]
    saveToCartLocalStorage(newCart)
}

export {getCartFromLocalStorage,addItemToCartLocalStorage}