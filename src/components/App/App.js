import React, { Component } from 'react';
import './App.css';
import { Button } from '../Button/Button';
import { CardGrid } from '../CardGrid/CardGrid';
import { Scroller } from '../Scroller/Scroller';
import { crawlCleaner } from '../../dataCleaners.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      people: {},
      planets: {},
      vehicles: {},
      favorites: {},
      movieCrawls: []
    }
  }

  setCrawlState(dataObj) {
    let cleanCrawlData = crawlCleaner(dataObj);
    this.setState({movieCrawls: cleanCrawlData})
  }

  componentWillMount() {
    const filmApi = 'http://www.swapi.co/api/films';
    fetch(filmApi)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        this.setCrawlState(data)
      })
      .catch((error) => {
        alert('film api busted')
      })
  }

  render() {
    return (
      <main id="App">
        <header className="App-header">
          <h2>SWAPI-Box</h2>
          <Button />
        </header>
        <section className='scroller-cards-holder'>
          <article className='scroller'>
            <Scroller crawlText={this.state.movieCrawls}/>
          </article>
          <article className='buttons'>
            <Button />
            <Button />
            <Button />
          </article>
          <CardGrid />
        </section>
      </main>
    );
  }
}

export default App;
