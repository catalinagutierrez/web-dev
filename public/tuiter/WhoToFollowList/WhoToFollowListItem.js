const WhoToFollowListItem = (who) => {
  return `
        <div class="row bg-transparent m-0">
            <div class="col-sm-2 p-2 bg-transparent">
                <img src="${who.avatarIcon}" class="img-fluid rounded-circle border-0 bg-transparent">
            </div>
            <div class="col-sm-6 pt-2 bg-transparent text-nowrap">
                <p class="wd-main-text bg-transparent">
                    <span class="bg-transparent">
                        ${who.userName} 
                        <i class="fa-solid fa-circle-check"></i>
                    </span>
                    
                </p>
                <p class="wd-secondary-text bg-transparent">@${who.handle}</p>
            </div>
            <div class="col-sm-4 bg-transparent d-flex">
                <a href="#"
                    class="btn btn-primary btn-block rounded-pill align-self-center">
                    Follow
                </a>
            </div>  
        </div>
    `;
};

export default WhoToFollowListItem;
