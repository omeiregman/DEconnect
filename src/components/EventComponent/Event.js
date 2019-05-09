import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import { PulseLoader } from 'react-spinners';

import EventCard from './EventCard';
import './css/event.css';


class Event extends Component {

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, loading } = this.props.events
    let eventData;

    if (loading) {
      return (<div className="event-loader">
        <span><PulseLoader
        color={'#EA5800'}
        loading={loading}
      /></span>
      <p>Loading Events</p>
    </div>);
    } else {
      if (events.length>0) {
        eventData = events.map(function(event, i){
          return <EventCard
                  key={event._id}
                  url={event.url}
                  name={event.name}
                  startDate={event.startDate}
                  location={event.location}
                  eventImage={event.eventImage}/>
        })
      }
    }

    return(
      <div className="event-section">
        <header className="event-header">
          <h2 className="page-head-hero">Events</h2>
        </header>

        <section>
          <div className="container">
          <h3 className="event-section-header">Upcoming Events</h3>
          <div className="row">
            {eventData}
          </div>
        </div>
        </section>
        <br></br>
      </div>
    );
  }
}

Event.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { getEvents })(Event);
