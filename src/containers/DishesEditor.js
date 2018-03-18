import { connect } from 'react-redux';
import DishesEditor from '../components/DishesEditor.jsx';

const mapStateToProps = (state) => ({ dishes: state.dishes.present.allIds.map(id => state.dishes.present.byId[id]) });

export default connect(mapStateToProps)(DishesEditor);