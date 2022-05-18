const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;

let cardID = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
};
//function that open note panel to add another note

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};
//clearing all the content inside panel area while closing

const addNote = () => {
	if (
		textarea.value !== '' &&
		category.options[category.selectedIndex].value !== '0'
	) {
		createNote();
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};
//checking if all inputs are filled if not error note become visible

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	//creating new div which is new note

	newNote.innerHTML = `<div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardID})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">
                ${textarea.value}
            </div>`;

	//adding the inside of the note

	noteArea.appendChild(newNote);
	cardID++;
	//number iteration
	textarea.value = '';
	category.selectedIndex = 0;
	notePanel.style.display = 'none';
	//clearing the inside of note after adding
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};
//selecting value(name of the category) and to adding title of the note

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Shopping':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Work':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Others':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
	//choosing color of the notes depends of type of the note
};

const  deleteNote = id =>{
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete)
	//deleting note by ID number
}

const deleteAllNotes = () => {
    noteArea.textContent = ''
}
//deleting all notes

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
