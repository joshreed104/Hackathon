//document.addEventListener('DOMContentLoaded', ()=>{
    console.log('!');
    const newDiv = document.createElement('div');
    document.querySelector('body').appendChild(newDiv);
    const dogPic = document.createElement('img');
    dogPic.setAttribute('id', 'dogPic');
    dogPic.style.backgroundImage = 'url("../frame.png")';
    dogPic.style.backgroundRepeat = 'no-repeat'
    dogPic.style.backgroundSize = 'cover'
    dogPic.style.display = 'block';
    dogPic.style.marginLeft = 'auto';
    dogPic.style.marginRight = 'auto';
    dogPic.style.marginTop = '100px'
    dogPic.style.maxHeight = '700px'
    dogPic.style.maxWidth = '700px'
    dogPic.style.border = '5px groove grey';
    dogPic.style.padding = '20px';
    dogPic.style.imag = 'auto';
    newDiv.appendChild(dogPic);
    // chrome.runtime.sendMessage('loaded', function(link){
    //     dogPic.src = link;
    // })
    document.querySelector('body').insertAdjacentElement("beforebegin", newDiv);

        const result = fetch('https://dog.ceo/api/breeds/image/random'
        // method: "GET",
        // withCredentials: true,
        // headers: {
        //     'X-RapidAPI-Key': '3a0459353amsh5d58f0cb91c5ebep144016jsn2e9b23ae44f3',
        //     'X-RapidAPI-Host': 'dog-api.p.rapidapi.com',
        //     'Content-Type': 'application/json'
        // }
    )
        .then((data) => data.json())
        .then((data) => {
            // do stuff with data
            console.log(data);
            // dogPic.setAttribute('src', `${data.message}`);
            dogPic.src = `${data.message}`;
            // let allImages = document.getElementsByTagName('img');
            // allImages[0].src = `${data.message}`;
        });
//});

document.querySelector('body').insertAdjacentElement("beforebegin", newDiv);

// const newHeader = document.createElement('h1');
// newHeader.innerText = "Hello?";
// const website = document.querySelector('body');
// website.appendChild(newHeader);
// chrome.runtime.sendMessage('loaded', function(link){
//     dogPic.src = link;
// })
// website.appendChild(newDiv);