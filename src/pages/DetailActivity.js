import Title from "../components/atoms/Title";
import Header from "../components/molecules/Header";
import ICPlus from '../assets/icons/tabler_plus.png';
import ICBack from '../assets/icons/todo-back-button.png';
import ICTodoTitleEdit from '../assets/icons/todo-item-edit-button.png';
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailActivity, getTodo, patchTitleActivity } from "../utils/api";
import Loading from "../components/atoms/Loading";
import TodoEmpty from "../components/atoms/TodoEmpty";
import useInput from "../hooks/useInput";
import Button from "../components/atoms/Button";
const DetailActivity = () => {

    const [detailActivity, setDetailActivity] = useState('');
    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    console.log(detailActivity);


    useEffect(() => {
        const getDetailDataActivity = async () => {
            const data = await getDetailActivity(id);
            setDetailActivity(data.title);
            setIsLoading(false);
        };
        getDetailDataActivity();
    },[id]);

    const handleValueChange = (event) => setDetailActivity(event.target.value);

    const handleUpdateTitle =  (event) => {
        event.preventDefault();
        patchTitleActivity(id, detailActivity);
    }

    useEffect(() => {
        const getTodoItem = async () => {
            const {data} = await getTodo(id);
            setTodo(data);
            setIsLoading(false);
        }
        getTodoItem();
    },[id]);

    return(
        <>
            <header>
                <Header/>
            </header>
            <main>
                <>
                    {isLoading ? (
                        <div className="hidden">
                            <Loading/>
                        </div>
                    ) : (
                        <div className="container mt-14 justify-center mx-auto">
                        <div className="flex justify-between">
                            <Button data-cy='todo-back-button'>
                                <Link to={'/'}>
                                    <img src={ICBack} alt='todo back button' className="w-8 h-8 ml-28"/>
                                </Link>
                            </Button>
                                <form onSubmit={handleUpdateTitle}>
                                <div className="flex justify-between">
                                    <input 
                                        data-cy='todo-title'
                                        required
                                        autoFocus
                                        type='text'
                                        value={detailActivity}
                                        onChange={handleValueChange}
                                        className="text-black text-2xl font-semibold mr-[520px] mt-4 outline-0 hover:border-b-2 border-gray-300"
                                    />
                                    <span className="absolute ml-52 mt-[1px]">
                                    <Button data-cy='todo-title-edit-button'>
                                        <img src={ICTodoTitleEdit} alt='todo title edit' className="w-7 h-7"/>
                                    </Button>
                                    </span>
                                </div>
                                </form>

                                <Button data-cy='todo-add-button' onClick={()=> alert('hai')} className='mr-32 bg-primary hover:bg-secondary w-44'>
                                    <span className="flex mx-auto">
                                    <img src={ICPlus} alt="tabler plus" />
                                    Tambah
                                    </span>
                                </Button>
                                {/* <button type="submit" onClick={() => addActivity()}>
                                    tambah
                                </button> */}
                        </div>
                    </div>
                    )}
                    <article>
                    <div className="justify-center mx-auto mt-8 ml-32 mr-32">
                        <div className="flex flex-wrap"> 
                            { isLoading ? (
                                <Loading/>
                                ) : todo.length > 0 ? (
                                    <p>data ada lho </p>
                                ) : (
                                <TodoEmpty/>
                                )
                            }

                        </div>
                    </div>
                </article>
                </>
            </main>
        </>
    );
}

export default DetailActivity;