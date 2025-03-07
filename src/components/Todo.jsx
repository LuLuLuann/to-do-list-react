import { useState } from "react";

// if using destructuring 
// function Todo({title, completed}) {
// console.log(title, completed)

// A
// function Todo(todo) {
//C
function Todo({ title, completed, id, dispatch }) {
    // console.log(todo);

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);
    // const [isChecked, setIsChecked] = useState(false)

    // A
    // const {title, completed, id, dispatch} = todo;

    return (
        <div style={styles}>
<div className="toDoItemContainer">
            <input type="checkbox"
                checked={completed}
                onChange={() => dispatch({ type: 'toggle_todo', payload: id })}
            />

            {isEditing ? (
                <input
                    type="text"
                    className="editInput"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />) : (

                <h2
                    className="toDoItem"
                > {title}</h2>
            )}
            </div>
            <div className="editDeleteButtons">
            {isEditing ? (
                    <button
                        className="saveButton"
                        onClick={() => {
                            dispatch({ type: "edit_todo", payload: { id, title: editText } });
                            setIsEditing(false);
                        }}
                    >
                        Save
                    </button>
                ) : (
                    <>

                <button
                    className="editButton"
                    onClick={() => setIsEditing(true)}
                >Edit</button>

                <button
                    className="deleteButton"
                    disabled={!completed}
                    onClick={() => dispatch({ type: "delete_todo", payload: id })}
                >Delete</button>
            </>
                )}
        </div>
        </div>
    );
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'turquoise'
}

export default Todo;