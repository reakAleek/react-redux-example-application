import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { undoDishes, redoDishes } from '../actions/dishes';

const buttonStyle = {};

const mapStateToProps = (state) => ({ 
    isUndoActive: state.dishes.past.length > 0,
    isRedoActive: state.dishes.future.length > 0
 });

const mapDispatchToProps = ({
    undo: undoDishes,
    redo: redoDishes
  });

const conditionalButton = (condition, onClick, text, icon) =>  (<button style={buttonStyle}
    disabled={!condition}
    className='button' 
    onClick={onClick}>
    <span className={ 'icon' }>
       { icon } 
    </span>
    <span>{ text }</span>
</button>);

let UndoRedoDishesButtons = ({ undo, redo, isUndoActive, isRedoActive }) => (
        <div className={'buttons'}>
            { 
                conditionalButton(
                    (isUndoActive), 
                    () => { undo() },
                    'Undo', 
                    <i className="fa fa-undo" aria-hidden="true"/>
                )
            }
            { 
                conditionalButton(
                    (isRedoActive), 
                    () => { redo() }, 
                    'Redo',
                    <i className="fa fa-repeat" aria-hidden="true"/>
                )
            }
        </div>    
);

UndoRedoDishesButtons.propTypes = {
    undo: PropTypes.func,
    redo: PropTypes.func,
    isUndoActive: PropTypes.bool,
    isRedoActive: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoDishesButtons);