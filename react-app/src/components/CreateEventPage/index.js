import "./CreateEventPage.css";
import ContentHeader from "../ContentHeader";
import FormNavBar from "../FormNavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../store/event";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { editOneEvent } from "../../store/event";
import { getOneEvent } from "../../store/event";

const CreateEventPage = () => {
  const { eventId } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [formTitle, setFormTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const event = useSelector((state) => state.event.singleEvent);
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  // start submit--------------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = {
      title: title,
      description: description,
      date: date,
      location: location,
      image_url: imageUrl,
      owner_id: currentUser.id,
    };
    const payload = { eventId: eventId, item: data };
    // ------------------------TIME VALIDATION------------------------
    // if the user's event is before the current day
    // (time is not considered, so we new Date.setHours(0,0,0,0) of both dates to 0)
    // disable the button
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setIsDisabled(true);
      return;
    }
    // -----------------------EDIT CASE-----------------------
    // if ANY state variable is empty: disable the form button
    // else: dispatch EDIT event and redirect to events
    if (eventId) {
      if (!title || !description || !imageUrl || !date || !location) {
        setIsDisabled(true);
      } else {
        await dispatch(editOneEvent(payload)).then(history.push("/events"));
      }
      // -----------------------CREATE CASE-----------------------
      // if ANY state variable is empty: disable the form button
      // else: dispatch CREATE event and redirect to events
    } else {
      if (!title || !description || !imageUrl || !date || !location) {
        setIsDisabled(true);
      } else {
        await dispatch(createEvent(data)).then(history.push("/events"));
      }
    }
  };
  // end submit--------------------------------------------------------------------------------

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/events");
  };
  // change of page title based on presence of eventID --------------------------------------------------------------------------------
  useEffect(() => {
    if (eventId) {
      dispatch(getOneEvent(eventId));
      setFormTitle("Edit Event");
    } else {
      setFormTitle("Create Event");
    }
  }, [dispatch, eventId]);

  // change of page state variables based on presence of eventID --------------------------------------------------------------------------------
  useEffect(() => {
    if (eventId && event) {
      const eventDate = event.date
        ? new Date(event.date).toISOString().split("T")[0]
        : "";
      setDate(eventDate);
      setTitle(event.title);
      setDescription(event.description);
      setLocation(event.location);
      setImageUrl(event.imageUrl);
    }
  }, [eventId, event]);

  // EMPTY STATE VARIABLES ERROR HANDLING && DATE before today ERROR
  useEffect(() => {
    if (isSubmitted) {
      const errors = {};
      if (!title) errors.title = "Title is required";
      if (!description) errors.description = "Description is required";
      if (!imageUrl) errors.imageUrl = "Image is required";
      if (!location) errors.location = "Location is required";
      if (!date) {
        errors.date = "Date is required";
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          errors.date = "Date must be after today";
        }
      }
      setErrors(errors);
      setIsDisabled(Object.values(errors).length > 0);
    }
  }, [isSubmitted, title, description, imageUrl, date, location]);

  // guard clause: simplistic user validation
  if (!currentUser) history.push("/");

  return (
    <div className="create-event-container">
      <FormNavBar pages={["Lineup", "Details", "Profile", "Promotional"]} />
      <form className="create-event-form" onSubmit={handleSubmit}>
        <ContentHeader content={formTitle} />
        <div className="form-section">
          <div className="form-row-column">
            <label for="title">Title</label>
            {errors.title && <span className="errors"> {errors.title} </span>}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-row-column">
            <label for="description">Description</label>
            {errors.description && (
              <span className="errors"> {errors.description} </span>
            )}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-row-column">
            <label for="date">Date</label>
            {errors.date && <span className="errors"> {errors.date} </span>}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-row-column">
            <label for="location">Location</label>
            {errors.location && (
              <span className="errors"> {errors.location} </span>
            )}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-row-column">
            <label for="imageUrl">Image</label>
            {errors.imageUrl && (
              <span className="errors"> {errors.imageUrl} </span>
            )}
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-buttons">
          <button
            type="cancel"
            className="oval-button-area small-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="oval-button-area small-button"
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
