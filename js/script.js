
const todo = document.querySelector('.list__todo');
const todoElems = todo.children;

let i = 1;
for (let elem of todoElems) {
	let todoNumber = todoElems[i - 1].querySelector('.list__item__number');
	todoNumber.innerHTML = i + '.';
	i = i + 1;
}


const see = document.querySelector('.list__see');
const seeElems = see.children;

i = 1;
for (let elem of seeElems) {
	let seeNumber = seeElems[i - 1].querySelector('.list__item__number');
	seeNumber.innerHTML = i + '.';
	i = i + 1;
}

const learn = document.querySelector('.list__learn');
const learnElems = learn.children;

i = 1;
for (let elem of learnElems) {
	let learnNumber = learnElems[i - 1].querySelector('.list__item__number');
	learnNumber.innerHTML = i + '.';
	i = i + 1;
}


const expeditions = document.querySelector('.list__expeditions');
const expeditionsElems = expeditions.children;

i = 1;
for (let elem of expeditionsElems) {
	let expeditionsNumber = expeditionsElems[i - 1].querySelector('.list__item__number');
	expeditionsNumber.innerHTML = i + '.';
	i = i + 1;
}

const travelCheckpoints = document.querySelector('.list__travel-checkpoints');
const travelCheckpointsElems = travelCheckpoints.children;

i = 1;
for (let elem of travelCheckpointsElems) {
	let travelCheckpointsNumber = travelCheckpointsElems[i - 1].querySelector('.list__item__number');
	travelCheckpointsNumber.innerHTML = i + '.';
	i = i + 1;
}

const travel = document.querySelector('.list__travel');
const travelElems = travel.children;

i = 1;
for (let elem of travelElems) {
	let travelNumber = travelElems[i - 1].querySelector('.list__item__number');
	travelNumber.innerHTML = i + '.';
	i = i + 1;
}

const overcome = document.querySelector('.list__overcome');
const overcomeElems = overcome.children;

i = 1;
for (let elem of overcomeElems) {
	let overcomeNumber = overcomeElems[i - 1].querySelector('.list__item__number');
	overcomeNumber.innerHTML = i + '.';
	i = i + 1;
}

const animals = document.querySelector('.list__animals');
const animalsElems = animals.children;

i = 1;
for (let elem of animalsElems) {
	let animalsNumber = animalsElems[i - 1].querySelector('.list__item__number');
	animalsNumber.innerHTML = i + '.';
	i = i + 1;
}

const taste = document.querySelector('.list__taste');
const tasteElems = taste.children;

i = 1;
for (let elem of tasteElems) {
	let tasteNumber = tasteElems[i - 1].querySelector('.list__item__number');
	tasteNumber.innerHTML = i + '.';
	i = i + 1;
}

// const checkbox = document.querySelectorAll(".list__item__checkbox");

// checkbox.forEach(field => {
// 	field.onclick = function() {
// 		field.parentNode.classList.toggle("done")
// 	}
// })

// ---------------------------------------------------------------------------------
let todoAll = todoElems.length;
const todoDone = document.querySelectorAll('.list__todo .done').length;

const todoAllField = document.querySelector('.todo_all');
const todoDoneField = document.querySelector('.todo_done');

todoAllField.innerHTML = todoAll;
todoDoneField.innerHTML = todoDone;

// ---------------------------------------------------------------------------------

let learnAll = learnElems.length;
const learnDone = document.querySelectorAll('.list__learn .done').length;

const learnAllField = document.querySelector('.learn_all');
const learnDoneField = document.querySelector('.learn_done');

learnAllField.innerHTML = learnAll;
learnDoneField.innerHTML = learnDone;

// ---------------------------------------------------------------------------------

let seeAll = seeElems.length;
const seeDone = document.querySelectorAll('.list__see .done').length;

const seeAllField = document.querySelector('.see_all');
const seeDoneField = document.querySelector('.see_done');

seeAllField.innerHTML = seeAll;
seeDoneField.innerHTML = seeDone;

// ---------------------------------------------------------------------------------

let expeditionsAll = expeditionsElems.length;
const expeditionsDone = document.querySelectorAll('.list__expeditions .done').length;

