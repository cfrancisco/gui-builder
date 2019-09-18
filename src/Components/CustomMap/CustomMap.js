import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';

const style = {
    width: '100%',
    height: '300px',
};


const CustomMap = ({ markersData, center, zoom }) => {
    // create map
    const mapRef = useRef(null);
    const xCenter = center || [49.8419, 24.0315];
    const xZoom = zoom || 16;

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: xCenter,
            zoom: xZoom,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }),
            ],
        });
    }, [xCenter, xZoom]);

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

    return <div id="map" style={style} />;
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
    ).isRequired,
    center: PropTypes.arrayOf(
        PropTypes.number,
    ).isRequired,
    zoom: PropTypes.number.isRequired,
};

export default CustomMap;
