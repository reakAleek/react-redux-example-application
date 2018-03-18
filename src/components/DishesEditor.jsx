import React from 'react';
import PropTypes from 'prop-types';
import Dish from '../containers/Dish.jsx';
import UndoRedo from '../containers/UndoRedoDishes.jsx';
import AddDish from '../containers/AddDish.jsx';

const Dishes = ({ dishes }) => (
    <div>
        <UndoRedo />
            <ul>
                { 
                    dishes.map( (dish, index) => (
                        <li key={index}>
                            <Dish dish={dish} />
                        </li>)
                    )
                }
            </ul>
        <AddDish />
    </div>
);

Dishes.propTypes = { 
    dishes: PropTypes.array.isRequired,
 };

export default Dishes;
