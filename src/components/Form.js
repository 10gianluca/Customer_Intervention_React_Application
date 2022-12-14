import styles from "../style.module.css";
import shortid from 'shortid'
const Form =({todo, setTodo, todoList, setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name:todo,id:shortid.generate()}])
        console.log(todoList)
    };
    return(
        <div className={styles.todoform}>
            
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange}className={styles.todoinput} placeholder="Username"></input>
                <input value={todo} onChange={handleChange}className={styles.todoinput} placeholder="Password"></input>
                <button type="submit" className={styles.todobutton}>Login</button>
            </form>
        </div>)
}

export default Form;