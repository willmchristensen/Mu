import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import { authenticate } from "./store/session";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import EventDetails from "./components/EventDetails";
import PostDetails from "./components/PostDetails";
import MusicDetails from "./components/MusicDetails";
import Magazine from "./components/Magazine";
import Music from "./components/Music";
import CreateEventPage from "./components/CreateEventPage";
import CreatePostPage from "./components/CreatePostPage";
import CreateMusicPage from "./components/CreateMusicPage";
import MyTickets from "./components/MyTickets";
import Tickets from "./components/Tickets";
import SplashPage from "./components/SplashPage";
import Footer from "./components/Footer";
import SuccessPage from "./components/SuccessPage";

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
          <Route path={["/events/:eventId/edit","/events/new"]} exact>
            <CreateEventPage />
          </Route>
          <Route path={["/posts/:postId/edit","/posts/new"]} exact>
            <CreatePostPage />
          </Route>
          <Route path={["/music/:musicId/edit","/music/new"]}>
            <CreateMusicPage />
          </Route>
          <Route path="/events/:eventId" exact>
            <EventDetails />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route path="/music/:musicId">
            <MusicDetails />
          </Route>
          <Route path='/shop/cart'>
            <Tickets />
          </Route> 
          <Route path='/my-tickets'>
            <MyTickets />
          </Route> 
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/register">
            <SignupFormPage />
          </Route>
          <Route path="/events">
            <MainContent />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path='/success'>
            <SuccessPage />
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
