import ICInfo from '../../assets/icons/modal-information-icon.png';
const ModalInfo = ({setModalInformation}) => {
    return(
        <>
            <div className="fixed md:inset-0 bg-gray-600 bg-opacity-75" onClick={() => setModalInformation(false)}>
                <div className="w-2/6 md:h-auto mx-auto mt-80">
                    <div  data-cy='modal-information' className="bg-white rounded-2xl shadow dark:bg-gray-700">
                        <div className=" flex p-6 justify-between">
                            <img data-cy='modal-information-icon' src={ICInfo} alt='modal information icon' className='h-6 w-6' />
                            <p data-cy='modal-information-title' className='mr-48'>Activity berhasil dihapus</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalInfo;