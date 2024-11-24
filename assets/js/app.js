function collectData() {
    const productType = document.getElementById('productType').value
    const priceType = document.getElementById('priceType').value
    const categoryType = document.getElementById('categoryType').value
    const imageUrl = document.getElementById('imageUrl').value
    

    return {
        productType: productType,
        priceType: priceType,
        categoryType: categoryType,
        imageUrl: imageUrl
    }
}

function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.productType} </td>
            <td>${data.priceType} </td>
            <td>${data.categoryType} </td>
            <td><img src="${data.imageUrl}" class="color-cell" /></td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const productContainer = document.getElementById('productContainer')
    productContainer.innerHTML += newHTML
}

function clearForm() {
    const productForm = document.getElementById('productForm')
    productForm.reset()

}

function addToTable(event) {
    event.preventDefault()
    const data = collectData()
    const htmlTableRow = generateHTML(data)
    renderHTML(htmlTableRow)
    clearForm()
    
}