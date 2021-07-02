import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './index.css';
import Mall from './Mall'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<Mall name="ФУЦ" />
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
