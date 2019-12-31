export function showHideDetail(detailButtonClass, detailClass) {
    let detailButtons = Array.from(document.getElementsByClassName(detailButtonClass))
    let details = Array.from(document.getElementsByClassName(detailClass))

    for (let i = 0; i < detailButtons.length; i++) {
        detailButtons[i].addEventListener('click', (event) => {
            details[i].classList.toggle('show-hide')
        })
    }

}