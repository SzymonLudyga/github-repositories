import React from 'react';
import PropTypes from 'prop-types';

function RoutesProvider({ children }) {
    return <>{children}</>;
}

RoutesProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export default RoutesProvider;
