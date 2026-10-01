import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/Store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //Suspense 是因为我这里采用了懒加载的方式 而Provider是用来给给全局提供store数据的
      <Provider store={store}>
        <App></App>
      </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
