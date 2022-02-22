const PostSummaryItem = (post) => {
  return `
         <div class="row p-2 m-0 d-flex justify-content-between bg-dark">
            <div class="col-9">
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
                ${post.title ? `<p class="wd-main-text">${post.title}</p>` : ""}
            </div>
            <div class="col-3">
                <img class="float-end img-fluid rounded-2" src="${post.image}"/>
            </div>
        </div>
     `;
};

export default PostSummaryItem;
