
// const API_KEY = "12d909c11f6e43faaf6b24ea020d3b34";
const API_KEY = "e0a4841c03bd425da42f716f65100c46";
const BASE_URL = "https://api.football-data.org/v2/";

const LEAGUE_ID = 2014;

const ENDPOINT_COMPETITION = `${BASE_URL}competitions/${LEAGUE_ID}/standings`;
const ENDPOINT_TEAMS = `${BASE_URL}competitions/${LEAGUE_ID}/teams`;
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}
  

// const fetchAPI = ENDPOINT_COMPETITION => {
//     return fetch(ENDPOINT_COMPETITION, {
//         headers: {
//             'X-Auth-Token': API_KEY
//         }
//     })
//         .then(res => {
//             if (res.status !== 200) {
//                 console.log("Error: " + res.status);
//                 return Promise.reject(new Error(res.statusText))
//             } else {
//                 return Promise.resolve(res)
//             }
//         })
//         .then(res => res.json())
//         .catch(err => {
//             console.log(err)
//         })
// };

// function getAllStandings() {
//     if ("caches" in window) {
//         caches.match(ENDPOINT_COMPETITION).then(function (response) {
//             if (response) {
//                 response.json().then(function (data) {
//                     console.log("Competition Data: " + data);
//                     showStanding(data);
//                 })
//             }
//         })
//     }

//     fetchAPI(ENDPOINT_COMPETITION)
//         .then(data => {
//             showStanding(data);
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }

// function showStanding(data) {
//     let standings = "";
//     let standingElement =  document.getElementById("homeStandings");

//     data.standings[0].table.forEach(function (standing) {
//         standings += `
//                 <tr>
//                     <td>${standing.position}</td>
//                     <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
//                     <td>${standing.team.name}</td>
//                     <td>${standing.playedGames}</td>
//                     <td>${standing.won}</td>
//                     <td>${standing.draw}</td>
//                     <td>${standing.lost}</td>
//                     <td>${standing.points}</td>
//                     <td>${standing.goalsFor}</td>
//                     <td>${standing.goalsAgainst}</td>
//                     <td>${standing.goalDifference}</td>
//                 </tr>
//         `;
//     });

//      standingElement.innerHTML = `
//                 <div class="card" style=" margin-top: 30px;">
//                 <table class="highlight responsive-table centered">
//                     <thead class="blue-grey lighten-3">
//                         <tr class="darken-2 z-depth-1">
//                             <th>Position</th>
//                             <th>Logo</th>
//                             <th>Team Name</th>
//                             <th>Match</th>
//                             <th>W</th>
//                             <th>D</th>
//                             <th>L</th>
//                             <th>P</th>
//                             <th>GF</th>
//                             <th>GA</th>
//                             <th>GD</th>
//                         </tr>
//                      </thead>
//                     <tbody id="standings">
//                         ${standings}
//                     </tbody>
//                 </table>
                
//                 </div>
//     `;
// }




// function getAllTeams() {
//     if ("caches" in window) {
//         caches.match(ENDPOINT_TEAMS).then(function (response) {
//             if (response) {
//                 response.json().then(function (resources) {
//                     console.log("Teams Data: " + resources);
//                     showTeam(resources);
//                 })
//             }
//         })
//     }

//     fetchAPI(ENDPOINT_TEAMS)
//         .then(resources => {
//             showTeam(resources);
//         })
//         .catch(error => {
//             console.log(error)
//         })

    
// }

// function showTeam(resources) {
//     let teams = "";
//     let teamsElement = document.getElementById("teams");

//     resources.teams.forEach(function (team) {
//         teams += `
//             <div class="card hoverable s12 m5">
//                 <div class="card-content ">
//                 <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
//                     <div class="center flow-text">${team.name}</div>
//                     <div class="center">${team.area.name}</div>
//                     <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
//                 </div>
//                 <div class="card-action right-align">
//                     <a class="waves-effect waves-light btn-small teal" id="save"href="./detail.html?id=${team.id}">Detail</a>
//                 </div>
//             </div>    
//         `;
//     });

