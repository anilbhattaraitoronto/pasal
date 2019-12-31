export function getYear(containerId) {
    let copyRightYearContainer = document.getElementById(containerId)
    let year = new Date().getFullYear()
    copyRightYearContainer.innerHTML = year
}

