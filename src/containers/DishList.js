import { connect } from 'react-redux';
import DishList from '../components/DishList.jsx';

const mapStateToProps = (state) => ({
     dishes: state.dishes.present.allIds.map(id => state.dishes.present.byId[id])
});

export default connect(mapStateToProps)(DishList);