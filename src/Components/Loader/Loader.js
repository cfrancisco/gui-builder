import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
//import React from 'react';
//import PacmanLoader from '@bit/davidhu2000.react-spinners.pacman-loader';

function _Loader() {
    return (<div>
        "loader"
        </div>
        // <PacmanLoader
        //     size='60'
        // color='#6b5ce7'
        // css={{width:"260px !important", height:"130px !important"}}
        // />
    );
}


    // function enhanceTheme(WrappedComponent) {
    //     return class extends Component {
    //     render() {
    //         return (<div>asdsad
    //             <WrappedComponent className={classes.root}/>
    //             </div>);
    //     }
    //     }
    // }

    // const Loader = enhanceTheme(_Loader);
    
    export default _Loader;