import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTickets, getOneTicket } from '../../store/ticket'; 

const MyTickets = () => {
  const dispatch = useDispatch();
  const userEvents = useSelector((state) => state.ticket.userTickets); 
  const user = useSelector((state) => state.session.user);
  const events = Object.values(userEvents);

  useEffect(() => {
    dispatch(getUserTickets(user.id));
  }, [dispatch, user]);

  return (
    <div>
      <h2>My Tickets</h2>
      {events.map(e => {
        return (
          <h1>{e.title}</h1>
        )
      })}
    </div>
  );
};

export default MyTickets;
