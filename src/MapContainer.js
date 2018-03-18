import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './css/MapContainer.css'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;


export default class MapContainer extends Component {
    static defaultProps = {
        center: { lat: -38.560926, lng: 174.983468 },
        zoom: 14,
        options: {mapTypeControl: true,
            styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
        }
    };

    render() {
        return (
            <div className='google-map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: [process.env.REACT_APP_GOOGLE_MAP_API_KEY] }}
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                    options = {this.props.options}
                    >
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



