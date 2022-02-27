//console.log('%c HI', 'color: firebrick')

const breedArr = [];

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded is completed');
    event.preventDefault();
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetchImages(imgUrl);
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetchBreeds(breedUrl); 
})

function chgLiColor(event) {
    console.log('opt value = ' + optValue);
    console.log(event.textContent)
    console.log(event.target)
    console.log(event.target.style.color)
    console.log('cjf1');
    console.log('cjf2');
    console.log('cjf3');
}

function doStartsWith(optSelect) {
    debugger;
    console.log('opt value = ' + optSelect);
    filterBreedArr = breedArr.filter(breed => breed.startsWith(optSelect))
    //console.log(event);
    //console.log(event.textContent)
    //console.log(event.target)
    //console.log(event.target.style.color)
    console.log('cjf1');
    console.log('cjf2');
    console.log('cjf3');
}

function handleError(err) {
    console.log('error = ' + err);    
}


function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }

  debugger;
  const input = document.querySelector('#breed-dropdown');
  input.addEventListener('change', (event) => {
      //const result = document.querySelector(".result");
      console.log(`result value  = ${result.textContent}`)
      console.log(`event target value = ${event.target.value}`)
      let optValue = event.target.value;
      doStartsWith(optValue);
  }) 

  window.addEventListener("click", event => {
      console.log('event = ')
  }

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
        let getUL = document.getElementById("dog-breeds")

        for (key in breedObj) { 
            let liDog = document.createElement("li");
            liDog.textContent = key;
            breedArr.push(key);
            getUL.appendChild(liDog);
        }
    })
    .catch(function (error) {
        handleError(error)
    })
}