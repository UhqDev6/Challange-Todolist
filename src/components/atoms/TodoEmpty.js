import ICTodoEmptyState from '../../assets/images/todo-empty-state.png';
const TodoEmpty = () => {
    return(
        <>
            <div data-cy='todo-empty-state' className="flex mx-auto justify-center mt-12">
                <img src={ICTodoEmptyState} alt="todo empty state" className='w-1/2'/>
            </div>
        </>
    );
}

export default TodoEmpty;