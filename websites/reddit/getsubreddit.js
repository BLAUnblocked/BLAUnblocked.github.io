let subredditInput = document.getElementById('subreddit-input');
let subredditDisplay = document.getElementById('subreddit');

function loadSubreddit() {
	console.log(subredditDisplay.attributes[0])
	subredditDisplay.data_subreddit = subredditInput.innerHTML;
}