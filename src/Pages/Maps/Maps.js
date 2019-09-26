import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import L from 'leaflet';
import Paper from '@material-ui/core/Paper';
import CustomMap from '../../Components/CustomMap/CustomMap';
import 'leaflet/dist/leaflet.css';

const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

// Fixes provided by https://github.com/PaulLeCam/react-leaflet/issues/453
// in order to avoid use CDN request (via <link>)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 20,
    },
    leaflet: {
        height: '100%',
        width: '100%',
    },
    gridItem: {
        height: '250px',
        width: '250px',
        alignItems: 'stretch',

    },
    paper: {
        height: '100%',
        width: '100%',
        padding: theme.spacing(1),
        overflow: 'hidden',
    },
    grid: {
        alignItems: 'stretch',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)',
        },
    },
});

const useStyles = makeStyles(styles);

const Maps = () => {
    const classes = useStyles();
    const data = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };
    const [center] = useState([49.8419, 24.0315]);
    const [markersData, setMarkersData] = useState([]);

    useEffect(() => {
        const addMarker = (i) => ({
            title: String(i + 1),
            latLng: {
                lat: center[0] + 0.001 * i,
                lng: center[1] + 0.001 * i,
            },
        });

        const auxMarker = [];
        [1, 2, 3, 4, 5].forEach((i) => {
            auxMarker.push(addMarker(i));
        });
        setMarkersData(auxMarker);
    }, []);

    return (
        <div className={classes.root}>
            <Grid
                container
                alignItems="center"
                className={classes.grid}
            >
                <Grid className={classes.gridItem} item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Map className={classes.leaflet} center={center} zoom={data.zoom}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                            />
                            {markersData.map((pos) => (
                                <Marker
                                    key={pos.title}
                                    position={pos.latLng}
                                    title={pos.title}
                                >
                                    <Popup>
                                        <span>
                                            A pretty CSS3 popup.
                                        </span>
                                    </Popup>
                                </Marker>
                            ))}
                        </Map>
                    </Paper>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <CustomMap markersData={markersData} zoom={data.zoom} center={center} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Maps;
