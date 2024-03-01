import './Body.css'
import ToDoInput from "../ToDoInput/ToDoInput.jsx";
import ToDoContainer from "../ToDoContainer/ToDoContainer.jsx";


function Body() {
    return (
        <div id="body-container">
            <ToDoContainer></ToDoContainer>
            <ToDoInput></ToDoInput>
        </div>
    )
}

export default Body