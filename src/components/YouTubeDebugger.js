// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }//state

  }//constructor

  handleBitrate = (event) => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  handleResolution = (event) => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
