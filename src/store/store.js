import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { configReducer } from '../reducers/configReducer';
import { pricesReducer } from '../reducers/pricesReducer';
import { productionReducer } from '../reducers/productionReducer';
import { productReducer } from '../reducers/productReducer';
import { retailReducer } from '../reducers/retailReducer';
import { tableProductionReducer } from '../reducers/tableProductionReducer';
import { tableRetailReducer } from '../reducers/tableRetailReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({  //Se recomienda hacerlo de esta manera porque así en un
    conf: configReducer,
    prices: pricesReducer,
    products: productReducer,
    production: productionReducer,
    tableP: tableProductionReducer,
    retail: retailReducer,
    tableR: tableRetailReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(                        //Para trabajar acciones asinronas
        applyMiddleware(thunk)
    )
);