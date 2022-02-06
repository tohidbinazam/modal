// get all elements
const main_btn = document.getElementById('main_btn');
const tohi_modal = document.querySelector('.tohi_modal');
const modal_content = document.querySelector('.modal_content');
const close_btn = document.querySelector('.modal_header button');
const tohi_alert = document.querySelector('.tohi_alert'); 
const tohi_alert_closes = document.querySelector('.alert_header button');
const editing = document.getElementById('editing');
const discard = document.getElementById('discard');


main_btn.addEventListener('click', function(e){
    e.preventDefault();

    tohi_modal.classList.add('active');
    modal_content.classList.add('active');
})

// close_btn.addEventListener('click', function(){

//     tohi_modal.classList.remove('active');
//     modal_content.classList.remove('active');
// })
tohi_alert.addEventListener('click', function(e){

    if(e.target == this){
        tohi_alert.style.display = 'none'
        // this.classList.remove('active');
        // modal_content.classList.remove('active');
    }else{

    }
})

close_btn.addEventListener('click', function(){

    tohi_alert.style.display = 'flex'
})

tohi_alert_closes.addEventListener('click', function(){
    
    tohi_alert.style.display = 'none'
})

editing.addEventListener('click', function(){
    
    tohi_alert.style.display = 'none'
})

discard.addEventListener('click', function(){

    tohi_alert.style.display = 'none'
    tohi_modal.classList.remove('active');
    modal_content.classList.remove('active');
})


// accordion get item
const accordion_head = document.querySelectorAll('.accordion_head');

accordion_head.forEach(item => {

    item.addEventListener('click', function(){

        accordion_head.forEach(data => {
            if( data != this){
                data.classList.remove('active');
                data.nextElementSibling.style.height = '0px'
            }
            
        })

        item.classList.toggle('active');
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
        }else{
            item.nextElementSibling.style.height = '0px'
        }
    })
});
