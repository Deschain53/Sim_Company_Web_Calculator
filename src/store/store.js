import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { configReducer } from '../reducers/configReducer';
import { pricesReducer } from '../reducers/pricesReducer';
import { productionReducer } from '../reducers/productionReducer';
import { productReducer } from '../reducers/productReducer';
import { tableProductionReducer } from '../reducers/tableProductionReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({  //Se recomienda hacerlo de esta manera porque así en un
    conf: configReducer,
    prices: pricesReducer,
    products: productReducer,
    production: productionReducer,
    tableP: tableProductionReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(                        //Para trabajar acciones asinronas
        applyMiddleware(thunk)
    )
);