import ICIndicator from '../../assets/icons/tabler_check.png';
const SortDropdown = (
    {
        onHandlerDropdownSelected,
        sortOptionDropdown,
        indicatorSelected,
    }
) => {
    return(
        <>
                    <div data-cy='sort-parent' className={'fixed z-20 shadow-sm sm:w-[20%] sm:ml-[62%] sm:mt-[5%] mt-[16%] right-0 sm:left-0'}>
                        {
                            sortOptionDropdown.map((sorting) => (
                                <div data-cy='sort-selection' data={sorting.data} key={sorting.id} className="flex hover:bg-slate-100 border-b-[1px] py-4 px-3 text-gray-400 bg-white cursor-pointer" onClick={() => onHandlerDropdownSelected(sorting) }>
                                <img data-cy='sort-selection-icon' src={sorting.icon} alt="Arrow Top" className="w-5 h-5 mt-[3px]" />
                                <p data-cy='sort-selection-title' className="ml-4 text-gray-700">{sorting.label}</p>
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