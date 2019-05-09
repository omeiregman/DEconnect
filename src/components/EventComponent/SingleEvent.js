import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import { PulseLoader } from 'react-spinners';
import SingleEventCard from './SingleEventCard';//this constains the template for the single event
import EventCard from './EventCard';


class SingleEvent extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedEvent : {}
    }
    }

    componentWillMount() {
      this.props.getEvents();
    }

  render() {

    const selectedEventUrl = this.props.match.params.name;

    const { events, loading } = this.props.events
    console.log("this event", events)
     
    let selectedEventData, eventImage , name , startDate ,time ,location, Data, info ,eventsView;
 
        //console.log("wow",events[2]);
      if (events.length>0) {
        eventsView = events.slice(0, 3).map(event =>{
          return <EventCard 
                  key={event._id}
                  url={event.url}
                  name={event.name}
                  startDate={event.startDate}
                  location={event.location}
                  eventImage={event.eventImage}/>
        });
    }
   
    
    if (loading || events.length === 0) {
      return (<div className="event-loader">
        <span><PulseLoader
        color={'#EA5800'}
        loading={loading}
      /></span>
      <p>Loading Events</p>
    </div>);
    } else {
      if (events.length>0) {
        const findData = (event) => {
          const isEvent = t => t.url === selectedEventUrl;
          console.log("this is the event ",events.find(isEvent))
          return events.find(isEvent);
        }
        selectedEventData = findData(selectedEventUrl);
        console.log(selectedEventData.startDate);
        startDate = selectedEventData.startDate;
        eventImage=selectedEventData.eventImage;
        name=selectedEventData.name;
        time=selectedEventData.time;
        location=selectedEventData.location;
        info = selectedEventData.info;
      }
      Data={
        startDate:startDate,
        eventImage:eventImage,
        name:name,
        time:time,
        location:location,
        info:info
      }
      console.log("New: ",startDate);




    return(
      <div className="event-section">
      <div className="row pt-md-3  pl-md-5">
        <div className="col-md-12">
        <Link style={{color:"#EA5800",fontFamily:"Ubuntu"}}  to='/events'>Back to Events</Link>
        </div>
      </div>
        <SingleEventCard data={Data}/>
        <section className="pl-md-5 pr-md-5 pt-md-5">
        <header>
          <h4 style={{color:'#EA5800'}} className="m-md-3">Other Events</h4>
        </header>
         <div className="row">
             {eventsView}
          </div>
       </section>
      </div>
    );
    }
  }
}

Event.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { getEvents })(SingleEvent);
