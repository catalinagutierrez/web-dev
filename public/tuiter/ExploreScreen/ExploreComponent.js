import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
        <div class="row">
            <div class="col-11 col-sm-10 p-3 ps-4">
                <div class="input-group bg-white rounded-pill">
                    <div class="input-group-prepend">
                        <div class="input-group-text bg-transparent border-0"><i class="fa fa-search"></i></div>
                    </div>
                    <input class="form-control border-0 rounded bg-transparent" type="search" placeholder="Search">
                </div>
            </div>
            <div class="col-1 col-sm-2 p-0 d-flex">
                <a href="explore-settings.html" class="align-self-center">
                        <i class="fa-solid fa-gear fa-lg text-primary"></i>
                </a>
            </div>  
        </div>

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link rounded-2 active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link rounded-2" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link rounded-2" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link rounded-2" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link rounded-2" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="row p-0 mb-2 mt-2 m-0">
            <div class="col-12 p-0">
                <div class="wd-main-img-container">
                    <img class="mw-100" src="../images/starship.jpg"/>  
                    <div class="wd-main-img-text">Space X's Starship</div> 
                </div> 
            </div>  
        </div>

    
        ${PostSummaryList()}
    `;
};

export default ExploreComponent;
