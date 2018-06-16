import React, { Component } from 'react';
import Time from './format_time';

class Stopwatch extends Component {
  constructor(props){
      super(props);
      this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
      };
      //this.render();
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
      this.update = this.update.bind(this);
      this.reset = this.reset.bind(this);
  };
  render(){
    let { elapsed,status } = this.state;
    // let elapsed = this.state.elapsed;
    // let status = this.state.status;
    return (
        <div className='jumbotron'>
            <h1 className='display-3'><Time elapsed={elapsed}/></h1>
            <hr className='my-3'/>
            <p className='lead text-center'>{status}</p>
                <p className="text-center">
                    <button className='btn btn-outline-success mx-3' onClick={this.start}>Start</button>
                    <button className='btn btn-outline-danger mx-3' onClick={this.stop}>Stop</button>
                    <button className='btn btn-outline-warning mx-3' onClick={this.reset}>Reset</button>
                </p>
        </div>
    )
  }
  start(){
      const { start, elapsed } = this.state;
      let newStart = new Date().getTime();
      if (start){
          newStart = newStart - elapsed;
      }
        this.setState({
            status : 'running',
            start : newStart
        });
      setTimeout(() => {
          this.update();
      }, 100);
      //setTimeout(this.update, 100);//setTimeout(function(){this.update}, 10);
  }
  stop(){
        this.setState({
            status : 'stopped'
        })
  }
  update(){
        const{ status, start } = this.state;
        if (status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start,
        });
        setTimeout(this.update, 10);//setTimeout(function(){this.update}, 10);doesn't work
        }
  }
  reset(){
      this.setState({
          status: 'stopped',
          start: null,
          elapsed: 0
      });
  }
}

export default Stopwatch;