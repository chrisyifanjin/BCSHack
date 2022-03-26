import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "400px",
  height: "200px",
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        disableDefaultUI={true}
        style={mapStyles}
        initialCenter={{
          lat: 49.246292,
          lng: -123.116226, // Vancouver coords
        }}
      >
        <Marker
          key={1} // Need to be unique
          position={this.props.geo}
        ></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgao-aq8zyAUnJUCg335-tYIDAI5AJeAc",
})(MapContainer);
