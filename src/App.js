import "./styles.css";
import { createContext, CSSProperties, useState, useRef } from "react";
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

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import MyTextEditor from "./myTextEditor"
export const SessionContext = createContext({ name: "aaa" });


// clip: "rect(50px 400px 200px 100px)"
export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Container>
          <Box my={2}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
      </Container>
        </Navbar>
      </BrowserRouter>
      <MyTextEditor />
      
    </div>
  );
}
