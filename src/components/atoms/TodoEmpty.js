import ICTodoEmptyState from '../../assets/images/todo-empty-state.png';
const TodoEmpty = () => {
    return(
        <>
            <div data-cy='todo-empty-state' className="flex w-full mx-auto justify-center mt-12 cursor-pointer">
                <img src={ICTodoEmptyState} alt="todo empty state" className='sm:w-1/2 w-[100%]'/>
            </div>
        </>
    );
}

export default TodoEmpty;