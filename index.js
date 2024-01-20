let btn = document.querySelector("button");
let body = document.querySelector("body");

//form submission
btn.addEventListener("click", () => {
  //shadow
  let shadow = document.createElement("div");
  shadow.classList.add("shadow");
  body.appendChild(shadow);

  //form

  let form = document.createElement("form");
  form.classList.add("form");
  shadow.appendChild(form);

  //Header

  let p = document.createElement("p");
  p.innerHTML = "<h2> Write about yourself:</h2>";
  form.appendChild(p);

  //Inputs

  let inputs = document.createElement("div");
  inputs.classList.add("inputs");
  form.appendChild(inputs);

  //Input1

  let label = document.createElement("label");
  label.innerHTML = "Name:  <span style='color:red; margin-left:3px;'>*</span>";
  inputs.appendChild(label);

  let input1 = document.createElement("div");
  input1.classList.add("input1");
  inputs.appendChild(input1);

  let userIcon = document.createElement("div");
  userIcon.classList.add("user");
  input1.appendChild(userIcon);
  userIcon.innerHTML = "<i class='fa fa-user'></i>";

  let name = document.createElement("input");
  name.classList.add("name");
  input1.appendChild(name);
  name.setAttribute("placeholder", "Your name");
  name.setAttribute("required", "true");
  name.style.textTransform = "capitalize";

  //Input2

  let label2 = document.createElement("label");
  label2.textContent = "Password: ";
  inputs.appendChild(label2);

  let input2 = document.createElement("div");
  input2.classList.add("input1");
  inputs.appendChild(input2);

  let pswrdIcon = document.createElement("div");
  pswrdIcon.classList.add("user");
  input2.appendChild(pswrdIcon);
  pswrdIcon.innerHTML = "<i class='fa fa-lock'></i>";

  let password = document.createElement("input");
  password.classList.add("name");
  input2.appendChild(password);
  password.setAttribute("placeholder", "Create password");
  password.setAttribute("type", "password");

  //Input3

  let label4 = document.createElement("label");
  label4.textContent = "Upload photo:";
  inputs.appendChild(label4);

  let input3 = document.createElement("div");
  input3.classList.add("input3");
  inputs.appendChild(input3);

  let label3 = document.createElement("label");
  label3.innerHTML =
    "<i class='fa fa-picture-o' style='margin-left:15px;margin-right:14px'></i> Choose";
  label3.classList.add("label3");
  label3.setAttribute("for", "getFile");
  input3.appendChild(label3);

  let prImg = document.createElement("img");
  prImg.classList.add("prImg");
  prImg.setAttribute("id", "pr-img");
  inputs.appendChild(prImg);

  let photo = document.createElement("input");
  photo.style.display = "none";
  inputs.appendChild(photo);
  photo.setAttribute("type", "file");
  photo.setAttribute("id", "getFile");
  photo.setAttribute("accept", "image/*");

  photo.addEventListener("change", (e) => {
    preview(e);
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      localStorage.setItem("Photo", reader.result);
    });
 });

 let preview = (e) => {
   let imgFiles = e.target.files;
   let imgFilesLength = imgFiles.length;
   if (imgFilesLength > 0) {
    let imgSrc = URL.createObjectURL(imgFiles[0]);
    let imgEl = document.querySelector("#pr-img");
    imgEl.src = imgSrc;
    imgEl.style.display = "block";
 }
 };

 let allLabels = document.querySelectorAll("label");
  allLabels.forEach((label) => {
    if (label.textContent !== "Choose" && label.textContent !== "Name: *") {
      label.style.marginTop = "12px";
    }
    if (label.textContent !== "Choose") {
      label.style.marginBottom = "5px";
    }
  });

  //X-btn

  let x = document.createElement("btn");
  x.classList.add("x-btn");
  x.innerHTML = "<i class='fa fa-times' ></i>";
  form.appendChild(x);

  x.addEventListener("click", () => {
    body.removeChild(shadow);
  });

  //submit
  let sbt = document.createElement("button");
  sbt.classList.add("sbt");
  sbt.textContent = "Submit";
  form.appendChild(sbt);

  //submission process
  


}
)