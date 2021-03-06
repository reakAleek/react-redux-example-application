import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const dishItem = (dish, index) => {
    return (dish.name) ? 
        (
            <li className="dish-item" key={index}>
                <div className="dish-item__label is-size-5">
                    <span>{ dish.name }</span>
                    <span>{ !dish.price || '€' } { dish.price.replace('.', ',') }</span>
                </div>
                <div style={{whiteSpace: 'pre-line'}} className="dish-item__additional-info has-text-grey-light">
                    { dish.addInfo }
                </div>
                <div>
                        { (dish.veggie) ? (<span className="icon"><i className="fa fa-leaf has-text-success" aria-hidden="true"/></span>) : null }
                        { Array.apply(null, Array(dish.hot)).map( (_, index) => <span key={index} className="icon"><i className="fa fa-fire has-text-danger" aria-hidden="true"/></span>) }
                    </div>
            </li>
        )
    : null;
}


const Preview = ({ dishes }) => (
    <div className="columns is-centered">
        <div className="column is-6">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Menu
                    </p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fa fa-angle-down" aria-hidden="true"/>
                        </span>
                    </a>
                </header>
                <div className="card-content" style={{minHeight: '5rem'}}>
                    <div>
                        { (dishes.length > 0) ? '' : 'No content'}
                    </div>
                    <ul className="dish-list">
                        {
                            dishes.map(dishItem)
                        }
                    </ul>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                        <span className="icon">
                            <i className="fa fa-heart-o has-text-danger" aria-hidden="true"/>
                        </span>
                    </a>
                    <a href="#" className="card-footer-item">
                        <span className="icon">
                            <i className="fa fa-info-circle has-text-info" aria-hidden="true"/>
                        </span>
                    </a>
                </footer>
            </div>
        </div>
    </div>
)

Preview.propTypes = {
    dishes: PropTypes.array
}

const mapStateToProps = (state) => ({ dishes: state.dishes.present.allIds.map(id => state.dishes.present.byId[id])  });
export default connect(mapStateToProps)(Preview);