//     teamsElement.innerHTML = `
//                     ${teams}
//     `;
//     // const item = getTeamsByID();
//     // var save = document.getElementById("save");
//     // save.onclick = function() {
//     // console.log("Tombol FAB di klik.");
//     // item.then((data) => {
//     //     M.toast({ html: `${team.name} Berhasil menambahkan tim ini ke favorit` });
//     //     addFavTeam(data);
//     //   });
//     // }

    
// }

// function getTeamsByID() {
//     return new Promise((resolve, reject) => {
//       // Ambil nilai query parameter (?id=)
//       const urlParams = new URLSearchParams(window.location.search);
//       const idParam = urlParams.get("id");
//       if ("caches" in window) {
//         caches.match(ENDPOINT_TEAMS/idParam).then(function (response) {
//             if (response) {
//                 response.json().then(function (data) {
//                     console.log("Teams Data: " + data);
//                     showTeam(data);
//                 })
//             }
//         })
//     }

//       fetch(ENDPOINT_TEAMS/idParam, {
//         headers: {
//           'X-Auth-Token': API_KEY,
//         },
//       })
//         .then(status)
//         .then(json)
//         .then((data) => {
//           showTeambyId(data);
//             console.log(data);
//           resolve(data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   }

//   function getTeambyId() {
//     var urlParams = new URLSearchParams(window.location.search);
//      var idParam = urlParams.get("id");
//     if ("caches" in window) {
//         caches.match(ENDPOINT_TEAMS).then(function (response) {
//             if (response) {
//                 response.json().then(function (data) {
//                     console.log("Teams Data: " + data);
//                     showTeambyId(data);
//                 })
//             }
//         })
//     }

//     fetchAPI(ENDPOINT_TEAMS/idParam)
//         .then(data => {
//             showTeambyId(data);
//             resolve(data);
//         })
//         .catch(error => {
//             console.log(error)
//         })

    
// }
// function getTeambyId() {
//     // Ambil nilai query parameter (?id=)
//     var urlParams = new URLSearchParams(window.location.search);
//     var idParam = urlParams.get("id");
    
//     fetch(ENDPOINT_TEAMS/idParam)
//       .then(status)
      
//       .then(function(data) {
//         // Objek JavaScript dari response.json() masuk lewat variabel data.
//         console.log(data);
//         // Menyusun komponen card artikel secara dinamis
//         var detailHTML = `
//             <div class="card hoverable s12 m5">
//                 <div class="card-content ">
//                 <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
//                     <div class="center flow-text">${team.name}</div>
//                     <div class="center">${team.area.name}</div>
//                     <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
//                     <div class="center">${team.area.name}</div>
//                 </div>
//                 <div class="card-action right-align">
//                     // <a class="waves-effect waves-light btn-small teal" id="save"href="./detail.html?id=${team.id}">Detail</a>
//                 </div>
//             </div>    
//           `;
//         // Sisipkan komponen card ke dalam elemen dengan id #content
//         document.getElementById("body-content").innerHTML = detailHTML;
//       });
//   }
// function showTeambyId(data) {
    
//     const item = getTeambyId();
//     var save = document.getElementById("save");
//     save.onclick = function() {
//     console.log("Tombol FAB di klik.");
//     item.then((data) => {
//         M.toast({ html: `${team.name} Berhasil menambahkan tim ini ke favorit` });
//         addFavTeam(data);
//       });
//     }

    
// }

//   function getSavedTeams() {
//     getAllTeamFav()
//       .then((data) => {
//         showSavedTeam(data);
//       });
//   }
// function status(response) {
//   if (response.status !== 200) {
//     console.log("Error : " + response.status);
//     // Method reject() akan membuat blok catch terpanggil
//     return Promise.reject(new Error(response.statusText));
//   } else {
//     // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
//     return Promise.resolve(response);
//   }
// }

