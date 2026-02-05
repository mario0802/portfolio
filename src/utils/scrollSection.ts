export const scrollToSection = (id: string, offset = 64): void => {
    const element = document.getElementById(id)
    if (!element) return

    const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset

    window.scrollTo({
        top: y,
        behavior: "smooth",
    })
}
