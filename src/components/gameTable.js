import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
    render() {
        return (
            <div className="gameTable">
                <h4 className="gameTable--title">{this.props.game}</h4>
            </div>
        )
    }
}

Products.propTypes = {
    game: PropTypes.string,
    names: PropTypes.array,
    time: PropTypes.date,
}

export default Products;