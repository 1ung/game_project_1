// allow reset


/* Test results = 
= speed (WPM) (not sure how to calculate words)
= Accuracy (not affected upon backspace)
= correct entries (letters)
= incorrect entries (letters)
= amended entries (letters)
= error rate
= complete words
*/

var currentPos = 0;
var previousPos = 0;
var correctKeys = 0;
var wrongKeys = 0;
var totalKeys = 0;
var ammendedKeys = 0;
var wordsTyped = 0;
var preventTimer = 0;


var threePigs = "Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. Then, they sang and danced and played together the rest of the day. The third little pig worked hard all day and built his house with bricks. It was a sturdy house complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water. So he huffed and he puffed and he blew the house down! The wolf opened his jaws very wide and bit down as hard as he could, but the first little pig escaped and ran away to hide with the second little pig. The wolf continued down the lane and he passed by the second house made of sticks; and he saw the house, and he smelled the pigs inside, and his mouth began to water as he thought about the fine dinner they would make. So he huffed and he puffed and he blew the house down! The wolf was greedy and he tried to catch both pigs at once, but he was too greedy and got neither! His big jaws clamped down on nothing but air and the two little pigs scrambled away as fast as their little hooves would carry them. The wolf chased them down the lane and he almost caught them. But they made it to the brick house and slammed the door closed before the wolf could catch them." 

// var default_text = "Yo, Big Shaq, the one and only. Man's not hot, never hot. Skrrat, skidi-kat-kat. Boom. Two plus two is four, minus one that's three, quick maths. Everyday man's on the block, smoke trees. See your girl in the park, that girl is a uckers. When the ting went quack-quack-quack, you man were ducking (you man ducked). Hold tight, Asnee (my brotha), he's got the pumpy (big ting). Hold tight, my man (my guy), he's got the frisbee. I trap, trap, trap on the phone, movin' that cornflakes. Rice Krispies, hold tight my girl, Whitney (my G). On the road doin' ten toes, like my toes (like my toes). You man thought I froze, I see a peng girl, then I pose (chillin'). If she ain't on it, I ghost, hah, look at your nose (check your nose fam). You donut, nose long like garden hose. I tell her man's not hot, I tell her man's not hot. The girl told me, 'Take off your jacket'. I said, 'Babes, man's not hot' (never hot). I tell her man's not hot (never hot). The girl told me, 'Take off your jacket'. I said, 'Babes, man's not hot' (never hot). Hop out the four-door with the .44 it was one, two, three and four (us man). Chillin' in the corridor (yo), your dad is forty-four. And he's still callin' man for a draw (look at him), let him know. When I see him, I'm gonna spin his jaw (finished). Take man's Twix by force (take it), send man shop by force (send him). Your girl knows I've got the sauce (flexin'), no ketchup (none). Just sauce (saucy), raw sauce. Ah, yo, boom, ah."

// countdown from 1 min
var timer = document.getElementById('timer');
var countdown = 10;


function onTimer() {
	timer.innerHTML = countdown;
	countdown--;
	if (countdown < 0) {
		timer.style.backgroundColor = 'red';
		window.removeEventListener('keydown', checkKeyPress);

		keyCount();

	}

	else {
		setTimeout(onTimer, 1000);
	}
};

// prevent countdown from executing more than once
function initCountdown() {
	if (preventTimer === 1) {
		onTimer();

	}
}


// append letters into box
var showTexts = document.getElementById('show-texts');

for (var i = 0; i < threePigs.length; i++) {
	var span = document.createElement('span');
	span.setAttribute('class', 'script-letter');
	span.textContent = threePigs[i];
	showTexts.appendChild(span);
}

// get array of letters
var nodeL = document.getElementsByClassName('script-letter');
var letters = Array.from(nodeL);

var start = document.getElementById('start');

// focus on selected area.
function focusBox() {
	showTexts.focus();
}

// on click, initiate functions to start game
start.addEventListener('click', function() {
	focusBox();
	activate();
	highlight();

});


// fires off following functions when keydown
function activate() {
	window.addEventListener('keydown', checkKeyPress);
	window.addEventListener('keydown', initCountdown);

};

var spanray = Array.from(document.querySelectorAll('.script-letter'));



// highlight first letter upon starting
function highlight() {
	if (currentPos === 0) {
		spanray[currentPos].classList.toggle("current-letter");
	} 
};

// get reset button
var reset = document.getElementById('reset');

// reset page upon click


// checks for every letter and moves to the next


