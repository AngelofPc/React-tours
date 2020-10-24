import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './tourlist.scss'
import {tourData} from '../../tourData'

class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const {tours} =  this.state
    const sortedTours = tours.filter(tour => tour.id !== id)
    this.setState({
      tours:sortedTours
    })
  }


  render() {
    const {tours} = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}> </Tour>))}
      </section>
    )
  }
}

export default TourList
