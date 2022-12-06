var cl = console.log;

// Gallery using forEach loop
var imgArray = [
    "https://source.unsplash.com/random/?nature",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?people",
    "https://source.unsplash.com/random/?fashion&beauty",
    "https://source.unsplash.com/random/?food&drink",
    "https://source.unsplash.com/random/?athletics",
    "https://source.unsplash.com/random/?science",
    "https://source.unsplash.com/random/?robot",
    "https://source.unsplash.com/random/?javascript",
    "https://source.unsplash.com/random/?html",
    "https://source.unsplash.com/random/?angular",
    "https://source.unsplash.com/random/?cricket",
];

var imgGallery= document.getElementById("imgGallery");

var im =" ";
imgArray.forEach(function(img){
    im += `
    <div class="col-4 mt-5 mb-4">
    <div class="card mythumbnail">
        <div class="card-body">
            <img src="${img}">
        </div>
    </div>
</div>
    `
});
imgGallery.innerHTML = im;