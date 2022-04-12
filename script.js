
// let input=document.querySelector("inputElement");

// input.addEventListener("keyup", function(event) {
    
//     if (event.keyCode === 13) {
//         let sen=` <span class="tag">
{/* <span class="tag-editor-tag">${input.value}</span>
<span class="tag-editor-delete del"><i class="fa-solid fa-x xmark"></i></span> */}
// </span> 
// <input class="inputElement" type="text">`
//         tagEditor.innerHTML+=sen;
//     }
//     let tagName=document.querySelector(".tag")
//     let xmark=document.querySelector("xmark")
    
// let tagEditor=document.querySelector(".tag-editor");   
//     xmark.addEventListener("click",()=>{
//         tagName.remove();
//     })
//   });
let array=[];
let count=0;
let stat=true;
let tmp;
let input=document.querySelector(".inputElement");
input.addEventListener("keypress",(e)=>{
   
    if(e.key==="Enter"){
        array.forEach(element=>{
            if(element.innerText == input.value)
            {
                console.log(element.innerText)
                stat=false;
                tmp=element;
            }
        });
        if(input.value!="" && stat){
            let element = document.createElement("span");
            element.classList.add("tag");
            element.innerText=input.value;
            element.innerHTML+=`<i class="fa-solid fa-x xmark" onclick="deleteElement(${count})"></i></span>`;
            input.parentNode.insertBefore(element,input);
            input.value="";
            count++;
            array.push(element);
        }
        else if(!stat){
            array.slice(array.indexOf(tmp),1);
            tmp.remove();
            input.parentNode.insertBefore(tmp,input);
            array.push(tmp);
            input.value="";
        }
        
      
    }
})

function deleteElement(index){
array[index].remove();
array.slice(index,1);
}