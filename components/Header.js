// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(){

    // Create Elements
    const head = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    // Add attributes
    head.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    
    // Add text info
    date.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    temp.textContent = '98&deg'

    // Append to header
    head.appendChild(date)
    head.appendChild(title)
    head.appendChild(temp)

    return head
}

const headContainer = document.querySelector('.header-container')
headContainer.appendChild(Header())
