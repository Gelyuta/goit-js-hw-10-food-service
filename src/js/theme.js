
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const inputEl = document.querySelector('#theme-switch-toggle')
inputEl.addEventListener('change', onThemeSwich)
console.log(inputEl)

const body =document.querySelector('body')
console.log(body)

  function onThemeSwich(){
  
 if (inputEl.checked === true){
  document.body.classList.add(Theme.DARK) 
} else {
  document.body.classList.remove(Theme.DARK)
  document.body.classList.add(Theme.LIGHT) 
}
 } 

 