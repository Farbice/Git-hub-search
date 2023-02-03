import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

 function showUser(user) {
    console.log(user);
    let userDate =  dateDiffInDays(user.created_at);   
    let resultHtml = document.querySelector('.result');
    
    resultHtml.innerHTML += `<li>Username : ${user.name} </li>`;
    resultHtml.innerHTML += `<li>Nombre de repos public : ${user.public_repos} </li>`;
    resultHtml.innerHTML += `<li>Avatar : <img src="${user.avatar_url}" width="100"> </li>`;
    resultHtml.innerHTML += `<li>Nombre de jours depuis l'inscription : ${userDate} jours soit ${(userDate/360).toFixed(0)} ans</li>`;
	
	
}

export default showUser;
