import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from './Components/Loader/Loader';

class Util {
    static sid() {
        return (1 + Math.random() * 429496729125).toFixed().toString();
    }

    static withData(WrappedComponent) {
        return (props) => {
            const [myData, setMyData] = useState({});
            const { promiseData, children, ...newProps } = props;

            useEffect(() => {
                promiseData().then((data) => {
                    setMyData(data);
                });
            }, []);

            newProps.data = myData;

            if (newProps.data.length) {
                return (
                    <WrappedComponent {...newProps}>
                        {children}
                    </WrappedComponent>

                );
            }
            return (<Loader />);
        };
    }
}

Util.propTypes = {
    promiseData: PropTypes.objectOf(PropTypes.shape).isRequired,
    children: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Util;