const expeditionsAllField = document.querySelector('.expeditions_all');
const expeditionsDoneField = document.querySelector('.expeditions_done');

expeditionsAllField.innerHTML = expeditionsAll;
expeditionsDoneField.innerHTML = expeditionsDone;

// ---------------------------------------------------------------------------------

let travelCheckpointsAll = travelCheckpointsElems.length;
const travelCheckpointsDone = document.querySelectorAll('.list__travel-checkpoints .done').length;

const travelCheckpointsAllField = document.querySelector('.travel-checkpoints_all');
const travelCheckpointsDoneField = document.querySelector('.travel-checkpoints_done');

travelCheckpointsAllField.innerHTML = travelCheckpointsAll;
travelCheckpointsDoneField.innerHTML = travelCheckpointsDone;

// ---------------------------------------------------------------------------------

let travelAll = travelElems.length;
const travelDone = document.querySelectorAll('.list__travel .done').length;

const travelAllField = document.querySelector('.travel_all');
const travelDoneField = document.querySelector('.travel_done');

travelAllField.innerHTML = travelAll;
travelDoneField.innerHTML = travelDone;

// ---------------------------------------------------------------------------------

let overcomeAll = overcomeElems.length;
const overcomeDone = document.querySelectorAll('.list__overcome .done').length;

const overcomeAllField = document.querySelector('.overcome_all');
const overcomeDoneField = document.querySelector('.overcome_done');

overcomeAllField.innerHTML = overcomeAll;
overcomeDoneField.innerHTML = overcomeDone;

// ---------------------------------------------------------------------------------

let animalsAll = animalsElems.length;
const animalsDone = document.querySelectorAll('.list__animals .done').length;

const animalsAllField = document.querySelector('.animals_all');
const animalsDoneField = document.querySelector('.animals_done');

animalsAllField.innerHTML = animalsAll;
animalsDoneField.innerHTML = animalsDone;

// ---------------------------------------------------------------------------------

let tasteAll = tasteElems.length;
const tasteDone = document.querySelectorAll('.list__taste .done').length;

const tasteAllField = document.querySelector('.taste_all');
const tasteDoneField = document.querySelector('.taste_done');

tasteAllField.innerHTML = tasteAll;
tasteDoneField.innerHTML = tasteDone;




function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                var a = DOB.getDate() - today.getDate();
                days = 31 - a;
                break;
            }
            default: {
                var a = DOB.getDate() - today.getDate();
                days = 30 - a;
                break;
            }
        }

    }
    else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12);
    }

    let age;

    if (years % 10 == 1) {
    	age = years + ' год ';	
    } else if (years % 10 > 1 && years % 10 < 5) {
    	age = years + ' года ';	
    } else {
    	age = years + ' лет ';	
    }
    
    if (months == 1) {
    	age += months + ' месяц ';	
    } else if (months > 1 && months < 5) {
    	age += months + ' месяца ';
    } else {
    	age += months + ' месяцев ';
    }

    if (days % 10 == 1) {
    	age += days + ' день ';	
    } else if (days % 10 > 1 && days % 10 < 5) {
    	age += days + ' дня ';
    } else {
    	age += days + ' дней ';
    }

    return age;
}

function todayDate() {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = dd + '.' + mm + '.' + yyyy;

	return today;
}

const myAge = document.querySelector('.final__age');
myAge.innerHTML = getAge("1997/11/20");

const currentDate = document.querySelector('.final__data');
currentDate.innerHTML = todayDate();

const finalDone = document.querySelector('.final__result_done');
let myFinalDone = document.querySelectorAll('.done').length;
finalDone.innerHTML = myFinalDone;
const finalDoneTitle = document.querySelector('.final__res_title');
if (myFinalDone == 1) {
	finalDoneTitle.innerHTML = 'пункт';
} else if (myFinalDone > 1 && myFinalDone < 5) {
	finalDoneTitle.innerHTML = 'пункта';
} else {
	finalDoneTitle.innerHTML = 'пунктов';
}

const finalAll = document.querySelector('.final__result_main');
finalAll.innerHTML = todoAll + learnAll + seeAll + expeditionsAll + travelCheckpointsAll + travelAll + animalsAll + tasteAll;