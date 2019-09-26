import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import Util from '../../utils';


const CustomMap = ({ markersData, center, zoom }) => {
    // create map
    const sid = Util.sid();
    const mapRef = useRef(sid);
    const xCenter = center || [49.8419, 24.0315];
    const xZoom = zoom || 16;
    const style = {
        width: '100%',
        height: '100%',
    };

    useEffect(() => {
        mapRef.current = L.map(sid, {
            center: xCenter,
            zoom: xZoom,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }),
            ],
        });
    }, [xCenter, xZoom, sid]);

    // add layer
    const layerRef = useRef(null);
    useEffect(() => {
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);

    // update markers
    useEffect(
        () => {
            layerRef.current.clearLayers();
            markersData.forEach((marker) => {
                L.marker(marker.latLng, { title: marker.title }).addTo(
                    layerRef.current,
                );
            });
        },
        [markersData],
    );

    return <div ref={mapRef} id={sid} style={style} />;
};

CustomMap.propTypes = {
    markersData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            latLng: PropTypes.shape({
                lat: PropTypes.number.isRequired,
                lng: PropTypes.number.isRequired,
            }).isRequired,
        }),
    ),
    center: PropTypes.arrayOf(
        PropTypes.number,
    ),
    zoom: PropTypes.number,
};

CustomMap.defaultProps = {
    markersData: [],
    zoom: 12,
    center: [49.8419, 24.0315],
};


export default CustomMap;
