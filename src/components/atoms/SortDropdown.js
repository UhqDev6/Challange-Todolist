import ICIndicator from '../../assets/icons/tabler_check.png';
const SortDropdown = (
    {
        selectedSort,
        onHandlerDropdownSelected,
        openDropdownSort,
        setOpenDropdownSort,
        sortOptionDropdown,
        indicatorSelected,
    }
) => {
    return(
        <>
                    <div data-cy='' className={'fixed z-20 shadow-sm w-[20%] ml-[62%] mt-[5%]'}>
                        {
                            sortOptionDropdown.map((sorting) => (
                                <div key={sorting.id} className="flex hover:bg-slate-100 border-b-[1px] py-4 px-3 text-gray-400 bg-white cursor-pointer" onClick={() => onHandlerDropdownSelected(sorting) }>
                                <img src={sorting.icon} alt="Arrow Top" className="w-5 h-5 mt-[3px]" />
                                <p className="ml-4 text-gray-700">{sorting.label}</p>
                                    {indicatorSelected === sorting.label && (
                                        <img src={ICIndicator} alt="Arrow Top" className="absolute w-5 h-5 ml-[80%]" />
                                    )}
                                </div>
                            ))
                        }
                    </div> 
        </>
    );
}

export default SortDropdown;