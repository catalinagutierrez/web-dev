import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  return `
        <div class="row p-3 m-0 bg-dark">
            <p class="wd-main-text">Who to follow</>
        </div>
        <ul class="list-group bg-dark">
            ${who
              .map((who) => {
                return WhoToFollowListItem(who);
              })
              .join("")}
        </ul>
`;
};

export default WhoToFollowList;
