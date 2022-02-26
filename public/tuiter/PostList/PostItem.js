const PostItem = (post) => {
  return `
        <div class="row border border-dark p-1 pt-3"> 
            <div class="col-2 bg-transparent">
                <img src="${
                  post.userImage
                }" class="img-fluid rounded-circle border-0 bg-transparent">
            </div>
            <div class="col-10">
                <div>
                    ${post.userName} 
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="wd-secondary-text">
                        ${post.handle}
                        - 
                        ${post.time}
                    </span>
                    <p>
                        ${post.title}
                    </p>
                </div>
                <div class="overflow-hidden border border-dark rounded-4">
                    <img src=${post.image} class="img-fluid w-100" /> 
                    ${
                      post.contentTitle && post.contentBody
                        ? `<div class="p-3">
                            <div>
                                ${post.contentTitle}
                            </div>
                            <div class="wd-secondary-text wd-text-truncate">
                                <span>${post.contentBody}</span>
                            </div>
                        </div>`
                        : ""
                    }
                </div> 
                <div class="row p-2">
                    <div class="col-3 wd-secondary-text">
                        <i class="fa-regular fa-comment"></i> ${post.comments}
                    </div>
                    <div class="col-3 wd-secondary-text">
                        <i class="fa-regular fa-retweet"></i> ${post.tweets}
                    </div>
                    <div class="col-3 wd-secondary-text">
                        <i class="fa-regular fa-heart"></i> ${post.likes}
                    </div>  
                    <div class="col-3 wd-secondary-text">
                    <i class="fa-regular fa-arrow-up-from-bracket"></i>
                    </div>                     
                </div>
            </div>
        </div>
    `;
};

export default PostItem;
