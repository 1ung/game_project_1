// when user enters a key, timer starts counting down
// correct key = highlight in color
// wrong key = highlight in red
// allow reset
// allow backspace and reammendment of words accuracy not changed

/* Test results = 
= speed (WPM)
= Accuracy
= correct entries (letters)
= incorrect entries (letters)
= ammended entries (letters)
= error rate
= complete words
= total time:
*/

var default_text = "Yo, Big Shaq, the one and only. Man's not hot, never hot. Skrrat, skidi-kat-kat. Boom. Two plus two is four, minus one that's three, quick maths. Everyday man's on the block, smoke trees. See your girl in the park, that girl is a uckers. When the ting went quack-quack-quack, you man were ducking (you man ducked). Hold tight, Asnee (my brotha), he's got the pumpy (big ting). Hold tight, my man (my guy), he's got the frisbee. I trap, trap, trap on the phone, movin' that cornflakes. Rice Krispies, hold tight my girl, Whitney (my G). On the road doin' ten toes, like my toes (like my toes). You man thought I froze, I see a peng girl, then I pose (chillin'). If she ain't on it, I ghost, hah, look at your nose (check your nose fam). You donut, nose long like garden hose. I tell her man's not hot, I tell her man's not hot. The girl told me, 'Take off your jacket'. I said, 'Babes, man's not hot' (never hot). I tell her man's not hot (never hot). The girl told me, 'Take off your jacket'. I said, 'Babes, man's not hot' (never hot). Hop out the four-door with the .44 it was one, two, three and four (us man). Chillin' in the corridor (yo), your dad is forty-four. And he's still callin' man for a draw (look at him), let him know. When I see him, I'm gonna spin his jaw (finished). Take man's Twix by force (take it), send man shop by force (send him). Your girl knows I've got the sauce (flexin'), no ketchup (none). Just sauce (saucy), raw sauce. Ah, yo, boom, ah."

// countdown from 1 min
var timer = document.getElementById('timer');
countdown = 60;

function onTimer() {
	timer.innerHTML = countdown;
	countdown--;
	if (countdown < 0) {
		alert('You lose!');
	}
	else {
		setTimeout(onTimer, 1000);
	}
}



// append letters into box
var showTexts = document.getElementById('show-texts');

for (var i = 0; i < default_text.length; i++) {
	var span = document.createElement('span');
	span.setAttribute('class', 'script-letter');
	span.textContent = default_text[i];
	showTexts.appendChild(span);
}

// get array of letters
var nodeL = document.getElementsByClassName('script-letter');
var letters = Array.from(nodeL);

var start = document.getElementById('start');

// on click, input box focus text area.
start.addEventListener('click', function() {
	showTexts.focus();
	activate();
});

// to make sure it repeats check only after keypress
function activate() {
	window.addEventListener('keydown', checkKeyPress);

};

var spanray = Array.from(document.querySelectorAll('.script-letter'));

var n = 0;

// checks for every letter and moves to the next
function checkKeyPress(key) {
	spanray[n].classList.toggle("current-letter");
	console.log(key.keyCode);
	if (key.keyCode === letters[n].innerText.charCodeAt(0)) {
		letters[n].style.color = 'blue';
		n++;
		activate();
		console.log(key.keyCode);
	} else if (key.keyCode == '8') {
		n--;
		activate();

	} else if (key.keyCode !== letters[n].innerText.charCodeAt(0)) {
		letters[n].style.color = 'red';
		n++;
		activate();

	} 

	console.log(n);
};

