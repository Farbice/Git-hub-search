function dateDiffInDays(date) {
 
	let currentDate = new Date();
	console.log(currentDate.getTime());
	let userCreationDate = Date.parse(date);
	console.log(userCreationDate);
	let diffTime = currentDate.getTime() - userCreationDate;
	let diffDays = diffTime / (1000 * 60 * 60 * 24);
	return diffDays.toFixed(0);
	
}

function deleteCardIf(card) {
	
}

export { dateDiffInDays, deleteCardIf };