function checkKeyPress() {

	initScroll();


	switch(event.key) {

		case 'Shift':
		case 'Escape':
		case 'Tab':
		case 'CapsLock':
		case 'Control':
		case 'Alt':
		case 'Meta':
		case 'ArrowUp':
		case 'ArrowDown':
		case 'ArrowLeft':
		case 'ArrowRight':
		return true;

		break;



		case 'Backspace':

		if (currentPos > 0) {

			previousPos = currentPos;
			currentPos --;
			spanray[previousPos].classList.toggle("current-letter");

			preventTimer++;
			console.log(currentPos);

			if (spanray[currentPos].textContent === " ") {

				spanray[currentPos].style.backgroundColor = 'red';
				spanray[currentPos].classList.toggle("current-letter");

			} else {

				spanray[currentPos].style.color = '#808080';
				spanray[currentPos].classList.toggle("current-letter");

			}




		} else if (currentPos === 0) {
			spanray[currentPos].style.color = 'white';

			preventTimer ++;
		};

			 // condition to check for space and chg bk bg color if ammended

			 break;


			 case spanray[currentPos].textContent:

			 if (spanray[currentPos].textContent === " ") {

			 	spanray[currentPos].style.backgroundColor = '#F5F5F5';
			 	previousPos = currentPos;
			 	currentPos++;
			 	spanray[previousPos].classList.toggle("current-letter");
			 	spanray[currentPos].classList.toggle("current-letter");

			 	preventTimer++;
			 	totalKeys++;

			 	console.log(currentPos);

			 } else {

			 	spanray[currentPos].style.color = 'blue';
			 	previousPos = currentPos;
			 	currentPos++;
			 	spanray[previousPos].classList.toggle("current-letter");
			 	spanray[currentPos].classList.toggle("current-letter");

			 	preventTimer++;
			 	totalKeys++;

			 	console.log(currentPos);


			 }


			 break;

			 default:

			 spanray[currentPos].style.color = 'red';
			 previousPos = currentPos;
			 currentPos++;
			 spanray[previousPos].classList.toggle("current-letter");
			 spanray[currentPos].classList.toggle("current-letter");

			 preventTimer ++;
			 totalKeys++;
			 console.log(currentPos);

			 if (spanray[previousPos].textContent === " ") {
			 	spanray[previousPos].style.backgroundColor = 'red';


			 } 

			 break;


			}

		};

//create special Id for scroll function

spanray[261].setAttribute('id', 'first-scroll');
spanray[363].setAttribute('id', 'second-scroll');
spanray[465].setAttribute('id', 'third-scroll');
spanray[567].setAttribute('id', 'fourth-scroll');
spanray[669].setAttribute('id', 'fifth-scroll');
spanray[771].setAttribute('id', 'sixth-scroll');

var firstScroll = document.getElementById('first-scroll');
var secondScroll = document.getElementById('second-scroll');
var thirdScroll = document.getElementById('third-scroll');
var fourthScroll = document.getElementById('fourth-scroll');
var fifthScroll = document.getElementById('fifth-scroll');
var sixthScroll = document.getElementById('sixth-scroll');

// scroll to next

function scrollOne() {
	firstScroll.scrollIntoView({behavior: "smooth"});
};

function scrollTwo() {
	secondScroll.scrollIntoView({behavior: "smooth"});
};

function scrollThree() {
	thirdScroll.scrollIntoView({behavior: "smooth"});
};

function scrollFour() {
	fourthScroll.scrollIntoView({behavior: "smooth"});
};

function scrollFive() {
	fifthScroll.scrollIntoView({behavior: "smooth"});
};

function scrollSix() {
	sixthScroll.scrollIntoView({behavior: "smooth"});
};

function initScroll() {
	if (currentPos === 201) {
		scrollOne();

	} else if (currentPos === 305) {
		scrollTwo();

	} else if (currentPos === 410) {
		scrollThree();

	} else if (currentPos === 512) {
		scrollFour();

	} else if (currentPos === 613) {
		scrollFive();

	} else if (currentPos === 718) {
		scrollSix();
	}


};

function keyCount() {
	
	for (var k = 0; k < currentPos; k++) {

		totalKeys += 1;
		console.log('total keys = ' + totalKeys);

		if (spanray[k].style.color === 'blue') {
			correctKeys += 1;
			console.log('correct keys = ' + correctKeys);

		} else if (spanray[k].style.color === 'red') {
			wrongKeys +=1;
			console.log('wrong keys = ' + wrongKeys);

		} else if (spanray[k].textContent === " ") {
			wordsTyped += 1;
			console.log('total words = ' + wordsTyped);

		}
	}
};

// correct = blue && space !== red

// wrong = red && space red

// total = red + blue + space

