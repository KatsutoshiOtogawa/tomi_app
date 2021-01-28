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
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <div>
     <Typography variant="h4" >ここは十味ちゃんの非公式ファンサイトです。</Typography>
     <p>
       十味ちゃんのTwitter,インスタグラムなどなどいろいろなSNSをこれで追う事ができます。😆
       twitter,インスタグラムなどの面倒な登録をせずに!
     </p>
    </div>
  );
}
