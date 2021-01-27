import "./styles.css";
import { createContext, CSSProperties, useState } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCrop from "react-image-crop";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function Tomis() {
  let match = useRouteMatch("");

  // let gravure_idol = useParams();
  function Tomi() {
    let { id } = useParams();
    function fetch() {}
    return <h3>id:{id}</h3>;
  }
  function Bbs() {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );

    return (
      <div>
        <h2>掲示板</h2>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
    );
  }
  // 'profile' | 'likes' | 'list' | 'collection' | 'url' | 'widget'

  function Instgrams() {
    let { id } = useParams();
    function fetch() {}
    return (
      <div>
        <InstagramEmbed
          url="https://instagr.am/p/Zw9o4/"
          clientAccessToken="123|456"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    );
  }
  function Twitters() {
    let { id } = useParams();
    function fetch() {}
    return (
      <div>
        {/* 後でページ送り実装 */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="toomi_nico"
          options={{ height: 10240 }}
        />
        <TwitterTweetEmbed tweetId={"1344587203402321920"} />
        <h3>twitter_id:{id}</h3>
        <div className="card">
          <img
            src="https://pbs.twimg.com/media/Eqju7SFUwAAI9qD?format=jpg&name=large"
            className="card-img"
            alt=""
          />
          <div className="card-img-overlay">
            <em>
              <p className="text-danger text-left">
                胸元を大きく開いた自撮り
                <br />
                チェック柄のブラが
              </p>
            </em>
          </div>
        </div>
        <TwitterTweetEmbed tweetId={"1347124140721938432"} />
        <div className="card">
          <img
            src="https://pbs.twimg.com/media/ErHyPomVgAAeFVx?format=jpg&name=large"
            className="card-img"
            alt=""
          />
          <div className="card-img-overlay">
            <em>
              <p className="text-danger text-left">
                こんな雌牛ちゃんが出す牛乳🥛なら毎日飲みたくなる🤤
                <br />
              </p>
            </em>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* twitterのidを書く。 */}
      <ul>
        <li>
          <Link to={`${match.url}/twitters`}>twitterを見てみる</Link>
        </li>
        <li>
          <Link to={`${match.url}/instagrams`}>インスタグラムを見てみる</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/twitters`}>
          <Twitters />
        </Route>
        <Route path={`${match.url}/instagrams`}>
          <Instgrams />
        </Route>
        <Route path={`${match.url}/bbs`}>
          <Bbs />
        </Route>
        <Route path={`${match.url}/:id`}>
          <Tomi />
        </Route>
      </Switch>

      <Switch>
        <Route path="/tomi/1"></Route>
      </Switch>
    </div>
  );
}
