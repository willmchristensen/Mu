import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
// import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import EventDetails from "./components/EventDetails";
import PostDetails from "./components/PostDetails";
import Magazine from "./components/Magazine";
import CreateEventPage from "./components/CreateEventPage";
import EditEventPage from "./components/EditEventPage";
import Tickets from "./components/Tickets";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/events/:eventId">
            <EventDetails />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route path="/create-event">
            <CreateEventPage />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route> 
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/register">
            <SignupFormPage />
          </Route>
          <Route path="/">
            <MainContent />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
