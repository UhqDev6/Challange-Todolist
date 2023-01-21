import Button from "../atoms/Button";
import ICClose from '../../assets/icons/modal-add-close-button.png'
import Label from "../atoms/Label";
import useInput from "../../hooks/useInput";
import SelectOption from "../atoms/SelectOption";

const ModalAdd = (
    {
        closeModalAdd,
        openOptionSelected,
        setOpenOptionSelected,
        iconOptionSelected,
        labelOptionSelected,
        valueOptionSelected,
        setIconOptionSelected,
        setLabelOptionSelected,
        setValueOptionSelected,
        optionSelected,
        indicatorSelected,
        HandleOptionSelected,
        addTodo,
    }
    ) => {
    const [inputListItem, handleInputListItem] = useInput('');
    const onSubmitNoteHandler = (event) => {
        event.preventDefault();
        addTodo(inputListItem, valueOptionSelected)
    }
    return(
        <>
            {/* <div className="fixed inset-0 bg-gray-600 bg-opacity-75"> */}
            <div data-cy='modal-add' className="w-96 sm:w-2/4 md:h-auto mx-auto sm:ml-[25%] sm:mt-[10%]">
            {/* <div  data-cy='modal-add' className="w-2/4 md:h-auto mx-auto mt-[6%]"> */}
                <div className=" bg-white rounded-2xl shadow dark:bg-gray-700 ">
                    <div className='p-6 border-b justify-between'>
                        <h3 data-cy='modal-add-title' className="text-black font-semibold text-xl">Tambah List Item</h3>
                        <img data-cy='modal-add-close-button' src={ICClose} alt='modal add close button' onClick={() => closeModalAdd(false)} className='mx-auto h-7 w-7 ml-[95%] -mt-[30px] cursor-pointer'/>
                    </div>
                        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmitNoteHandler} >
                            <div className="mt-6">
                                <Label data-cy='modal-add-name-title' className='block text-gray-700 text-sm font-semibold mr-[80%]' >NAMA LIST ITEM</Label>
                                <input 
                                    data-cy='modal-add-name-input'
                                    placeholder="Tambahkan nama list item" 
                                    defaultValue={inputListItem}
                                    onChange={handleInputListItem}
                                    className="appearance-none border mt-4 rounded w-full py-4 px-3 text-gray-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <SelectOption 
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
                            />
                            <div className=" flex p-6 border-t mt-40">
                                {inputListItem.length < 1 ? (
                                    <Button data-cy='modal-add-save-button' disabled className='text-white sm:ml-[85%] ml-[75%] w-32 mr-20 bg-primary cursor-not-allowed disabled:opacity-25 focus:outline-none font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center'>
                                        Simpan
                                    </Button>
                                ): (
                                    <Button data-cy='modal-add-save-button' className='text-white sm:ml-[85%] ml-[75%] w-32 mr-20 bg-primary hover:bg-secondary font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center'>
                                        Simpan
                                    </Button>
                                )}
                            </div>
                        </form>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}






export default ModalAdd;