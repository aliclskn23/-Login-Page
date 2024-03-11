function login (){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username === "admin" && password === "password"){
    document.getElementById("errorMessage").innerText = "";
    alert("Başarılı Giriş");
    window.location.href = "index.html"
  } else{
    document.getElementById("errorMessage").innerText = "Kullanıcı adı veya şifre hatalı"
  };
}
