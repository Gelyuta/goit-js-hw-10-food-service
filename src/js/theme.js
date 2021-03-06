// Темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Получаю доступ к переключателю
const inputEl = document.querySelector('#theme-switch-toggle')

// Вешаю слушатель событий на инпут
inputEl.addEventListener('change', onThemeSwich)
// console.log(inputEl)

const body =document.querySelector('body')
console.log(body)


// Переключение темы со светлой на темную и наоборот
function onThemeSwich(){

if (inputEl.checked === true){
  document.body.classList.remove(Theme.LIGHT);
  document.body.classList.add(Theme.DARK);

  localStorage.setItem('current-theme', Theme.DARK);
} else {
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);

  localStorage.setItem('current-theme', Theme.LIGHT);
  
  }
} 

// Текущая тема

function onCurrentTheme() {

    const currentTheme = localStorage.getItem('current-theme');
  
    if(currentTheme === Theme.DARK){
        document.body.classList.add(Theme.DARK);
        localStorage.setItem('current-theme', Theme.DARK);
        inputEl.checked = true
       
  
    } else {
       document.body.classList.add(Theme.LIGHT);
       localStorage.setItem('current-theme', Theme.LIGHT);
      
    }
  }

onCurrentTheme()
  

   