import ICInfo from '../../assets/icons/modal-information-icon.png';
const ModalInfo = ({setModalInformation}) => {
    return(
        <>
            <div className="fixed md:inset-0 bg-gray-600 bg-opacity-75" onClick={() => setModalInformation(false)}>
                <div data-cy='modal-information' className="w-2/6 md:h-auto mx-auto mt-80">
                    <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                        <div className=" flex p-6 justify-between">
                            <img src={ICInfo} alt='modal information' className='h-6 w-6' />
                            <p className='mr-48'>Activity berhasil dihapus</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalInfo;