/** @format */

const API_URL = "http://localhost:3000/api/posts/";

const submitNewPost = () => {
	let formData = new FormData();
	const title = document.getElementById("form-post-title").value;
	const content = document.getElementById("form-post-content").value;
	const fileInputElement = document.getElementById("form-post-image");
	formData.append("post_image", fileInputElement.files[0]);
	formData.append("title", title);
	formData.append("content", content);

	// POST request using fetch()
	fetch(API_URL, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				// throw new Error(response.statusText);
				throw new Error("Something went wrong");
			}
		})
		.then((data) => {
			// Redirect the user to home page
			setTimeout(() => {
				window.location.replace("index.html");
			}, 1000);
		})
		.catch((error) => {
			console.log("Fetch Error :-S", error);
		});
};
