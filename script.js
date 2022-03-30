const menu = document.getElementById('menu')
const nav = document.querySelector('nav')

menu.onclick = () => {
    nav.classList.toggle('shown')
}

function adjustBg() {
    const body = document.body

    const hero = document.querySelector('.hero')

    const images = document.querySelectorAll('.img img')
    const works = document.querySelectorAll('.container-work')
    const grid = document.querySelectorAll('.grid-container img')

    let path = (body.clientWidth > 770 ? "desktop" : "mobile")

    hero.style.backgroundImage = `url(${(hero.dataset.path).replace(/mobile|desktop/, path)})`

    images.forEach(img => {
        const newImg = img.getAttribute('src').replace(/mobile|desktop/, path)
        img.setAttribute('src', newImg)
    })

    works.forEach(img => {
        const imgPath = (img.dataset.path).replace(/mobile|desktop/, path);
        img.style.backgroundImage = `url(${imgPath})`
    })

    grid.forEach(img => {
        const newImg = img.getAttribute('src').replace(/mobile|desktop/, path)
        img.setAttribute('src', newImg)
    })
}

adjustBg()
window.onresize = adjustBg