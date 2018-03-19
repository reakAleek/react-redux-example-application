import React from 'react';
// import Count from '../containers/Count';
// import Buttons from '../containers/Buttons';
import Preview from '../containers/Preview.jsx';
import UndoRedoDishesButtons from '../containers/UndoRedoDishesButtons.jsx';
import AddDishButton from '../containers/AddDishButton.jsx';
import DishList from '../containers/DishList';

const App = () => (
    <div>
        <div style={{padding: '1rem 0 0 0'}}>
            <nav className="level">
                <p className="level-item has-text-centered">
                    <a className="button is-small" target="_blank" rel="noopener noreferrer" href="https://github.com/reakAleek/react-redux-example-application">
                        <span className="icon">
                        <i className="fa fa-github"></i>
                        </span>
                        <span>GitHub</span>
                    </a>
                </p> 
            </nav>
        </div>
        <div className="section">
            <div className="container is-fluild">
                <div className='columns'>
                    <div className='column is-4' style={{ backgroundColor: 'whitesmoke' }}>
                        <UndoRedoDishesButtons />
                        <DishList />
                        <AddDishButton />
                    </div>
                    <div className='column is-8' style={{ backgroundColor: 'lightslategrey' }}>
                        <Preview />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;
