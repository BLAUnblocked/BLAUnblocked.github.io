function loadSubreddit() {
	let subredditInput = document.getElementById('subreddit-input');
	let subredditDisplay = document.getElementsByTagName('div')[1];
	//subredditDisplay.remove();
	document.write("<script id='subreddit' src='https://redditjs.com/subreddit.js' data-subreddit='" + subredditInput.innerHTML + "' data-width='800' data-height='600'></script>")
}