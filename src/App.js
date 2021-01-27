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

import Tomis from "./tomi";
import Home from "./home";
import Navbar from "./navbar";

import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
export const SessionContext = createContext({ name: "aaa" });

// clip: "rect(50px 400px 200px 100px)"
export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="App">
      <Editor editorState={editorState} onChange={setEditorState} />
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
