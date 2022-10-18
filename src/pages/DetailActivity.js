import Title from "../components/atoms/Title";
import Header from "../components/molecules/Header";
import ICPlus from '../assets/icons/tabler_plus.png';
import ICBack from '../assets/icons/todo-back-button.png';
import ICTodoTitleEdit from '../assets/icons/todo-item-edit-button.png';
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addTodoItems, deleteTodo, getDetailActivity, getTodo, getTodoItems, patchChacked, patchTitleActivity, updateTodo } from "../utils/api";
import Loading from "../components/atoms/Loading";
import TodoEmpty from "../components/atoms/TodoEmpty";
import useInput from "../hooks/useInput";
import Button from "../components/atoms/Button";
import ModalAdd from "../components/molecules/ModalAdd";
import ICPVeryHigh from '../assets/icons/Ellipse-very-high.png'
import ICPHigh from '../assets/icons/Ellipse-high.png'
import ICPMedium from '../assets/icons/Ellipse-medium.png'
import ICPLow from '../assets/icons/Ellipse-low.png'
import ICPVeryLow from '../assets/icons/Ellipse-very-low.png'
import ICDelete from '../assets/icons/activity-item-delete-button.png';
import Modal from "../components/molecules/Modal";
import ModalInfo from "../components/atoms/ModalInfo";
import ModalEdit from "../components/molecules/ModalEdit";
import ICTodoSort from '../assets/icons/todo-sort-button.png';
import ICSortNew from '../assets/icons/sort-lates.png';
import ICSortLast from '../assets/icons/sort-oldest.png';
import ICSortAsc from '../assets/icons/sort-az.png';
import ICSortDesc from '../assets/icons/sort-za.png';
import ICSortUnfinish from '../assets/icons/sort-unfinished.png'
import SortDropdown from "../components/atoms/SortDropdown";
// import ICCheck from '../../assets/icons/tabler_check.png'
const DetailActivity = () => {

    const [detailActivity, setDetailActivity] = useState('');
    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [openModalAdd , setOpenModalAdd] = useState(false);

    //Save Data Todo Item
    const onAddTodoHandler = async (inputListItem, valueOptionSelected) => {
        const {success} = await addTodoItems(id, inputListItem, valueOptionSelected)
        console.log({
            inputListItem,
            valueOptionSelected
        })
        if(!success) {
            setOpenModalAdd(false)
            getTodoItem();
        }

    }
    
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

    const getTodoItem = async () => {
        const {data} = await getTodo(id);
        setTodo(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getTodoItem();
    },[id]);

    const modalAdd = () => {
        setOpenModalAdd(true);
    }



    const optionSelected = [
        {
            value: 'very-high',
            label: 'Very High',
            icon: ICPVeryHigh,
            dataCy: 'modal-add-priority-very-high',
        },
        {
            value: 'high',
            label: 'High',
            icon: ICPHigh,
            dataCy: 'modal-add-priority-high',
        },
        {
            value: 'normal',
            label: 'Medium',
            icon: ICPMedium,
            dataCy: 'modal-add-priority-medium',
        },
        {
            value:  'low',
            label: 'Low',
            icon: ICPLow,
            dataCy: 'modal-add-priority-low',
        },
        {
            value: 'very-low',
            label: 'Very Low',
            icon: ICPVeryLow,
            dataCy: 'modal-add-priority-very-low',
        }
    ];

    const Priority = (item) => {
        if(item === 'very-low'){
            return ICPVeryLow;
        }else if(item === 'very-high'){
            return ICPVeryHigh;
        }else if(item === 'high'){
            return ICPHigh;
        }else if(item === 'normal'){
            return ICPMedium;
        }else if(item === 'low') {
            return ICPLow;
        }
        return ICPVeryHigh;
    }

    const [openOptionSelected, setOpenOptionSelected] = useState(false);
    const [indicatorSelected, setIndicatorSelected] = useState('');
    const [iconOptionSelected, setIconOptionSelected] = useState(
        optionSelected[0].icon
    );
    const [labelOptionSelected, setLabelOptionSelected] = useState(
        optionSelected[0].label
    );
    const [valueOptionSelected, setValueOptionSelected] = useState(
        optionSelected[0].value
    );

    //handle sebuah option selected
    const HandleOptionSelected = (item) => {
        setIconOptionSelected(item.icon);
        setLabelOptionSelected(item.label);
        setValueOptionSelected(item.value);
        setIndicatorSelected(item.label);
    }

    //handle chacked input
    const handleChackedInput = async (item) => {
        const chackedInput = {
            title: item.title,
            activity_group_id: item.activity_group_id,
            is_active: !item.is_active,
            priority: item.priority
        }
        const {success} =await patchChacked(item.id,chackedInput, id);
        if(!success) {
            getTodoItem();
        }

    }

    //handle modal delete 
    const [openModal, setOpenModal] = useState(false);
    const [dataTodo, setDataTodo] = useState(
        {        
            id: '',
            title: '',
            created_at: '',
        }
    );
    const [modalInformation, setModalInformation] = useState(false);

    const modalDelete = (todoItems) => {
        setDataTodo(todoItems);
        setOpenModal(true);
    }

    const onDeleteTodoHandler = async (id) => {
        const {success} = await deleteTodo(id);
        if(!success) {
            setOpenModal(false);
            setModalInformation(true);
            getTodoItem();
        }
    }

    //handle edit
    const [dataEdit, setDataEdit] = useState({});
    const [editTodoNameItem, setEditTodoNameItem] = useState('');
    const [openModalEdit , setOpenModalEdit] = useState(false);

    const modalEdit = (todoItems) => {
        setEditTodoNameItem(todoItems.title);
        setDataEdit(todoItems);
        const optionSelectedTodo = optionSelected.find((data) => data.value === todoItems.priority);
        setIconOptionSelected(optionSelectedTodo.icon);
        setLabelOptionSelected(optionSelectedTodo.label);
        setValueOptionSelected(optionSelectedTodo.value);
        setIndicatorSelected(optionSelectedTodo.label);
        setOpenModalEdit(true);
    }

    const handleEditTodoNameItem = (event) => {
        setEditTodoNameItem(event.target.value);
    }
  
    const onEditTodoHandler = async () => {
        const data = {
            ...dataEdit,
            title: editTodoNameItem,
            priority: valueOptionSelected
        }
        const {success} = await updateTodo( dataEdit.id, data)
        if(!success) {
            setOpenModalEdit(false)
            getTodoItem();
        }

    }


    // HANDLE SORT TODO
    const [selectedSort, setSelectedSort] = useState('');
    const [openDropdownSort, setOpenDropdownSort] = useState(false);

    const sortOptionDropdown = [
        {
            id: 1,
            icon: ICSortNew,
            label: 'Terbaru',
        },
        {
            id: 2,
            icon: ICSortLast,
            label: 'Terlama',
        },
        {
            id: 3,
            icon: ICSortAsc,
            label: 'A-Z',
        },
        {
            id: 4,
            icon: ICSortDesc,
            label: 'Z-A',
        },
        {
            id: 5,
            icon: ICSortUnfinish,
            label: 'Belum Selesai'
        }
    ];

    const onHandlerDropdownSelected = (data) => {
        setOpenDropdownSort(!openDropdownSort);
        setIndicatorSelected(data.label);
        if(data.label === 'Terbaru') {
            todo.sort((a, b) => 
                b.id - a.id
            )
            setSelectedSort('Terbaru');
        }else if(data.label === 'Terlama'){
            todo.sort((a, b) =>
                a.id - b.id
            )
            setSelectedSort('Terlama');
        }else if(data.label === 'A-Z'){
            todo.sort((a,b) => 
                a.title.localeCompare(b.title)
            );
            setSelectedSort('A-Z');
        }else if(data.label === 'Z-A'){
            todo.sort((a,b) =>
                a.title.localeCompare(b.title)
            );
            todo.reverse();
            setSelectedSort('Z-A');
        }else {
            todo.sort((a,b) => 
                b.is_active - a.is_active
            )
            setSelectedSort('Belum Selesai')
        }
    }




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
                                    <span className="absolute ml-[20%] mt-[1px]">
                                    <Button data-cy='todo-title-edit-button'>
                                        <img src={ICTodoTitleEdit} alt='todo title edit' className="w-7 h-7"/>
                                    </Button>
                                    </span>
                                </div>
                                </form>
                                    <img src={ICTodoSort} alt="sort data"  className="w-16 h-16 ml-[62%]  absolute" onClick={() => setOpenDropdownSort(!openDropdownSort)}/>
                                    {openDropdownSort && 
                                        <SortDropdown
                                            selectedSort={selectedSort}
                                            onHandlerDropdownSelected={onHandlerDropdownSelected}
                                            openDropdownSort={openDropdownSort}
                                            setOpenDropdownSort={setOpenDropdownSort}
                                            sortOptionDropdown={sortOptionDropdown}
                                            indicatorSelected={indicatorSelected}
                                        />
                                    }

                                <Button data-cy='todo-add-button' onClick={()=> modalAdd()} className='mr-32 bg-primary hover:bg-secondary w-44'>
                                    <span className="flex mx-auto">
                                    <img src={ICPlus} alt="tabler plus"/>
                                    Tambah
                                    </span>
                                </Button>
                        </div>
                    </div>
                    )}
                    <article>
                    <div className="justify-center mx-auto mt-8 ml-32 mr-32">
                        <div className="flex flex-wrap"> 
                            { isLoading ? (
                                <Loading/>
                                ) : todo.length > 0 ? (
                                    todo.map((todoItems,index) => (
                                        <div  key={index} className="shadow-slate-200 shadow-md rounded-md overflow-hidden bg-white w-[86%] ml-20 mt-8">
                                            <div data-cy='todo-item' className="p-8 flex gap-8">
                                                <input
                                                    data-cy='todo-item-checkbox'
                                                    type="checkbox" 
                                                    className="w-6 h-6 cursor-pointer" 
                                                    checked={!todoItems.is_active} 
                                                    value={todoItems.title} 
                                                    name={todoItems.title}
                                                    onChange={() => handleChackedInput(todoItems)} 
                                
                                                />
                                                <img data-cy='todo-item-priority-indicator' src={Priority(todoItems.priority)} alt='icon' className="w-5 h-5 mt-[2px]" />
                                                {!todoItems.is_active ? (
                                                    <label data-cy='todo-item-title' className="line-through text-slate-400">{todoItems.title}</label>
                                                ) : (
                                                    <label data-cy='todo-item-title'>{todoItems.title}</label>
                                                )}
                                                <img data-cy='todo-item-edit-button' src={ICTodoTitleEdit} alt='todo title edit' className="w-5 h-5 cursor-pointer" onClick={() => modalEdit(todoItems)}/>
                                                <img data-cy='todo-item-delete-button' src={ICDelete} alt='delete-item' className="h-6 w-6 ml-[65%] absolute cursor-pointer" id={todoItems.id} onClick={() => modalDelete(todoItems)} />
                                            </div>
                                        </div>
                                        
                                    ))
                                ) : (
                                <TodoEmpty modalAdd={modalAdd} />
                                )
                            }

                        </div>
                    </div>
                {openModalAdd && 
                    <ModalAdd 
                        closeModalAdd={setOpenModalAdd} 
                        openOptionSelected={openOptionSelected} 
                        setOpenOptionSelected={setOpenOptionSelected}
                        iconOptionSelected={iconOptionSelected}
                        labelOptionSelected={labelOptionSelected}
                        valueOptionSelected={valueOptionSelected}
                        setIconOptionSelected={setIconOptionSelected}
                        setLabelOptionSelected={setLabelOptionSelected}
                        setValueOptionSelected={setValueOptionSelected}
                        optionSelected={optionSelected}
                        indicatorSelected={indicatorSelected}
                        HandleOptionSelected={HandleOptionSelected}
                        addTodo={onAddTodoHandler}
                    />
                }
                {openModalEdit && 
                    <ModalEdit 
                        closeModalEdit={setOpenModalEdit} 
                        openOptionSelected={openOptionSelected} 
                        setOpenOptionSelected={setOpenOptionSelected}
                        iconOptionSelected={iconOptionSelected}
                        labelOptionSelected={labelOptionSelected}
                        valueOptionSelected={valueOptionSelected}
                        setIconOptionSelected={setIconOptionSelected}
                        setLabelOptionSelected={setLabelOptionSelected}
                        setValueOptionSelected={setValueOptionSelected}
                        optionSelected={optionSelected}
                        indicatorSelected={indicatorSelected}
                        HandleOptionSelected={HandleOptionSelected}
                        editTodo={onEditTodoHandler}
                        dataEdit={dataEdit}
                        editTodoNameItem={editTodoNameItem}
                        handleEditTodoNameItem={handleEditTodoNameItem}
                    />
                }
                {openModal && <Modal closeModalTodo={setOpenModal} dataTodo={dataTodo} deleteTodo={onDeleteTodoHandler} />}
                {modalInformation && <ModalInfo setModalInformation={setModalInformation} />}
                </article>
                </>
            </main>
        </>
    );
}

export default DetailActivity;