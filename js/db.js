
// var dbPromised = idb.open("gilaliga", 1, function(upgradeDb) {
//     if (!upgradeDB.objectStoreNames.contains('Favteam')) {
//     upgradeDb.createObjectStore("Favteam", {
//       keyPath: "id"
//     });
//   }
//   });


//   function addFavTeam(data) {
//     dbPromised
//       .then((db) => {
//         // transacation pembungkus untuk menjaga integritas data
//         var tx = db.transaction('Favteam', 'readwrite');
//         tx.objectStore('Favteam').put(data);
//         return tx.complete;
//       })
//       .then(() => {
//         console.log('Team berhasil disimpan ke favorit');
//       });
//   }

var dbPromised = idb.open("GilaLiga", 1, upgradeDb => {
  if (!upgradeDb.objectStoreNames.contains("favTeam")) {
      upgradeDb.createObjectStore("favTeam", {
          keyPath: "id"
      });
  }
});

function addFavTeam(data) {
  dbPromised
  .then(db => {
      var tx = db.transaction("favTeam", "readwrite");
      var store = tx.objectStore("favTeam");
      store.put(data);
      return tx.complete;
  })
  .then(() => {
      M.toast({html: 'Team was successfully added'})
  })
}

function getAllFavorite() {
  return new Promise(function (resolve, reject) {
      dbPromised
      .then(function (db) {
          var tx = db.transaction("favTeam", "readonly");
          var store = tx.objectStore("favTeam");
          return store.getAll();
      })
      .then(function (teams) {
          resolve(teams);
      });
  })
}

