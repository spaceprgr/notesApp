function getNoteId() {
	let noteObject = getExistingNotes()
	if(!noteObject){
		return 1
	}
	const keysArray = Object.keys(noteObject)
	const numberKeys = keysArray.map((key)=>Number(key))
	cinsole.log(numberKeys)
	return Math.max( ... numberKeys) + 1
}

function getExistingNotes() {
	let notes = localStoraage.getItem("notes")
	if(!notes){
		return null
	}
	return JSON.parse(notes)
}