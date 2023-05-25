
function filterContent(){ // в этот параметр будет передана ФУНКЦИЯ парсинга пользовательского ввода
  
   let elements = document.getElementsByClassName('video-container');
 
   for (let i = 0; i <= elements.length; i++ ){
       let videoText = elements[i].querySelector("h3").innerText;
       if(!videoText.toLowerCase().includes(inputParseFunction() /*Переданная функция вызвана*/  .toLowerCase())){
           elements[i].style.display = 'none';
       } else {
           elements[i].style.display = 'inline-block';
       }
   }
}

