import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">

        <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
           <span className="ion-skip-backward"></span>
         </button>
         <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
         </button>
         <button id="next" onClick={this.props.handleNextClick}>
           <span className="ion-skip-forward"></span>
         </button>
       </section>

       <section id="time-control">
         <div className="current-time">{this.props.currentTimeFormatted}</div>
         <input
          type="range"
          className="seek-bar"
          value={(this.props.currentTime / this.props.duration) || 0}
          max="1"
          min="0"
          step="0.01"
          onChange={this.props.handleTimeChange}
         />
         <div className="total-time">{this.props.durationFormatted} </div>
       </section>

       <section id="volume-control">
         <input
          type="range"
          className="seek-bar"
          value={this.props.volume}
          max="1"
          min="0"
          step=".01"
          onChange={this.props.handleVolumeChange}
         />
         <div className={this.props.volume >= 0.5 ? "icon ion-volume-high" : this.props.volume  >= 0.1 ? "icon ion-volume-low" : "icon ion-volume-mute"}></div>
       </section>

      </section>
    );
  }
}

export default PlayerBar;
