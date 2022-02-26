import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
  $("#wd-home").append(`
        <div class="row mt-2">
            <div class="d-none d-md-block col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-sm-12 col-md-10 col-lg-6">
                ${HomeComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
