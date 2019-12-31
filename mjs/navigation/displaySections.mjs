export function displaySections(sectionClass, linkClass, activeClass, index = 0) {
    let sections = Array.from(document.getElementsByClassName(sectionClass))
    let links = Array.from(document.getElementsByClassName(linkClass))

    sections.forEach(section => {
        section.style.display = "none"
    })
    links.forEach(link => {
        link.classList.remove(activeClass)
    })
    sections[index].style.display = "block"
    links[index].classList.add(activeClass)

}