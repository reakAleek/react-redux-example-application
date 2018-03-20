import { connect } from 'react-redux';
import Dish from '../components/Dish.jsx';
import {
    removeDish, 
    updateDish
} from '../actions/dishes';

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => dispatch(removeDish(id)),
    onChangeName: (id, name) => dispatch(updateDish(id, { name })),
    onChangePrice: (id, price) =>  dispatch(updateDish(id, { price })),
    onChangeAddInfo: (id, addInfo) => dispatch(updateDish(id, { addInfo })),
    onChangeVeggie: (id, veggie) => dispatch(updateDish(id, { veggie })),
    onChangeHot: (id, hot) => dispatch(updateDish(id, { hot: Number(hot) }))
});

export default connect(null, mapDispatchToProps)(Dish);