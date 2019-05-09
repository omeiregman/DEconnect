import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SingleEventCard extends Component {
  render() {
      const {data} =this.props;
      const style={
          color:" #A97C6C",
          fontFamily:"Ubuntu",
          fontSize:"24px"
      }
    return (
        <div>
        <section className=" pl-md-5 pr-md-5 pt-md-3"> 
        <header className="single-event-header">
        <div className="row">
       
        <div className="col-md-12 ">
         <div style={{overflow:"hidden"}} className="card"> 
          <div className="row">
            <div style={{padding:"0px"}}  className="col-lg-8 col-sm-8">
              <img style={{width:"100%",height:"auto"}} src={data.eventImage} />
            </div>
            <div style={{backgroundColor:"#EA5800",paddingTop:"130px",fontFamily:" Ubuntu"}} className="col-lg-4 col-sm-4 ">
              <div style={{color:"#fff"}}>
                <h4>{data.name}</h4>
                <h6>{data.startDate}</h6>
                <p>{data.time}</p>
              </div>
                <aside><i className="material-icons">location_on</i>{data.location}</aside>
               
            </div>
          </div>
          <div className="row">
             <div className="col-md-12">
                    <br/>
                    <br/>
             </div>
          </div>
        </div>
        </div>
      </div>
        </header>

      {/**  <br></br>
        <br></br>
        <br></br>   */}
        {/* <h2>{console.log(selectedEventData.name)}</h2> */}
        <h3>
          {/* {selectedEventData.url} */}
        </h3>

      </section>

      <section className=" pl-md-5 pr-md-5 pt-md-5 mt-md-4">
        <div className="card p-md-5">
          <div className="row">
             <div className="col-md-8">
               <h6 style={style}>Description</h6>
               <article style={{paddingRight:"20px",textAlign:"justify"}}>
                   {data.info}
               </article>
             </div>
             <div className="col-md-4">
               <h6 style={style}>Date and Time</h6>
               <aside>
                   <p>{data.startDate}
                     <br/>
                     {data.time}
                     <br/>
                  <Link style={{color:"#EA5800"}} to="/">Add to Calendar</Link>
                   </p>
                  
               </aside>
               <h6 style={style}>Location</h6>
               <aside>
                    <p>{data.location}</p>
               </aside>
             </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}