// // Blok kode untuk memparsing json menjadi array JavaScript
// function json(response) {
//   return response.json();
// }

// // Blok kode untuk meng-handle kesalahan di blok catch
// function error(error) {
//   // Parameter error berasal dari Promise.reject()
//   console.log("Error : " + error);
// }
const fetchAPI = url => {
    return fetch(url, {
        headers: {
            'X-Auth-Token': API_KEY
        }
    })
        .then(res => {
            if (res.status !== 200) {
                console.log("Error: " + res.status);
                return Promise.reject(new Error(res.statusText))
            } else {
                return Promise.resolve(res)
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
};

function getAllStandings() {
    if ("caches" in window) {
        caches.match(ENDPOINT_COMPETITION).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    console.log("Competition Data: " + data);
                    showStanding(data);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_COMPETITION)
        .then(data => {
            showStanding(data);
        })
        .catch(error => {
            console.log(error)
        })
}

function showStanding(data) {
    let standings = "";
    let standingElement =  document.getElementById("homeStandings");

    data.standings[0].table.forEach(function (standing) {
        standings += `
                        <tr>
                            <td>${standing.position}</td>
                            <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                            <td>${standing.team.name}</td>
                            <td>${standing.playedGames}</td>
                            <td>${standing.won}</td>
                            <td>${standing.draw}</td>
                            <td>${standing.lost}</td>
                            <td>${standing.points}</td>
                            <td>${standing.goalsFor}</td>
                            <td>${standing.goalsAgainst}</td>
                            <td>${standing.goalDifference}</td>
                        </tr>
        `;
    });

     standingElement.innerHTML = `
     <div class="card" style=" margin-top: 30px;">
                     <table class="highlight responsive-table centered">
                         <thead class="blue-grey lighten-3">
                             <tr class="darken-2 z-depth-1">
                                 <th>Position</th>
                                 <th>Logo</th>
                                 <th>Team Name</th>
                                 <th>Match</th>
                                 <th>W</th>
                                 <th>D</th>
                                 <th>L</th>
                                 <th>P</th>
                                 <th>GF</th>
                                 <th>GA</th>
                                 <th>GD</th>
                             </tr>
                          </thead>
                         <tbody id="standings">
                             ${standings}
                         </tbody>
                     </table>
                     
                     </div>
    `;
}

function getAllTeams() {
    if ("caches" in window) {
        caches.match(ENDPOINT_TEAMS).then(function (response) {
            if (response) {
                response.json().then(function (resources) {
                    console.log("Teams Data: " + resources);
                    showTeam(resources);
                })
            }
        })
    }

    fetchAPI(ENDPOINT_TEAMS)
        .then(resources => {
            showTeam(resources);
        })
        .catch(error => {
            console.log(error)
        })

    
}

function showTeam(resources) {
    let teams = "";
    let teamsElement = document.getElementById("teams");

    resources.teams.forEach(function (team) {
        teams += `
            <div class="card hoverable s12 m5">
                <div class="card-content ">
                <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
                    <div class="center flow-text">${team.name}</div>
                    <div class="center">${team.area.name}</div>
                    <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
                </div>
                <div class="card-action right-align">
                    <a class="waves-effect waves-light btn-small teal" id=""href="./detail.html?id=${team.id}">Detail</a>
                </div>
            </div>    
        `;
    });

    teamsElement.innerHTML = `
                    ${teams}
    `;
    // const item = getTeamsByID();
    // var save = document.getElementById("save");
    // save.onclick = function() {
    // console.log("Tombol FAB di klik.");
    // item.then((data) => {
    //     M.toast({ html: `${team.name} Berhasil menambahkan tim ini ke favorit` });
    //     addFavTeam(data);
    //   });
    // }

    
}

// function getTeambyId() {
//     // Ambil nilai query parameter (?id=)
//     var urlParams = new URLSearchParams(window.location.search);
//     var idParam = urlParams.get("id");
    
//     fetchAPI(`${BASE_URL}teams/${idParam}`)
//       .then(status)
//       .then(json)
//       .then(function(data) {
//         // Objek JavaScript dari response.json() masuk lewat variabel data.
//         console.log(data);
        // Menyusun komponen card artikel secara dinamis
        // data.teams.forEach(function (team) {
        // var detailHTML = `
        //     <div class="card hoverable s12 m5">
        //         <div class="card-content ">
        //         <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
        //             <div class="center flow-text">${team.name}</div>
        //             <div class="center">${team.area.name}</div>
        //             <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
        //             <div class="center">${team.area.name}</div>
        //         </div>
        //         <div class="card-action right-align">
        //             <a class="waves-effect waves-light btn-small teal" id="save"href="./detail.html?id=${team.id}">Detail</a>
        //         </div>
        //     </div>    
        //   `;
        // });
        // // Sisipkan komponen card ke dalam elemen dengan id #content
        // document.getElementById("body-content").innerHTML `${detailHTML}`;
    //   });
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error)
//     })
//   }
// function getTeambyId() {
//     // Ambil nilai query parameter (?id=)
//     var urlParams = new URLSearchParams(window.location.search);
//     var idParam = urlParams.get("id");
    
//     fetchAPI(`${BASE_URL}teams/${idParam}`)
//       .then(status)
//       .then(json)
//       .then(function(data) {
//         // Objek JavaScript dari response.json() masuk lewat variabel data.
//         console.log(data);
//         // Menyusun komponen card artikel secara dinamis
//         var detailHTML = `
//             <div class="card hoverable s12 m5">
//                 <div class="card-content ">
//                 <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
//                     <div class="center flow-text">${team.name}</div>
//                     <div class="center">${team.area.name}</div>
//                     <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
//                     <div class="center">${team.area.name}</div>
//                 </div>
//                 <div class="card-action right-align">
//                     // <a class="waves-effect waves-light btn-small teal" id="save"href="./detail.html?id=${team.id}">Detail</a>
//                 </div>
//             </div>    
//           `;
//         // Sisipkan komponen card ke dalam elemen dengan id #content
//         document.getElementById("body-content").innerHTML = detailHTML;
//       });
//   }
function getTeamById() {
    
      // Ambil nilai query parameter (?id=)
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const idParam = urlParams.get("id");
    //   if ("caches" in window) {
    //     caches.match(`${BASE_URL}teams/${idParam}`).then(function (response) {
    //         if (response) {
    //             response.json().then(function (data) {
    //                 console.log("Teams Data: " + data);
                    
    //             })
    //         }
    //     })
    // }

    //   fetchAPI(`${BASE_URL}teams/${idParam}`)
    //   .then(data => {
    //     console.log(data);
    //     detailHTML += `
    //         <div class="card hoverable s12 m5">
    //             <div class="card-content ">
    //             <div class="center" style="cursor:pointer;" onclick="loadTeam(${team.id})"><img width="128"  src="${team.crestUrl}"></div>
    //                 <div class="center flow-text">${team.name}</div>
    //                 <div class="center">${team.area.name}</div>
    //                 <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
    //             </div>
    //             <div class="card-action right-align">
    //                 <a class="waves-effect waves-light btn-small teal" id="save"href="./detail.html?id=${team.id}">Detail</a>
    //             </div>
    //         </div>    
    //     `;
    //     document.getElementById("body-content").innerHTML = articleHTML;
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    return new Promise(function(resolve, reject) {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get("id");

    if ("caches" in window) {
        caches.match(`${BASE_URL}teams/${idParam}`).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    
                    showDetail(data);
                    resolve(data);
                })
            }
        })
    }

    fetch(`${BASE_URL}teams/${idParam}`,{
        headers: {
            'X-Auth-Token': API_KEY
        }
    })
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        showDetail(data);
        resolve(data);
    })
        // .then(team => {
        //     detailTeamHTML(data);
        //     console.log(team);
        //     let teamsDetail = document.getElementById("body-content");
        //     let teams = `
        //     <tr>
        //         <td>${team.id}</td>
        //         <td>${team.name}</td>
        //         <td>${team.address}</td>
        //         <td>${team.phone}</td>
        //         <td><a href = "${team.website}" target="blank">${team.website}</td>
        //         <td>${team.email}</td>
        //         <td>${team.clubColors}</td>
        //     </tr>
        // `;
        
        // teamsDetail.innerHTML = `
        //             <div class="card" style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">
        //             <table class="highlight responsive-table">
        //                     <thead class="blue-grey lighten-3">
        //                     <tr class="darken-2 z-depth-1">
        //                         <th>Club ID</th>
        //                         <th>Club Name</th>
        //                         <th>Address</th>
        //                         <th>Phone</th>
        //                         <th>Website</th>
        //                         <th>Email</th>
        //                         <th>Club Color</th>
        //                     </tr>
        //                  </thead>
        //                 <tbody id="standings">
        //                     ${teams}
        //                 </tbody>
        //             </table>
        //             <a id="save" class="waves-effect waves-light btn-small teal centered" style="margin: 15px 0px;" href="./detail.html?id=${team.id}">Tambahkan</a>
        //             </div>
        // `;
        // })
        // .catch(error => {
        //     console.log(error)
        })
          
}
// function detailTeamHTML(data) {
//     let dataSquadHTML = ''
//     let tabelSquadHTML = ''
//     data = JSON.parse(JSON.stringify(data).replace(/^http:\/\//i, 'https://'));

