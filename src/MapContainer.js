import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class MapContainer extends Component {
    static defaultProps = {
        style: {width: '100%', height: '500px'},
        center: { lat: -38.560926, lng: 174.983468 },
        zoom: 15
    };

    render() {
        return (
            <div className='google-map' style={this.props.style}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: [process.env.REACT_APP_GOOGLE_MAP_API_KEY] }}
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }>
                    <AnyReactComponent
                        lat={ -38.560926 }
                        lng={ 174.983468 }
                        text={ "Aria Village" }
                    />
                </GoogleMapReact>
            </div>
        )
    }
}



