import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Overlay = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    z-index: 10000;
    background-color: lightgray;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

interface ILoadingIndicatorProps {
    loading: boolean;
}

const LoadingIndicator: React.FC<ILoadingIndicatorProps> =
    ({ loading = false, children }) => {
    return (
        <React.Fragment>
            {children}
            { loading && 
                <Overlay>
                    <CircularProgress thickness={4.5} size={50} />
                </Overlay> }
        </React.Fragment>
    );
};

export default LoadingIndicator;