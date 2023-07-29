let count = 0;
let displayBoard = $('h1');

$('.increment').click(()=>{
   count = count + 1;
   updateDisplay();
   checkColor();
})

$('.decrement').click(()=>{
    count--;
    updateDisplay();
    checkColor();
   
 })

$('.reset').on('click', ()=>{
    count = 0;
   updateDisplay();
   checkColor();
 })

 const updateDisplay = () => {
   displayBoard.text(count)
 }

 const checkColor = () => {
   if (count<-9) {
      displayBoard.html( '<em>-9+</em>' )
   } else if (count>9) {
      displayBoard.html('9+')
   }else if(count<0) {
      displayBoard.css('color', 'red')
    } else if (count == 0) {
      displayBoard.css('color', 'black')
    } else {
      displayBoard.css('color', 'green')
    }
 }