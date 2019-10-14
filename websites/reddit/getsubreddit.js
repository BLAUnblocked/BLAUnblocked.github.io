let subredditInput = document.getElementById('subreddit-input');
let subredditDisplay = document.getElementById('subreddit');

function loadSubreddit() {
	window.alert(subredditDisplay.attributes[0].name + ', ' + subredditDisplay.attributes[1].name + ', ' + subredditDisplay.attributes[2].name + ', ' + subredditDisplay.attributes[3].name)
	subredditDisplay.attributes[2] = subredditInput.innerHTML;
	window.alert('ree');
}