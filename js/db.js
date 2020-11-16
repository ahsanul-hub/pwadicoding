
const dbPromised = idb.open("gilaliga", 1, function(upgradeDb) {
    if (!upgradeDB.objectStoreNames.contains('Favteam')) {
    upgradeDb.createObjectStore("Favteam", {
      keyPath: "id"
    });
  }
  });


  function addFavTeam(data) {
    dbPromised
      .then((db) => {
        // transacation pembungkus untuk menjaga integritas data
        var tx = db.transaction('Favteam', 'readwrite');
        tx.objectStore('Favteam').put(data);
        return tx.complete;
      })
      .then(() => {
        console.log('Team berhasil disimpan ke favorit');
      });
  }