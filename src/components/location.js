import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 9.423907081534425,
      lng: 76.57539899663004
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBxZSdyU4YnDledyVUlU_WIWQaS6OjIE7o" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={9.423907081534425}
            lng={76.57539899663004}
            
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;