const ModalBackground = ({closeModalAdd, setOpenModalAdd, openModalAdd,openModalEdit,closeModalEdit,setOpenModalEdit}) => {
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
        </>
    );
}

export default ModalBackground;