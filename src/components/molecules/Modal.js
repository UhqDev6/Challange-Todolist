import ICDelete from '../../assets/icons/modal-delete-icon.png';
import Button from '../atoms/Button';
const Modal = ({closeModal, dataActivity, deleteActivity, closeModalTodo, dataTodo, deleteTodo}) => {
    console.log(dataActivity);
    return(
        <>
            { dataActivity && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 w-full">
                    <div  data-cy='modal-delete' className="md:w-2/6 w-[350px] md:h-auto mx-auto mt-56">
                        <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                            <div className='p-6 text-center'>
                                <img data-cy='modal-delete-icon' src={ICDelete} alt='delete modal' className=' mx-auto h-24 w-24 '/>
                            </div>
                            <div className='p-2 text-center'>
                                <h3 data-cy='modal-delete-title' className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda yakin menghapus activity <br/><span className='font-semibold text-black'>"{dataActivity.title}" ?</span></h3>
                            </div>
                            <div className="flex p-6 justify-between">
                                <Button data-cy='modal-delete-cancel-button' onClick={() => closeModal(false)} className=" w-32 ml-20 text-gray-500 bg-gray-100 gap-9  hover:bg-gray-200 justify-center">Batal</Button>
                                <Button data-cy='modal-delete-confirm-button' onClick={() => deleteActivity(dataActivity.id)}  className="text-white w-32 mr-20 bg-red-600 hover:bg-red-700 focus:ring-4 font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center ">
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            { dataTodo && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 w-full">
                    <div  data-cy='modal-delete' className="md:w-2/6 w-[350px] md:h-auto mx-auto mt-56">
                        <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                            <div className='p-6 text-center'>
                                <img data-cy='modal-delete-icon' src={ICDelete} alt='delete modal' className=' mx-auto h-24 w-24 '/>
                            </div>
                            <div className='p-2 text-center'>
                                <h3 data-cy='modal-delete-title' className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda yakin menghapus list item <br/><span className='font-semibold text-black'>"{dataTodo.title}" ?</span></h3>
                            </div>
                            <div className=" flex p-6 justify-between">
                                <Button data-cy='modal-delete-cancel-button' onClick={() => closeModalTodo(false)} className=" w-32 ml-20 text-gray-500 bg-gray-100 gap-9  hover:bg-gray-200 justify-center">Batal</Button>
                                <Button data-cy='modal-delete-confirm-button' onClick={() => deleteTodo(dataTodo.id)}  className="text-white w-32 mr-20 bg-red-600 hover:bg-red-700 font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center ">
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}



export default Modal;