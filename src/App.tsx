import "./index.less"
function App() {
    console.log(process.env.REACT_APP_BASE_URL);  
    return  <div className="root">
        <div className="box">
            <p>
               Hello World! I Am SU AN Engineer!
            </p>
        </div>
    </div>
}
export default App;
