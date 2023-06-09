import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import { authenticate } from "./store/session";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import EventDetails from "./components/EventDetails";
import PostDetails from "./components/PostDetails";
import Magazine from "./components/Magazine";
import CreateEventPage from "./components/CreateEventPage";
import CreatePostPage from "./components/CreatePostPage";
// import EditEventPage from "./components/EditEventPage";
// import Tickets from "./components/Tickets";
import SplashPage from "./components/SplashPage";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, []);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path={["/events/:eventId/edit","/events/new"]} exact>
            <CreateEventPage />
          </Route>
          <Route path={["/posts/:postId/edit","/posts/new"]} exact>
            <CreatePostPage />
          </Route>
          <Route path="/events/:eventId" exact>
            <EventDetails />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          {/* <Route path="/create-post">
            <CreatePostPage />
          </Route> */}
          {/* <Route path="/tickets">
            <Tickets />
          </Route>  */}
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/register">
            <SignupFormPage />
          </Route>
          <Route path="/events">
            <MainContent />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
