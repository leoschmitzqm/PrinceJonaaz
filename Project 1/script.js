darkBtn.addEventListener('click', () => {
	console.log('Click event has fired!')
	message.textContent = 'This is dark mode.'
	body.style.background = 'black'
	message.style.color = 'chartreuse'
  })
  
  const changeToLight = () => {
	message.textContent = 'This is light mode.'
	body.style.background = 'white'
	message.style.color = 'black'
  }
  

  lightBtn.addEventListener('click', changeToLight)