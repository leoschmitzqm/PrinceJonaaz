darkBtn.addEventListener('click', () => {
	// check for event fire
	console.log('Click event has fired!')
	// change h1 text
	message.textContent = 'This is dark mode.'
	// change body background to black
	body.style.background = 'black'
	// change body text to chartreuse
	message.style.color = 'chartreuse'
  
  })
  
  const changeToLight = () => {
	message.textContent = 'This is Light Mode.'
	body.style.background = 'white'
	message.style.color = 'black'
  }
  

  lightBtn.addEventListener('click', changeToLight) 