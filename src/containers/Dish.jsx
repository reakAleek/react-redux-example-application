import { connect } from 'react-redux';
import Dish from '../components/Dish.jsx';
import {
    removeDish, 
    updateDishName,
    updateDishPrice,
    updateDishAdditionalInfo
} from '../actions/dishes';

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => {
      dispatch(removeDish(id))
    },
    onChangeName: (id, name) => {
        dispatch(updateDishName(id, name))
    },
    onChangePrice: (id, price) => {
        dispatch(updateDishPrice(id, price))
    },
    onChangeAddInfo: (id, addInfo) => {
        dispatch(updateDishAdditionalInfo(id, addInfo))
    }
});

export default connect(null, mapDispatchToProps)(Dish);