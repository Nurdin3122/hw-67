
import './App.css'
import {useDispatch,useSelector} from "react-redux";
import {RootState} from "./app/store.ts";
import {addPinCode,checkPinCode} from "./PinCodeSlice/PinCode.ts";

const App = () => {
    const dispatch = useDispatch();
    const pinCode = useSelector((state: RootState) => state.pinCode.input);

    return (
        <div className="container">
            <div className="block-display">
                <h1 className="display">{pinCode}</h1>
            </div>
            <div className="block-number">
                <div className="block-3">
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('7')))} >7</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('8')))}>8</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('9')))}>9</button>
                </div>

                <div className="block-2">
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('4')))}>4</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('5')))}>5</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('6')))}>6</button>
                </div>
                <div className="block-1">
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('1')))}>1</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('2')))}>2</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('3')))}>3</button>
                </div>
                <div className="block-0">
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('-')))}> -</button>
                    <button type="button" className="btn" onClick={() => (dispatch(addPinCode('0')))}>0</button>
                    <button type="button" className="btn" onClick={() => (dispatch(checkPinCode()))}>E</button>
                </div>
            </div>
        </div>
    )

};

export default App
