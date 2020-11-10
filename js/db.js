function databasePromise(idb) {
const dbPromised = idb.open("gilaliga", 1, function(upgradeDb) {
    if (!upgradeDB.objectStoreNames.contains('Favteam')) {
    const teamStore = upgradeDb.createObjectStore("Favteam", {
      keyPath: "id"
    });
    teamStore.createIndex("id", "id", { unique: true });
    }
  });
}

  function addFavTeam(data) {
    dbPromise
      .then((db) => {
        // transacation pembungkus untuk menjaga integritas data
        const tx = db.transaction('Favteam', 'readwrite');
        tx.objectStore('Favteam').put(data);
        return tx.complete;
      })
      .then(() => {
        console.log('Team berhasil disimpan ke favorit');
      });
  }