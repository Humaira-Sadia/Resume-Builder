const ul = document.querySelector("#taglist");
input = ul.querySelector("input");
count = document.querySelector(".details span");
tagsList = document.querySelector(".tags-list")

let tags = [];

countTag();

input.addEventListener("keyup", addTag);

function addTag(e) {
  // to add tags in the input field.
  if (e.key == "Enter") {
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      if (tags.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
          isTagEmpty();
        });
      }
    }
    e.target.value = "";
  }
}

function createTag() {
  // create new list (li) for tag
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tagsList.querySelectorAll(".tag-list-item").forEach((tag)=>tag.remove());
  tags.slice().reverse().forEach((tag) => {
      let liTag = `<li>${tag} <i class="bi bi-x" onclick="remove(this, '${tag}')"></i></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
      let tagListItem = `<span class="tag-list-item">${tag}</span>`
      tagsList.insertAdjacentHTML("afterbegin", tagListItem);
    });
  input.focus();
  countTag();
}



function remove(e, tag) {
  // remove tag which is selected
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  e.parentElement.remove();
  countTag();
}

function countTag() {
  //no of tags remaining.
  // input.focus();
  if (tags.length > 0) input.placeholder = "";
  if (10 - tags.length >= 0) count.innerText = 10 - tags.length;
}


const removeBtn = document.querySelector(".bi-trash"); // delete the entire (array) tags.
removeBtn.addEventListener("click", () => {
  while (tags.length) {
    tags.pop();
    ul.querySelectorAll("li").forEach((li) => li.remove());
  }
  countTag();
});

//Reset the data/elements of form...
function reset() {
  document.getElementById("form").reset();
}

function isTagEmpty(){
    tagsPreview = document.querySelector("#tags-preview");
    tagsPreviewSample =
    `<div id="tags-preview">
     <span class="tag-list-item">Java</span>
     <span class="tag-list-item">Python</span>
     <span class="tag-list-item">Javascript</span>
     <span class="tag-list-item">C++</span>
     <span class="tag-list-item">React.js</span>
     <span class="tag-list-item">MongoDB</span>
     <span class="tag-list-item">Node.js</span>
     <span class="tag-list-item">Rust</span>
     <span class="tag-list-item">HTML3/CSS</span>
     </div>`;

    if (tags.length==0){
        tagsList.insertAdjacentHTML("afterbegin",tagsPreviewSample);
    }
    else {
        tagsPreview.remove();
    }
}



