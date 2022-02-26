import pages from "./pages.js";
import NavigationItem from "./NavigationItem.js";

const NavigationSidebar = (active) => {
  return `
        <div class="list-group">
            ${pages
              .map((page) => {
                return NavigationItem(page, active);
              })
              .join("")}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet
                </a>
        </div>
    `;
};
export default NavigationSidebar;
