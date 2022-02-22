import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $("#wd-explore").append(`
        <div class="row mt-2">
            <div class="d-none d-md-block col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-sm-12 col-md-10 col-lg-6">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
