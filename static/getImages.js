$(document).ready(async function() { 
    try {
        const images = await getImages()
        const imagesContainer = document.getElementById('slickSlider')
        images.data.forEach(image => {
            imagesContainer.innerHTML += '<img src="' + image.url + '">';
        })
    } catch (e) {
        console.log(e);
    }
    
    initializeSlider(
        '#slickSlider',
        {
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,            
        }
    )
})

function getImages() {
    return fetch('http://localhost:8080/images')
        .then(response => response.json())
        .then(data => data)
        .catch(e => {
            console.log(e)
        })
}

function initializeSlider(selector, options) {
    $(selector).slick(options);
}