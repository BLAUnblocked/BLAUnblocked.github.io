let subredditInput = document.getElementById('subreddit-input');
let subredditDisplay = document.getElementById('subreddit');

function loadSubreddit() {
	window.alert(subredditDisplay.attributes[0] + ', ' + subredditDisplay.attributes[1] + ', ' + subredditDisplay.attributes[2] + ', ' + subredditDisplay.attributes[3])
	subredditDisplay.data_subreddit = subredditInput.innerHTML;
}