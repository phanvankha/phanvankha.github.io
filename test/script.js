const form = document.querySelector('form');
const shareLink = document.getElementById('share-link');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	// Get form data
	const formData = new FormData(form);
	const name = formData.get('name');
	const code = formData.get('code');

	// Save code to file
	const filename = Date.now() + '.txt'; // Use timestamp as filename
	const file = new Blob([code], { type: 'text/plain' });
	const url = URL.createObjectURL(file);

	// Display link to shared code
	const shareUrl = `${window.location.origin}/share/${filename}`;
	shareLink.innerHTML = `
		<h2>Share Link:</h2>
		<p>Hey ${name}, here's the link to your shared code:</p>
		<input type="text" value="${shareUrl}">
		<button id="copy-btn">Copy Link</button>
	`;

	// Add copy link functionality
	const copyBtn = document.getElementById('copy-btn');
	copyBtn.addEventListener('click', function() {
		// Copy share URL to clipboard
		const shareUrlInput = shareLink.querySelector('input');
		shareUrlInput.select();
		document.execCommand('copy');

		// Show confirmation message
		copyBtn.textContent = 'Link Copied!';
		setTimeout(function() {
			copyBtn.textContent = 'Copy Link
();';
}, 2000);
(
	// Remove the highlight from the input field
	window.getSelection().removeAllRanges();
});
});

CSS:

#share-link {
margin-top: 2rem;
padding: 1rem;
background-color: #f8f8f8;
border: 1px solid #ddd;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#share-link h2 {
font-size: 1.5rem;
margin-bottom: 1rem;
}

#share-link input[type="text"] {
width: 100%;
padding: 0.5rem;
border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 1rem;
}

#share-link button {
background-color: #4CAF50;
color: white;
padding: 0.5rem 1rem;
border: none;
border-radius: 3px;
cursor: pointer;
}

#share-link button:hover {
background-color: #3e8e41;
}