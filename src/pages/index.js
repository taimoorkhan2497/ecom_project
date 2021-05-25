import React from 'react';
import PropTypes from 'prop-types';
import IndexHeader from "components/Headers/IndexHeader.js";

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <IndexHeader />
            </div>
        );
    }
}

index.propTypes = {};

export default index;
