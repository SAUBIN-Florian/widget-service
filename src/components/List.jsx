import "../stylesheet/list.scss";

export default function List() {
  return (
    <div className="widget-list widget-window">
      <div className="header widget-drag">
        <h2>TODOLIST</h2>
      </div>
      <div className="widget-content">
        <form className="todo-form">
          <input type="text" placeholder="Enter your todo here..." />
          <input type="submit" value="New Todo"/>
        </form>
        <ul className="todo-list">
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
          <li>test 4</li>
          <li>test 5</li>
        </ul>
      </div>
    </div>
  )
}
