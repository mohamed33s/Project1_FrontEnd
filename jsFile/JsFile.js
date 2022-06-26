// This function makes registering 
function signUp() {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let UserData = {
    username: userName,
    password: password,
  };

  if (userName == "" || password == "") {
    alert("الرجاء ادخال بيانات التسجيل");
  } else {
    let Users = JSON.parse(localStorage.getItem("Users"));
    if (Users == null) {
      let NewArray = [UserData];
      localStorage.setItem("Users", JSON.stringify(NewArray));
    } else {
      Users.push(UserData);
      localStorage.setItem("Users", JSON.stringify(Users));
    }
    window.location.href = "index.html";
  }
}

// This function makes login
function logIn() {
  username = document.getElementById("loginUserName").value;
  password = document.getElementById("loginPassword").value;

  let Users = JSON.parse(localStorage.getItem("Users"));

  let user;

  if (username == "" || password == "") {
    alert("الرجاء ادخال بيانات الدخول");
  } else {
    if (Users != null) {
      user = Users.find(
        (user) => user.username == username && user.password == password
      );

      if (user != undefined) {
        window.location.href = "content.html";
      } else {
        alert("الرجاء ارخال بيانات صحيحة");
      }
    } else {
      alert("المستخدم غير مسجل");
    }
  }
}

//This function changes the color of the page
function colorPage() {
  let colorPage = document.querySelector("body");
  colorPage.style.background = "#7c6046";
}

//This function enlarges the page
function zoomIn() {
  var Page = document.querySelector("body");

  Page.style.zoom = +150 + "%";
}

//This function makes the page smaller
function zoomOut() {
  var Page = document.querySelector("body");

  Page.style.zoom = 100 + "%";
}
