document.addEventListener('DOMContentLoaded', () => {
    let tcard = document.querySelectorAll('.card')
    let search = document.querySelector('#search-game');
    
    search.addEventListener('input',(e)=>{
        let value = e.target.value.toLowerCase().trim();
        tcard.forEach((cards)=>{
             let name = cards.querySelector('h2').innerText.toLowerCase();
             if(name.includes(value)){
                cards.classList.remove('hide');
             }
             else {
                cards.classList.add('hide');
            }
            
        });
    });
    
    
    //navbar
    let menu = document.querySelector('.menu')
     
     //navbar
     menu.addEventListener('click',()=>{
         let menu = document.getElementById('menu');
         let closeButton = document.querySelector('.close-button');
     
         menu.classList.toggle('opacity-100');
         menu.classList.toggle('top-0');
         menu.classList.toggle('-top-[400px]');
         
         // Delay showing the close button
         setTimeout(function() {
             closeButton.style.display = 'block';
         }, 500);
     })
     let closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click',()=>{
     let menu = document.getElementById('menu');
     menu.classList.remove('opacity-100');
     menu.classList.remove('top-0');
     menu.classList.add('-top-[400px]');
     
     // Hide close button
     closeButton.style.display = closeButton.style.display === 'block' ? 'none' : 'block';
 
  })
     



    tcard.forEach((card)=>{
        card.addEventListener('click', () => {
            location.href = 'tournament_inner_page.html';
        });
    })
    let item = localStorage.getItem('username')
    let btn= document.querySelector('.rbtn')
    let para= document.querySelector('.para')
    console.log("Value of 'item' from localStorage:", item);

    if(item!==null){
      para.classList.add('hide');
      btn.classList.remove('hide')
    }
    else{
        btn.classList.add('hide')
        para.classList.remove('hide')
    }

});
