export function displayData(data, dataContainerId) {
    let dataContainer = document.getElementById(dataContainerId)


    data.forEach(item => {

        let productItem = `
        <section class="product">
            <img src='${item.image}' class="product-image" title='${item.name}' />
            <h3 class="product-name">${item.name}</h3>
            <p> Price: <span class="product-price">${item.price}</span></p>
            <a class="product-detail-button">More Detail </a>
            <p class="product-detail show-hide">${item.description}</p>
            <button class="add-to-cart-button">Add To Cart</button>
        </section>
        `
        dataContainer.innerHTML += productItem
    })


}