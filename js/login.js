/** @format */

// Selecters
const loginForm = document.getElementById("loginForm");
// console.log(loginForm);

// The API URL
const API_URL = "http://localhost:3000";

/**
 * Event handler for a form  on submit event.
 * @param {SubmitEvent} event
 */
loginForm.addEventListener("submit", (event) => {
	/**
	 * This prevents the default behaviour of the browser submitting
	 * the form so that we can handle things instead.
	 */
	event.preventDefault();

	// user input payload
	const user = document.loginform;
	const payload = {
		email: user.email.value,
		password: user.password.value,
	};

	loginfetch(payload);
});

const loginfetch = (payload) => {
	// POST request using fetch()
	fetch(API_URL + "/api/posts/login", {
		/**
		 * The default method for a request with fetch is GET,
		 * so we must tell it to use the POST HTTP method.
		 */
		method: "POST",
		/**
		 * These headers will be added to the request and tell
		 * the API that the request body is JSON and that we can
		 * accept JSON responses.
		 */
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},

		// The body of our POST request is the JSON string that we created above.
		body: JSON.stringify(payload),
	})
		.then((response) => {
			if (response.ok) {
				// Convert to JSON  and returned
				return response.json();
			} else {
				// throw new Error(response.statusText);
				throw new Error("Something went wrong");
			}
		}) // returns a promise allready
		.then((data) => {
			// Displaying results to console
			console.log(data);
			// console.log(data.token);
			// save the token in the localStorage
			// localStorage.setItem("token", data.token);
			// location.href = "/";
		})
		.catch((error) => {
			alert(1);
			console.log("Fetch Error :-S", error);
		});
};
