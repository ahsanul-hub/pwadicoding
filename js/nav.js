// import api from './api.js'


// document.addEventListener("DOMContentLoaded", function() {
//     // Activate sidebar nav
//     var elems = document.querySelectorAll(".sidenav");
//     M.Sidenav.init(elems);
//     loadNav();
   
//     function loadNav() {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status != 200) return;
   
//           // Muat daftar tautan menu
//           document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
//             elm.innerHTML = xhttp.responseText;
//           });

//            // Daftarkan event listener untuk setiap tautan menu
//           document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
//             elm.addEventListener("click", function(event) {
//               // Tutup sidenav
//               var sidenav = document.querySelector(".sidenav");
//               M.Sidenav.getInstance(sidenav).close();
    
//               // Muat konten halaman yang dipanggil
//               page = event.target.getAttribute("href").substr(1);
//               loadPage(page);
//             });
//           });
//         }
//       };
//       xhttp.open("GET", "nav.html", true);
//       xhttp.send();
//     }

//     // Load page content
//         var page = window.location.hash.substr(1);
//         if (page == "") page = "home";
//         loadPage(page);
        
//         function loadPage(page) {
//           var xhttp = new XMLHttpRequest();
//           xhttp.onreadystatechange = function() {
//             if (this.readyState == 4) {
//               var content = document.querySelector("#body-content");
//               if (this.status == 200) {
//                 content.innerHTML = xhttp.responseText;
//               } else if (this.status == 404) {
//                 content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
//               } else {
//                 content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
//               }
//             }
//           };
//           xhttp.open("GET", "pages/" + page + ".html", true);
//           xhttp.send();
//         }
//   });

//   const loadPage = (path = 'home') => {
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState == 4){
//             let element = document.querySelector('#body-content')
//             if(xhr.status == 200){
//                 element.innerHTML = xhr.responseText
//                 if(path === 'home'){
//                     //feth Standings
//                     api.getStandings(2021)
//                 }
//                 if(path === 'bookmark'){
//                     //fetch Bookmark Team
//                     listener.getAllTeam()

//                     //register listener
//                     window.deleteBookmarkTeam = listener.deleteBookmarkTeam
//                 }
//                 if(path === 'teams'){
//                     //fetch Teams
//                     api.getTeams(2021)
//                     //register listener
//                     window.addBookmarkTeam = listener.addBookmarkTeam
//                 }
                
//             }else if(xhr.status == 404){
//                 element.innerHTML = "<h1>Halaman Tidak Ditemukan</h1>"
//             }else{
//                 element.innerHTML = "<h1>Maaf. halaman tidak dapat di akses!</h1>"
//             }
//         }
//     }
//     xhr.open('GET',`/pages/${path}.html`,true)
//     xhr.send()
// }

  
document.addEventListener("DOMContentLoaded", function () {
  // Activate sidebar nav
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  loadNav();

  function loadNav() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4) {
              if (this.status !== 200) return;

              // Muat daftar tautan menu
              document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
                  elm.innerHTML = xhttp.responseText;
              });

              // Daftarkan event listener untuk setiap tautan menu
              document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
                  elm.addEventListener("click", function(event) {
                      // Tutup sidenav
                      var sidenav = document.querySelector(".sidenav");
                      M.Sidenav.getInstance(sidenav).close();

                      // Muat konten halaman yang dipanggil
                      page = event.target.getAttribute("href").substr(1);
                      loadPage(page);
                  });
              });
          }
      };
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
  }

  // Load pages content
  var page = window.location.hash.substr(1);
  if (page === "") page = "standing";
  loadPage(page);

  function loadPage(page) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState === 4) {
              var content = document.querySelector("#body-content");
              if (this.status === 200) {
                  content.innerHTML = xhttp.responseText;
                if (page == 'home') {
                    getAllTeams();
                }
                if (page === 'standing') {
                    getAllStandings();
                }
              } 
              else if (this.status === 404) {
                  content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
              } else {
                  content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
              }
          }
      };
      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();
  }
})


