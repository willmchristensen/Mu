import './MyTickets.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserTickets } from '../../store/ticket'; 
import PageHeader from '../PageHeader';
import {NavLink} from 'react-router-dom';

const MyTickets = () => {
  const dispatch = useDispatch();
  const userEvents = useSelector((state) => state.ticket.userTickets); 
  const user = useSelector((state) => state.session.user);
  const events = Object.values(userEvents);

  useEffect(() => {
    dispatch(getUserTickets(user.id));
  }, [dispatch, user]);

  return (
    <div className='my-tickets-container'>
      <PageHeader header={'My Tickets'} />
      {
        events.map(e => {
          return (
            <NavLink 
              class='big-title'
              to={`events/${e.id}`}
            ><h1>{e.title}</h1>
            </NavLink >
          )
        })
      }
    </div>
  );
};

export default MyTickets;