//     document.getElementById("namaTeam").innerHTML = data.name;
//     document.getElementById("area").innerHTML = data.area.name;
//     document.getElementById("logoTeam").src = data.crestUrl;
    
//     data.squad.forEach(function(squad) {
//         dataSquadHTML += `
//             <tr>
//                 <td>${squad.name}</td>
//                 <td>${squad.position}</td>
//                 <td>${squad.nationality}</td>
//             </tr>
//         `
//     });
//     tabelSquadHTML += `
//         <div class="card-player">
//             <div class="card s12"> 
//                 <table>
//                     <thead>
//                         <tr>
//                             <th width="33%">Player Name</th>
//                             <th width="33%">Position</th>
//                             <th width="33%">Nationality</th>
//                         <tr>
//                     </thead>
//                     <tbody> ${dataSquadHTML}</tbody>
//                 </table>
//             </div>
//         </div>
//     `
//     document.getElementById("detailTeam").innerHTML = tabelSquadHTML;
// }

function showDetail(data) {
    let teamsDetail = document.getElementById("body-content");
    data = JSON.parse(JSON.stringify(data).replace(/^http:\/\//i, 'https://'));

    let teams = `
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.address}</td>
                <td>${data.phone}</td>
                <td><a href = "${data.website}" target="blank">${data.website}</td>
                <td>${data.email}</td>
                <td>${data.clubColors}</td>
            </tr>
        `;

    teamsDetail.innerHTML = `
                    <div class="card" style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">
                    <table class="highlight responsive-table">
                            <thead class="blue-grey lighten-3">
                            <tr class="darken-2 z-depth-1">
                                <th>Club ID</th>
                                <th>Club Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Email</th>
                                <th>Club Color</th>
                            </tr>
                         </thead>
                        <tbody id="standings">
                            ${teams}
                        </tbody>
                    </table>
                    <a id="save" class="waves-effect waves-light btn-small teal centered" style="margin: 15px 0px;" >Tambahkan</a>
                    </div>
        `;
        var item = getTeamById();
        var save = document.getElementById("save");
        save.onclick = function () {
            console.log("Tombol FAB di klik.");
            item.then(function (data) {
                addFavTeam(data);
            });
        }

}


