const ModalBackground = ({closeModalAdd, setOpenModalAdd, openModalAdd,openModalEdit,closeModalEdit,setOpenModalEdit,openModal, modalInformation,setModalInformation}) => {
    return(
        <>
            {openModalAdd && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => closeModalAdd(!setOpenModalAdd)} >
                </div>
            )}

            {openModalEdit && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => closeModalEdit(!setOpenModalEdit)} >
                </div>
            )}

            {openModal && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" >
                </div>
            )}

            {modalInformation && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => setModalInformation(!modalInformation)}>
                </div>
            )}
        </>
    );
}

export default ModalBackground;