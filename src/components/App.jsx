import React from 'react';
// import Count from '../containers/Count';
// import Buttons from '../containers/Buttons';
import DishesEditor from '../containers/DishesEditor';
import Preview from '../containers/Preview.jsx';


const App = () => (
    <div className="section">
        <div className="container is-fluild">
            <div className='columns'>
                <div className='column is-4' style={{ backgroundColor: 'whitesmoke' }}>
                        <DishesEditor />
                </div>
                <div className='column is-8' style={{ backgroundColor: 'lightslategrey' }}>
                        <Preview />
                </div>
            </div>
        </div>
    </div>
);

export default App;
