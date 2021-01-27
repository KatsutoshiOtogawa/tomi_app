import "./styles.css";
import { createContext, CSSProperties } from "react";
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

export default function Home() {
  return <h2>home</h2>;
}
