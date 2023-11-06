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
  useEffect(() => {
    dispatch(getUserTickets(user?.id));
  }, [dispatch, user]);
  if(!user) history.push('/');
  return (
    <div className='my-tickets-container'>
      <PageHeader header={'My Tickets'} />
      {
        events.map(e => {
          return (
            <Ticket event={e} userId={user.id}/>
          )
        })
      }
    </div>
  );
};

export default MyTickets;
