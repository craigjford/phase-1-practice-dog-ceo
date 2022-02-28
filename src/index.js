//console.log('%c HI', 'color: firebrick')

let breedArr = []; 

document.addEventListener("DOMContentLoaded", () => {

    event.preventDefault();
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetchImages(imgUrl);
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetchBreeds(breedUrl);
})

function chgLiColor(typeDog) {

    let dogValue = document.getElementById(typeDog);
    let dogColor = document.querySelector("#" + typeDog).style.color
    if (dogColor === "") {
        dogColor = "black";
    }
    switch(dogColor) {
        case "black":
            dogValue.style.color = "blue";
            break;   
        case "blue":
            dogValue.style.color = "red";
            break;
         case "red":
            dogValue.style.color = "green";
            break;   
        case "green":
            dogValue.style.color = "orange";
            break;
        case "orange":
            dogValue.style.color = "purple";
            break;   
        case "purple":
            dogValue.style.color = "maroon";;
            break;
        default:
            window.alert('How about picking on another Li');    
    }
    
}

function removeAllLiChildren() {

    let children = document.querySelectorAll('li');
    let arrayNum = children.length - 1;

    while (arrayNum >= 0) {
        children[arrayNum].remove();
        arrayNum = arrayNum - 1;       
    }  
}

function doStartsWith(optSelect) {   
    removeAllLiChildren();
    let filterBreedArr = [];

    if (optSelect === 'z'){
         filterBreedArr = breedArr;
    } else {
         filterBreedArr = breedArr.filter(breed => breed.startsWith(optSelect));
    }

    let container = document.getElementById("dog-breeds");
    for (let i = 0; i < filterBreedArr.length; i++) { 
        let liDog = document.createElement("li");
        liDog.textContent = filterBreedArr[i];
        liDog.setAttribute('id', liDog.textContent);
        container.appendChild(liDog);
    }
}

function buildLi(breedObj) {

    //console.log('breedObj = ', breedObj);
    let getUL = document.getElementById("dog-breeds")

    for (key in breedObj) { 
         let liDog = document.createElement("li");
         liDog.setAttribute('id', key);
         liDog.textContent = key;
         breedArr.push(key);
         getUL.appendChild(liDog);
     } 
}

function handleError(err) {
    console.log('error = ' + err);    
}


  const inSelect = document.getElementById('breed-dropdown');
  inSelect.addEventListener('change', (event) => {
    let optValue = inSelect.value;
    doStartsWith(optValue);
  }) 

  const dogSelect = document.getElementById('dog-breeds');
  dogSelect.addEventListener('click', (event) => {
    let dogValue = event.target.textContent;
    chgLiColor(dogValue);
  })  



function fetchImages(imgUrl) {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => { 
        console.log(`data = ${data}`)
        const picArr = data.message
        let getImgDiv = document.getElementById("dog-image-container")

        for (let i = 0; i < picArr.length; i++) {
            let imgStr = picArr[i]; 
            let imgDog = document.createElement("img");
            imgDog.setAttribute('src', imgStr);
            imgDog.setAttribute('alt', 'happy dog ' + parseInt(i));
            imgDog.setAttribute('width', "300");
            imgDog.setAttribute("height", "300")
            getImgDiv.appendChild(imgDog);
        }
    })
    .catch(function (error) {
        handleError(error)
    })
}

function fetchBreeds(breedUrl) {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        console.log(`data = ${data}`)
        const breedObj = data.message
        buildLi(breedObj);
    })
}