
const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// Left side - logo and title
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const logo = document.createElement('img')
logo.src = '/logo.png'
logo.alt = 'UnEarthed Logo'
logo.className = 'header-logo'

const title = document.createElement('h1')
title.textContent = 'UnEarthed'

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

// Right side - home button
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

// Assemble header
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)