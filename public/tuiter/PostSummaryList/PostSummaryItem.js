const PostSummaryItem = (post) => {
  return `
         <div class="row p-2 m-0 d-flex justify-content-between bg-dark">
            <div class="col-8">
                ${
                  post.topic
                    ? `<p class=" bg-dark wd-secondary-text">${post.topic}</p>`
                    : ""
                }
                <span class=" bg-dark wd-main-text">
                    ${
                      post.userName
                    } <i class="fa-solid fa-circle-check"></i></span>
                <span class="wd-secondary-text"> - ${post.time}</span>
                ${
                  post.title
                    ? `<p class="wd-main-text wd-text-truncate">${post.title}</p>`
                    : ""
                }
            </div>
            <div class="col-4">
                <img class="float-end rounded-2 wd-post-img" src="${
                  post.image
                }"/>
            </div>
        </div>
     `;
};

export default PostSummaryItem;
