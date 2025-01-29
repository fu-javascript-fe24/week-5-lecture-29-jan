console.log('Hello from script');

function renderUsers() {
    const bodyRef = document.querySelector('body');

    for(let user of globalUsers) {
        let pRef = document.createElement('p');
        pRef.textContent = user.username;
        bodyRef.appendChild(pRef);
        console.log(pRef);
    }
}