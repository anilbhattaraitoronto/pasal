import { displaySections } from "./displaySections.mjs"

export function navigateSections(navId, sectionClass, linkClass, activeClass) {
    let navbar = document.getElementById(navId)
    let links = Array.from(document.getElementsByClassName(linkClass))
    navbar.addEventListener('click', (event) => {
        let targetItem = event.target
        let targetIndex = links.indexOf(targetItem)
        if (targetIndex !== -1) {
            displaySections(sectionClass, linkClass, activeClass, targetIndex)
        }
    })

}