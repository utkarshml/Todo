let title = document.getElementById("floatingInputValue");
let text = document.getElementById("floatingTextarea2");
let todobody = document.getElementById("todo-body");
let save = document.getElementById("save");
let formbody = document.getElementById('form-body')
save.addEventListener("click", () => {
    if(title.value === "" || text.value === "" || title.value === "invalid" || title.text === "invalid"){
     div = document.createElement('div')
     div.className = 'container alert'
     div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
     Enter Valid Value
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`
     formbody.append(div)
     }
    
    else{
  localStorage.setItem(title.value, text.value);
  div = document.createElement("div");
  div.className = "my-3";
  div.innerHTML = `<h1 class="title">${title.value}</h1>
<p class="para">${text.value}</p>
<button  class="btn delete-btn bg-danger" type="submit">delete</button>`;
  todobody.append(div);
  title.value = "";
  text.value = "";
  location.reload()
}
});

for (let i = 0; i < localStorage.length; i++) {
  div = document.createElement("div");
  div.className = "my-3";
  div.innerHTML = `<h1 class="title">${localStorage.key(i)}</h1>
<p class="para">${localStorage[localStorage.key(i)]}</p>
<button  class="btn delete-btn bg-danger" type="submit">delete</button>`;
  todobody.append(div);
}
let btn = document.querySelectorAll(".delete-btn");
btn.forEach((e) => {
  e.addEventListener("click", () => {
  localStorage.removeItem(e.parentElement.firstChild.innerHTML)
  e.parentElement.remove()
  });
});
