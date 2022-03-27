import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapStyles = {
  width: "400px",
  height: "200px",
};

export class MapContainer extends React.Component {
  render() {
    const randomLat = Math.random() * (492689 - 492328) + 492328;
    const randomLng = Math.random() * (-1232143 - -1230916) + -1230916;
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
          position={{
            lat: randomLat / 10000,
            lng: randomLng / 10000,
          }}
        ></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgao-aq8zyAUnJUCg335-tYIDAI5AJeAc",
})(MapContainer);
