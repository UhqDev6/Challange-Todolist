import ICDelete from '../../assets/icons/modal-delete-icon.png';
const Modal = ({closeModal, dataActivity, deleteActivity}) => {
    return(
        <>
        <div className="fixed md:inset-0 bg-gray-600 bg-opacity-75">
            <div  data-cy='moda-delete' className="w-2/6 md:h-auto mx-auto mt-56">
                <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                    <div className='p-6 text-center'>
                        <img src={ICDelete} alt='delete modal' className=' mx-auto h-24 w-24 '/>
                    </div>
                    <div className='p-2 text-center'>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda yakin menghapus activity <br/><span className='font-semibold text-black'>"{dataActivity.title}" ?</span></h3>
                    </div>
                    <div className=" flex p-6 justify-between">
                        <button onClick={() => closeModal(false)} className=" ml-20 text-gray-500 bg-gray-100 gap-9  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full  text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                        <button onClick={() => deleteActivity(dataActivity.id)}  className="text-white mr-20 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}



export default Modal;