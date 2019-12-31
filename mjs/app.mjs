import { getYear } from '/mjs/generalFunctions/getYear.mjs'
import { products, saleProducts, featuredProducts } from '/mjs/data/products.mjs'
import { displayData } from '/mjs/data/displayData.mjs'
import { displaySections } from '/mjs/navigation/displaySections.mjs'
import { navigateSections } from '/mjs/navigation/navigateSections.mjs'
import { searchProducts } from './data/searchProducts.mjs'
import { showHideDetail } from './data/showHideDetail.mjs'

loadApp()

function loadApp() {
    getYear('copy-right-year')

    displayData(products, 'all-product-list')
    displayData(saleProducts, 'sale-product-list')
    displayData(featuredProducts, 'featured-product-list')

    displaySections('main-page', 'main-link', 'active', 0)
    displaySections('products', 'product-nav-link', 'active', 0)

    showHideDetail('product-detail-button', 'product-detail')

    navigateSections('main-nav', 'main-page', 'main-link', 'active')
    navigateSections('product-nav', 'products', 'product-nav-link', 'active')

    searchProducts('#search', 'product-name')
}