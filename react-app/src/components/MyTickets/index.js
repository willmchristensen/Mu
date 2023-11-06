import './MyTickets.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getUserTickets } from '../../store/ticket'; 
import PageHeader from '../PageHeader';
import {NavLink} from 'react-router-dom';
import Ticket from './Ticket';

const MyTickets = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userEvents = useSelector((state) => state.ticket.userTickets); 
  const user = useSelector((state) => state.session.user);
  const events = Object.values(userEvents);
  console.log('events in mytickets', events.length > 0);
  useEffect(() => {
    dispatch(getUserTickets(user?.id));
  }, [dispatch, user]);
  if(!user) history.push('/');
  return (
    <div className='my-tickets-container'>
      <PageHeader header={'My Tickets'} />
      {events.length > 0 ?
        events.map(e => {
          return (
            <Ticket event={e} userId={user.id}/>
          )
        }) :
        <>
          <h1>You havent bought any tickets yet!</h1>
          <NavLink 
            className="oval-button"
            to={'/events'}
          >View events</NavLink>
        </>
      }
    </div>
  );
};

export default MyTickets;
