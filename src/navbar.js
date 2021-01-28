import "./styles.css";
import { createContext, CSSProperties,cloneElement } from "react";
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
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';


import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,

// };

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className="aaa">
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link className="navbar-brand" to="/">
            <Typography variant="h6" className={classes.title}>
            非公式サイト
            </Typography>
            </Link>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        {/*  enbed from children tag ex) <Navbar><childrentags> </Navbar>  */}
        {props.children}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      </div>
  //     <div className="fixed-top">
  //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //         <Link className="navbar-brand" to="/">
  //           十味ちゃん非公式サイト
  //         </Link>

  //         <button
  //           className="navbar-toggler"
  //           type="button"
  //           data-toggle="collapse"
  //           data-target="#navbarSupportedContent"
  //           aria-controls="navbarSupportedContent"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span className="navbar-toggler-icon"></span>
  //         </button>

  //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul className="navbar-nav mr-auto">
  //             <li className="nav-item active">
  //               <a className="nav-link" href="/">
  //                 Home <span className="sr-only">(current)</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/tomis/instagrams/">
  //                 Instagram
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/tomis/twitters/">
  //                 Twitter
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/tomis/bbs/">
  //                 BBS(掲示板)
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link disabled" href="/">
  //                 工事中
  //               </a>
  //             </li>
  //           </ul>
  //           <form className="form-inline my-2 my-lg-0">
  //             <input
  //               className="form-control mr-sm-2"
  //               type="search"
  //               placeholder="Search"
  //               aria-label="Search"
  //             />
  //             <button
  //               className="btn btn-outline-success my-2 my-sm-0"
  //               type="submit"
  //             >
  //               Search
  //             </button>
  //           </form>
  //         </div>
  //       </nav>
  //       <Link className="dropdown-item" to="/tomis">
  //         十味ちゃん
  //       </Link>
  //       <Switch>
  //         <Route path="/tomis">
  //           <Tomis />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>

  //       {/* <ReactCrop
  // src="https://pbs.twimg.com/media/ErHyPomVgAAeFVx?format=jpg&name=large"
  // onChange={console.log("aaa")}
  // crop={}
  // /> */}
  //     </div>
  );
}
