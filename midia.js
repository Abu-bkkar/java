
// JavaSxript DOM document object model

const body = document.getElementById(`body`);
const button = document.querySelectorAll(`li`);


// const redColor = document.querySelector(`.red`);
// redColor.addEventListener(`click`,function(){
//     body.style.backgroundColor= `#e74c3c`
// })

button.forEach(function(value){
    value.addEventListener(`click`,function(){
        let className = this.classList[0];
        let color = ``;

        if(className===`red`){  
            color = `#e74c3c`;
        }
        if(className===`green`){  
            color = `#16a085`;
        }
        if(className===`blue`){  
            color = `#2ecc71`;
        }
        if(className===`purple`){  
            color = `#ff81be`;
        }
        if(className===`pink`){  
            color = `#e84393`;
        }

        body.style.backgroundColor=color;
        
    })
});

        console.log(className);
        console.log(color)
button.forEach(function(orginl){
    orginl.addEventListener(`click`,function(){
        let allName = this.classList[0];
        colore = ``;

        if(allName === `red`){
            colore = `#e74c3c`;
        }
        if(allName === `green`){
            colore = `#16a085`;
        }
        if(allName === `blue`){
            colore = `#2ecc71`;
        }
        if(allName === `pink`){
            colore = `#e84393`;
        }
        if(allName === `purple`){
            colore = `#ff81be`;
        }
        console.log(colore)
        body.style.backgroundColor=colore;
    })
});



// button.forEach((rolle)=>{
//     rolle.addEventListener(`click`,function(){
//         let sovName=this.classList[0]
//         colorAll = ``;
//             if(sovName === `red`){
//             colorAll = `#e74c3c`;
//         }
//          if(sovName === `green`){
//             colorAll = `#16a085`;
//         }
//         if(sovName === `blue`){
//             colorAll = `#2ecc71`;
//         }
//         if(sovName === `pink`){
//             colorAll = `#e84393`;
//         }
//         if(sovName === `purple`){
//             colorAll= `#ff81be`;
//         }
        

//         console.log(sovName)
//         console.log(colorAll)
//         body.style.backgroundColor=colorAll;
//     })
// });