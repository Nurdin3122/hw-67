
import './App.css'

const App = () => (
    <div className="container">
        <div className="block-display">
            <h1 className="display">number</h1>
        </div>
        <div className="block-number">
            <div className="block-3">
                <button type="button" className="btn">7</button>
                <button type="button" className="btn">8</button>
                <button type="button" className="btn">9</button>
            </div>

            <div className="block-2">
                <button type="button" className="btn">4</button>
                <button type="button" className="btn">5</button>
                <button type="button" className="btn">6</button>
            </div>
            <div className="block-1">
                <button type="button" className="btn">1</button>
                <button type="button" className="btn">2</button>
                <button type="button" className="btn">3</button>
            </div>
            <div className="block-0">
                <button type="button" className="btn"> - </button>
                <button type="button" className="btn">0</button>
                <button type="button" className="btn">E</button>
            </div>
        </div>
    </div>
);

export default App
