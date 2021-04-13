/** @format */
/**
 *  in login page
 *  Check if token is available
 *  if token is available take the  redirect user to the home page
 *  in home page also
 *  Check if token is available
 *  if token is not available redirect user to login page
 */

const currentToken = localStorage.getItem("token");

// check if the user is already login
const checkIfLoggedIn = () => {
	const params = new URLSearchParams(window.location.search);
	const isTrue = location.href.indexOf("login.html") > -1;

	if (currentToken) {
		// redirect user to the home page
		if (isTrue) {
			location.href = "/";
		}
		// If I am currently not logged in
		// And trying to access a unauthorized page
		// (Trying to access all other pages besides login)
	} else if (isTrue === false) {
		location.href = "login.html";
	}
};

// check if the user is allready login
// const checklocalStorageIfUserLogIn = () => {
// 	const currentToken = localStorage.getItem("token");
// 	const params = new URLSearchParams(window.location.search);
// 	const flag = params.has("login");

// first remove the token from localStorage
// and then redirect user to go lgoin page for sigin in
window.onload = () => {
	const removeTokenButton = document.getElementById("removeTokenButton");
	removeTokenButton.addEventListener(onclick, () => {
		localStorage.removeItem("token");
		location.href = "login.html";
	});
};

// function call
// load this one directly
checkIfLoggedIn();
