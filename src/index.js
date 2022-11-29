console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(res => res.json()) //takes out of json 
 //.then(console.log)
 .then(data => renderDogs(data));

 const renderDogs = (data) => {
    console.log(data.message) // data is an now an array 

    data.message.forEach(dogUrl => {
        const image = document.createElement('img')
        image.src = dogUrl;
        console.log(image) 
        // now to put on the dom; grab the div 
        const container = document.querySelector('#dog-image-container') 
        container.appendChild(image)
    })


}
