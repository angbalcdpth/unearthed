
const renderGifts = async () => {
  const mainContent = document.getElementById('main-content')

  try {
    const response = await fetch('/gifts')

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    const data = await response.json()

    if (data && data.length) {
      data.map(gift => {
        const card = document.createElement('div')
        card.className = 'card'

        const topContainer = document.createElement('div')
        topContainer.className = 'top-container'
        topContainer.style.backgroundImage = `url(${gift.image})`

        const bottomContainer = document.createElement('div')
        bottomContainer.className = 'bottom-container'

        const name = document.createElement('h3')
        name.textContent = gift.name
        bottomContainer.appendChild(name)

        const price = document.createElement('p')
        price.textContent = `Price: ${gift.pricePoint}`
        bottomContainer.appendChild(price)

        const audience = document.createElement('p')
        audience.textContent = `For: ${gift.audience}`
        bottomContainer.appendChild(audience)

        const readMore = document.createElement('a')
        readMore.textContent = 'Read More >'
        readMore.href = `/gifts/${gift.id}`
        readMore.role = 'button'
        bottomContainer.appendChild(readMore)

        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
        mainContent.appendChild(card)
      })
    } else {
      const card = document.createElement('div')
      const msg = document.createElement('h2')
      msg.textContent = 'No Gifts Available 😞'
      mainContent.appendChild(msg)
    }
  } catch (error) {
    const msg = document.createElement('h2')
    msg.textContent = 'Could not load gifts. Make sure the API server is running on port 3001.'
    mainContent.appendChild(msg)
  }
}

const currentPath = window.location.pathname
const isHome = currentPath === '/' || currentPath === '/index.html'

if (!isHome) {
  window.location.href = '/404.html'
} else {
  renderGifts()
}