import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDish } from '../actions/dishes';

const buttonStyle = { width: '100%' }


let AddDish = ({ dispatch }) => (
        <button style={buttonStyle}
                className='button is-success' 
                onMouseDown={ () => dispatch(addDish()) }>
                <span className="icon"></span>
                Add Dish
        </button>
);

AddDish.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(AddDish);