const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000";

// Call function whe the page is loaded
window.onload = () => {
  getPosts();
};

// function to get the posts
const getPosts = () => {
  // GET request using fetch()
  fetch(API_URL, {
    method: "GET",
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
      buildPosts(data);
    })
    .catch((error) => {
      console.log("Fetch Error :-S", error);
    });
};

/**
 *  function to Display the posts to the frontEnd
 *  @param {posts} posts Object
 */

const buildPosts = (posts) => {
  let blogPostContent = document.querySelector("#blogPostContent");
  posts.forEach((post) => {
    const { id, title, content, post_image, added_date } = post;
    let image = `${API_BASE_URL}/static/${post_image}`;

    blogPostContent.innerHTML += `
				<div class="main__container--post">
        <!-- blog_post_image -->
								<div class="main__container--post__image" 
							  	style="background-image: url(${image});">
        </div>

								<div class="main__container--post__content">
								<!-- blog_post_date -->
								<div class="post--date">${added_date}</div>

								<!-- blog_post_header -->
								<div class="post--title">${title}</div>

								<!-- blog_post_content -->
								<div class="post--text">
										<p> ${content}</p>
								</div>

								<!-- blog_post_readmore_content -->
								<!-- font-family: Cambria, Cochin, Georgia, "Times New Roman", Times, serif; -->
						</div>
				</div>
				`;
  });
};

const ev = new Date("012 march 2021 14:48 UTC");
const w = new Date(2018, 11, 24, 10);
// const ev = new Date("1581376324100");
// var date = new Date(1546108200 * 1000);
// console.log(date.toUTCString());

// console.log(ev.toString());
// Sat, 29 Dec 2018 18:30:00 GMT
// console.log(ev);
// console.log(w);
