export function searchProducts(inputId, searchTitleClass) {
    let searchBar = document.querySelector(inputId)
    let searchTitles = Array.from(document.getElementsByClassName(searchTitleClass))

    searchBar.addEventListener('keyup', (event) => {
        let searchTerm = event.target.value.toLowerCase()
        searchTitles.forEach(title => {
            let itemTitle = title.textContent.toLowerCase()
            let product = title.parentElement

            if (itemTitle.indexOf(searchTerm) !== -1) {
                product.style.display = "block"
            } else {
                product.style.display = "none"
            }

        })

    })

}