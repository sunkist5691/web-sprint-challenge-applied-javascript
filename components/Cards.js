// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {

        // fetch articles from each topics
        const bootStrap = []
        const javascript = []
        const jquery = []
        const node = []
        const technology = []

        response.data.articles.bootstrap.forEach( each => {
            bootStrap.push(each)
        })
        
        response.data.articles.javascript.forEach( each => {
            javascript.push(each)
        })
        
        response.data.articles.jquery.forEach( each => {
            jquery.push(each)
        })
        
        response.data.articles.node.forEach( each => {
            node.push(each)
        })
        
        response.data.articles.technology.forEach( each => {
            technology.push(each)
        })

        //Append info to '.card-container' (for stretch goal: ADDED one more arguments to filter the specific cards)
        bootStrap.forEach( info => {
            cardsContainer.appendChild(CreateArticle(info, 'bootstrap'))
        })

        javascript.forEach( info => {
            cardsContainer.appendChild(CreateArticle(info, 'javascript'))
        })

        jquery.forEach( info => {
            cardsContainer.appendChild(CreateArticle(info, 'jquery'))
        })

        node.forEach( info => {
            cardsContainer.appendChild(CreateArticle(info, 'node'))
        })

        technology.forEach( info => {
            cardsContainer.appendChild(CreateArticle(info, 'technology'))
        })

        const bs = Array.from(document.querySelectorAll('.bootstrap'))
        const js = Array.from(document.querySelectorAll('.javascript'))
        const jq = Array.from(document.querySelectorAll('.jquery'))
        const nd = Array.from(document.querySelectorAll('.node'))
        const tn = Array.from(document.querySelectorAll('.technology'))

        const noBS = js.concat(jq, nd, tn)
        const noJS = bs.concat(jq, nd, tn)
        const noJQ = bs.concat(js, nd, tn)
        const noND = bs.concat(js, jq, tn)
        const noTN = bs.concat(js, jq, nd)

        
        // Filtering when we click 'topic tabs'
        document.addEventListener('click', e => {
            if(e.target.textContent === 'bootstrap'){
                noBS.forEach(element => {
                    if(!element.classList.contains('hide')){
                        element.classList.add('hide')
                    }
                })
                bs.forEach(element => {
                    element.classList.remove('hide')
                })

            } else if(e.target.textContent === 'javascript'){
                noJS.forEach(element => {
                    if(!element.classList.contains('hide')){
                        element.classList.add('hide')
                    }
                })
                js.forEach(element => {
                    element.classList.remove('hide')
                })
            } else if(e.target.textContent === 'jquery'){
                noJQ.forEach(element => {
                    if(!element.classList.contains('hide')){
                        element.classList.add('hide')
                    }
                })
                jq.forEach(element => {
                    element.classList.remove('hide')
                })
            } else if(e.target.textContent === 'node.js'){
                noND.forEach(element => {
                    if(!element.classList.contains('hide')){
                        element.classList.add('hide')
                    }
                })
                nd.forEach(element => {
                    element.classList.remove('hide')
                })
            } else if(e.target.textContent === 'technology'){
                noTN.forEach(element => {
                    if(!element.classList.contains('hide')){
                        element.classList.add('hide')
                    }
                })
                tn.forEach(element => {
                    element.classList.remove('hide')
                })
            }
        })
    })
    .catch(error => {
        console.log('Error: ', error)
    })

const cardsContainer = document.querySelector('.cards-container')

function CreateArticle(data, addClass){ // Added one more arguments for stretch goal

    //Create Elements
    const cardInfo = document.createElement('div')
    const headLine = document.createElement('div')
    const authorInfo = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgAuthor = document.createElement('img')
    const nameAuthor = document.createElement('span')

    //Add attributes
    cardInfo.classList.add('card', addClass)
    headLine.classList.add('headline')
    authorInfo.classList.add('author')
    imgContainer.classList.add('img-container')
    
    //ADD info
    headLine.textContent = data.headline
    imgAuthor.src = data.authorPhoto
    nameAuthor.textContent = data.authorName

    //Appending
    imgContainer.appendChild(imgAuthor)
    authorInfo.appendChild(imgContainer)
    authorInfo.appendChild(nameAuthor)
    cardInfo.appendChild(headLine)
    cardInfo.appendChild(authorInfo)

    //Add eventListener
    cardInfo.addEventListener('click', () => {
        console.log(headLine.textContent)
    })

    return cardInfo
}