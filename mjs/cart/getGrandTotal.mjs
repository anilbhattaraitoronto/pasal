export function getGrandTotal(itemTotalArray) {

    let grandTotal = itemTotalArray.reduce((total, amount), () => (total + amount, 0))
    return grandTotal

}