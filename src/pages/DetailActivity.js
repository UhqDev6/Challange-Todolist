
import Header from "../components/molecules/Header";
import ICPlus from '../assets/icons/tabler_plus.png';
import ICBack from '../assets/icons/todo-back-button.png';
import ICTodoTitleEdit from '../assets/icons/todo-item-edit-button.png';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addTodoItems, deleteTodo, getDetailActivity, getTodo, patchChacked, patchTitleActivity, updateTodo } from "../utils/api";
import Loading from "../components/atoms/Loading";
import TodoEmpty from "../components/atoms/TodoEmpty";
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
import Wrapper from "../components/atoms/Wrapper";

const DetailActivity = () => {

    const [detailActivity, setDetailActivity] = useState({});
    const [editTodoTitle, setEditTodoTitle] = useState('');
    const [todo, setTodo] = useState([]);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [openModalAdd , setOpenModalAdd] = useState(false);
    const [ubahTitle, setUbahTitle] = useState(false);
    const [getTitle, setGetTitle] = useState('');

    //Save Data Todo Item
    const onAddTodoHandler = async (inputListItem, valueOptionSelected) => {
        const {success} = await addTodoItems(id, inputListItem, valueOptionSelected)
        if(!success) {
            setOpenModalAdd(false)
            getTodoItem();
        }

    }
    
    useEffect(() => {
        const getDetailDataActivity = async () => {
            const data = await getDetailActivity(id);
            setDetailActivity(data);
            setEditTodoTitle(data.title)
            setGetTitle(data.title)
            setIsLoading(false);
        };
        getDetailDataActivity();
    },[id]);

    const handleValueChange = (event) => setEditTodoTitle(event.target.value);

    const handleUpdateTitle = async (event) => {
        event.preventDefault();
        const data = {
            ...detailActivity,
            title: editTodoTitle

        }
    
        await patchTitleActivity(id, data);

    }

    const getTodoItem = async () => {
        const {data} = await getTodo(id);
        setTodo(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getTodoItem();
    }, []);

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
        setOpenOptionSelected(!openOptionSelected)
        setIconOptionSelected(item.icon);
        setLabelOptionSelected(item.label);
        setValueOptionSelected(item.value);
        setIndicatorSelected(item.label);
    }

    //handle chacked input
    const handleUpdateChackedInput = async (item) => {
        const chackedInput = {
            ...todo,
            is_active: !item.is_active,
        }
        const {success} = await patchChacked(item.id,chackedInput, id);
        if(!success) {
            getTodoItem();
        }

    }

    //handle modal delete 
    const [openModal, setOpenModal] = useState(false);
    const [dataTodo, setDataTodo] = useState({});
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
            data:'sort-lates'
        },
        {
            id: 2,
            icon: ICSortLast,
            label: 'Terlama',
            data:'sort-oldest'
        },
        {
            id: 3,
            icon: ICSortAsc,
            label: 'A-Z',
            data:'sort-az'
        },
        {
            id: 4,
            icon: ICSortDesc,
            label: 'Z-A',
            data:'sort-za'
        },
        {
            id: 5,
            icon: ICSortUnfinish,
            label: 'Belum Selesai',
            data:'sort-unfinished'
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
        <Wrapper>
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
                    <>
                    <div className="container w-full mt-14 justify-center mx-auto">
                        <div className="flex sm:relative">
                            <Button data-cy='todo-back-button'>
                                <Link to={'/'}>
                                    <img src={ICBack} alt='todo back button' className="w-8 h-8"/>
                                </Link>
                            </Button>
                                <div>
                                    {ubahTitle ? (
                                        <form onSubmit={handleUpdateTitle}>
                                        <input 
                                            data-cy='todo-title'
                                            autoFocus
                                            type='text'
                                            value={editTodoTitle}
                                            onChange={handleValueChange}
                                            onBlur={handleUpdateTitle}
                                            className="text-black sm:text-[20px] text-lg font-semibold mt-[1.1rem] outline-0 "
                                        />
                                        </form>
                                    ) : (

                                        <div className="sm:w-96 mt-[1.1rem]"  onClick={() => setUbahTitle(!ubahTitle)}>
                                            <h1 data-cy='todo-title' className="text-black sm:relative sm:text-[20px] text-lg font-bold sm:mt-[6px] text-left outline-0">
                                                {getTitle}
                                            </h1>
                                        </div>
                                    )
                                    }

                                </div>
                                
                                <Button data-cy='todo-title-edit-button' className="sm:ml-[40%] sm:mt-[1px] absolute ml-[75%]" onClick={() => setUbahTitle(!ubahTitle)}>
                                    <img src={ICTodoTitleEdit} alt='todo title edit' className="w-7 h-7"/>
                                </Button>
                                <Button data-cy='todo-sort-button'  onClick={() => setOpenDropdownSort(!openDropdownSort)}  className="sm:w-24 sm:h-24 w-16 sm:-mt-[1.3rem] absolute right-0 sm:right-32 cursor-pointer" >
                                    <img src={ICTodoSort} alt="sort data"/>
                                </Button>
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

                                <Button data-cy='todo-add-button' onClick={()=> modalAdd()} className=' bg-primary hover:bg-secondary w-32 hidden sm:block absolute right-0'>
                                    <span className="flex mx-auto">
                                    <img src={ICPlus} alt="tabler plus"/>
                                    Tambah
                                    </span>
                                </Button>
                        </div>
                    </div>
                    <div className="sm:hidden mt-[100%] absolute right-0 mr-10">
                            <Button data-cy='todo-add-button' onClick={()=> modalAdd()} className=' bg-primary hover:bg-secondary'>
                                <span className="flex mx-auto">
                                <img src={ICPlus} alt="tabler plus"/>
                                </span>
                            </Button>
                    </div>
                    </>
                    )}
                    <article>
                    <div className="justify-center mx-auto mt-2 w-full">
                        <div className="flex flex-wrap p-4 sm:ml-16 sm:mr-16"> 
                            { isLoading ? (
                                <Loading/>
                                ) : todo.length > 0 ? (
                                    todo.map((todoItems,index) => (
                                        <div  key={index} className="shadow-slate-200 shadow-md rounded-md overflow-hidden bg-white w-full mt-8 ">
                                            <div data-cy='todo-item' className="p-8 flex gap-8 relative">
                                                <input
                                                    data-cy='todo-item-checkbox'
                                                    type="checkbox" 
                                                    className="w-6 h-6 cursor-pointer" 
                                                    checked={!todoItems.is_active} 
                                                    value={todoItems.title} 
                                                    onChange={() => handleUpdateChackedInput(todoItems)} 
                                
                                                />
                                                <img data-cy='todo-item-priority-indicator' src={Priority(todoItems.priority)} alt='icon' className="w-5 h-5 mt-[2px]" />
                                                {!todoItems.is_active ? (
                                                    <label data-cy='todo-item-title' className="line-through text-slate-400">{todoItems.title}</label>
                                                ) : (
                                                    <label data-cy='todo-item-title'>{todoItems.title}</label>
                                                )}
                                                <img onClick={() => modalEdit(todoItems)} data-cy='todo-item-edit-button' src={ICTodoTitleEdit} alt='todo title edit' className="w-5 h-5 cursor-pointer absolute right-14"/>
                                                <img onClick={() => modalDelete(todoItems)}  data-cy='todo-item-delete-button' src={ICDelete} alt='delete-item' className="h-5 w-5 cursor-pointer absolute right-5" />
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
                    <>
                    <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75">
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
                    </div>
                    </>
                }
                {openModalEdit && 
                    <>
                    <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75">
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
                    </div>
                    </>
                }
                {openModal && <div onClick={() => setOpenModal(!openModal)}><Modal dataTodo={dataTodo} deleteTodo={onDeleteTodoHandler} /></div> }
                {modalInformation && <ModalInfo setModalInformation={setModalInformation} />}
                </article>
                </>
            </main>
        </Wrapper>
    );
}

export default DetailActivity;