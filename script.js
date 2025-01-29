console.log('Hello from script');

let globalUsers = [];
pageSetup();

function pageSetup() {
    initGlobalUsers();
    renderUsers();
}

function initGlobalUsers() {
    globalUsers.push({
        username : 'Jesper',
        password : 'fotboll'
    });
    globalUsers.push({
        username : 'Theodr',
        password : 'lego'
    });
    globalUsers.push({
        username : 'Liam',
        password : 'innebandy'
    });
    globalUsers.push({
        username : 'Arne',
        password : 'sågverk'
    });
}
