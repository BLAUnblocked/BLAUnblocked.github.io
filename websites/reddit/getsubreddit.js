let subredditInput = document.getElementById('subreddit-input');
let subredditDisplay = document.getElementById('subreddit');

function loadSubreddit() {
	subredditDisplay.data.subreddit = subredditInput.innerHTML;
}