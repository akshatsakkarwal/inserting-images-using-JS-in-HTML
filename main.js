let img = [
    {
        "image1": "img1",
        "url": "images/pexels-abhra-ghosh-16152405.jpg"
    },
    {
        "image1": "img2",
        "url": "images/pexels-duren-williams-10682514.jpg"
    },
    {
        "image1": "img3",
        "url": "images/pexels-gabii-fernandez-20143941.jpg"
    },
    {
        "image1": "img4",
        "url": "images/pexels-hardeep-singh-17771147.jpg"
    },
    {
        "image1": "img5",
        "url": "images/pexels-keenan-constance-5691359.jpg"
    },
    {
        "image1": "img6",
        "url": "images/pexels-md-tajbid-18486319.jpg"
    },
    {
        "image1": "img7",
        "url": "images/pexels-photo-20498975.jpeg"
    },
    {
        "image1": "img7",
        "url": "images/pexels-ramon-linares-10701026.jpg"
    },
    
]

let container = document.querySelector(".container")

function displayCard() {
    img.forEach(function(obj){
        let img = `<img width="300" src="${obj["url"]}" alt="">`
        container.innerHTML += img
        console.log(img);
    })

}

displayCard()