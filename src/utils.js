import React, { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';

export function sid() {
    return (1 + Math.random() * 429496729125).toFixed().toString();
}

export function withData(WrappedComponent) {
    return (props) => {
        const [myData, setMyData] = useState({});
        // eslint-disable-next-line react/prop-types
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
