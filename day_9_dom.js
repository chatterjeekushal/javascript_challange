

// change content

let change_content_btn=document.querySelector(".change_content_btn");

let change_content=document.querySelector(".change_content");

change_content_btn.addEventListener("click",function(){

    change_content.textContent="helloo change xcontent"
})


// add ao remove class

change_content_btn.addEventListener("click",function(){


    change_content.classList.add("bg-red");
    change_content.classList.remove("bg-blue");

})



// creating new element

change_content_btn.addEventListener("click",function(){

    let creatediv=document.createElement("div")

    creatediv.textContent="hello world"

    document.body.appendChild(creatediv)
})

// remove element

change_content_btn.addEventListener("click",function(){

    let remove_element=document.querySelector(".remove_element")

    remove_element.remove()
})

// changing style

change_content_btn.addEventListener("click",function(){

    document.body.style.backgroundColor="red";
})


//  Reading/Setting Attributes

let img_data=document.getElementById("img_data")

change_content_btn.addEventListener("click",function(){
    

    let get=img_data.getAttribute("src")

    console.log(get);
    

    img_data.setAttribute("alt","how to get")

})

//Handling Form Inputs

change_content_btn.addEventListener("click",function(){

    let input=document.querySelector('input[name="username"]')

    let value=input.value;

    console.log(value);

    input.value="from data"
    

})