export let products = [
    {
        name: 'Nail Cleaner',
        available: true,
        onSale: false,
        featured: false,
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1571942646045-93677c6462ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: "Genuinely eco-friendly cleaner of wooden floors."
    },
    {
        name: 'Industrial Mop',
        available: true,
        onSale: false,
        featured: true,
        price: 42.99,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        description: "An industrial scale mopping device indispensable for every large operation."
    },
    {
        name: 'Broom',
        available: true,
        onSale: true,
        featured: true,
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80',
        description: "Naturally derived materials"
    },
    {
        name: 'Polishing Oil',
        available: true,
        onSale: true,
        featured: true,
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: "This is really good for polishing all kinds of floors."
    },
    {
        name: 'Scrubber',
        available: true,
        onSale: false,
        featured: false,
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1566814534947-46a09bcbb88c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=919&q=80',
        description: "An item that scrubs out all the hardened dirt from all surfaces."
    },
    {
        name: 'Cleaning Liquid',
        available: true,
        onSale: true,
        featured: true,
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1571779719707-0f24f62ab4fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80',
        description: "This is especially made for car body."
    }

]


export let saleProducts = products.filter(item => {
    return item.onSale === true
})
export let featuredProducts = products.filter(item => {
    return item.featured === true
})