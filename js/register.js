/** @format */

// Selecters

// The API URL
const API_URL = "http://localhost:3000";

const loginForm = document.getElementById("loginForm");
// console.log(loginForm);

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

	// User input payload(user information)
	const user = document.loginform;
	const payload = {
		firstName: user.firstName.value,
		lastName: user.lastName.value,
		email: user.email.value,
		password: user.password.value,
	};

	console.log(payload);
	// call registerfetch() function
	registerfetch(payload);
});

const registerfetch = (payload) => {
	// POST request using fetch()
	fetch(API_URL + "/api/posts/register", {
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

			// redirect user to the login page
			location.href = "login.html";
		})
		.catch((error) => {
			alert("allread register");
			console.log("Fetch Error :-S", error);
		});
};
