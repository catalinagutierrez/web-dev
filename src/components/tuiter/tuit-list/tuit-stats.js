import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <div className="row p-2">
      <div className="col-3 wd-secondary-text">
        <i className="fa-regular fa-comment"></i> {tuit.stats.comments}
      </div>
      <div className="col-3 wd-secondary-text">
        <i className="fa-regular fa-retweet"></i> {tuit.stats.retuits}
      </div>
      <div className="col-3 wd-secondary-text">
        <span onClick={likeTuit}>
          {tuit.liked && (
            <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
          )}
          {!tuit.liked && <i className="far fa-heart me-1"></i>}
        </span>
        {tuit.stats.likes}
      </div>
      <div className="col-3 wd-secondary-text">
        <i className="fa-regular fa-arrow-up-from-bracket"></i>
      </div>
    </div>
  );
};
export default TuitStats;
