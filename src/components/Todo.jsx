// if using destructuring 
// function Todo({title, completed}) {
// console.log(title, completed)

// A
// function Todo(todo) {
//C
function Todo({ title, completed, id, dispatch }) {
    // console.log(todo);

    // const [isChecked, setIsChecked] = useState(false)

    // A
    // const {title, completed, id, dispatch} = todo;

    return (
        <div style={styles}>

                <input type="checkbox"
                    checked={completed}
                    onChange={() => dispatch({ type: 'toggle_todo', payload: id })}
                />

                <h2
                    className="toDoItem"
                > {title}</h2>
           
            <div className="editDeleteButtons">
                <button
                    className="editButton"
                >Edit</button>

                <button
                    className="deleteButton"
                >Delete</button>
            </div>
        </div>
    )
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'turquoise'
}

export default Todo;