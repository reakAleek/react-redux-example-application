import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';

const veggie = (value, onChange) => (
    <div className="field is-expanded has-addons">
        <div className="control">
            <span className="select is-small">
                <select value={value} onChange={ ev => onChange(ev.target.value) }>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
            </span>
        </div>
        <div className="control">
            <Tooltip title="Veggy"
                position="top"
                trigger="mouseenter"
                delay="150"
                style={{cursor: 'help'}}>
                <a className="button is-small is-static">
                    <span className="icon">
                        <i className="fa fa-leaf has-text-success" aria-hidden="true"></i>
                    </span>
                </a>
            </Tooltip>
        </div>
    </div>
);


const hotness = (value, onChange) => (
    <div className="field is-expanded has-addons">
        <div className="control">
            <span className="select is-small">
                <select value={value} onChange={ ev => onChange(ev.target.value)}>
                    <option value={0}>No</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </span>
        </div>
        <div className="control">
            <Tooltip title="Hot"
                    position="top"
                    trigger="mouseenter"
                    delay="150"
                    style={{cursor: 'help'}}>
                <a className="button is-small is-static">
                    <span className="icon">
                        <i className="fa fa-fire has-text-danger" aria-hidden="true"></i>
                    </span>
                </a>
            </Tooltip>
        </div>
    </div>
);

const nameInput = (dish, onChangeName) => (
    <input className='input' 
                            value={dish.name}
                            onChange={ ev => onChangeName(dish.id, ev.target.value) }
                            placeholder='Name' />
)

const Dish = ({ dish, onRemove, onChangeName, onChangePrice, onChangeAddInfo, onChangeHot, onChangeVeggie }) => (
    <div className='box' style={{marginBottom: '1rem'}}>
            <div className="field is-grouped">
                <p className="control is-expanded">
                    { nameInput(dish, onChangeName)}
                </p>
                <p className="control">
                    <button className="button is-danger"
                            onMouseDown={ () => onRemove(dish.id) }>
                            <span className="icon">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                    </button>
                </p>
            </div>

            <div className="field has-addons">
                <p className="control is-expanded">
                    <input className='input'
                            type='number'
                            step='0.01'
                            min='0'
                            value={dish.price}
                            onChange={ ev => onChangePrice(dish.id, ev.target.value) }
                            placeholder='Price' />
                </p>
                <p className="control">
                    <a className="button is-static">
                    <span className="icon">
                        <i className="fa fa-eur" aria-hidden="true"/>
                    </span>
                    </a>
                </p>
            </div>

            <div className="field">
                <div className="control">
                    <textarea style={{resize: 'none', height: '3rem', transition: 'height 125ms ease-in-out'}}
                        rows="1" 
                        className="textarea" 
                        placeholder="Additional infos..."
                        value={dish.addInfo}
                        onChange={ ev => onChangeAddInfo(dish.id, ev.target.value)}
                        onFocus={ ev => ev.target.style.height = '10rem' }
                        onBlur={ ev => {ev.target.style.height = '3rem'; ev.target.scrollTop = 0; } }
                        ></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    { veggie(dish.veggie, (value) => onChangeVeggie(dish.id, value)) }
                </div>
                <div className="control">
                    { hotness(dish.hot, (value) => onChangeHot(dish.id, value)) }
                </div>
            </div>
    </div>
);

const dishPropType = PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number
})

Dish.propTypes = { 
    dish: dishPropType.isRequired,
    onRemove: PropTypes.func,
    onChangeName: PropTypes.func,
    onChangePrice: PropTypes.func,
    onChangeAddInfo: PropTypes.func,
    onChangeVeggie: PropTypes.func,
    onChangeHot: PropTypes.func
};

export default Dish;
