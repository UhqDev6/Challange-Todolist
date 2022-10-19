import ICActivityEmptyState from '../../assets/images/activity-empty-state.png';
const ActivityEmpty = () => {
    return(
        <>
            <div data-cy='activity-empty-state' className="flex mx-auto justify-center mt-12 cursor-pointer">
                <img src={ICActivityEmptyState} alt="activity empty state"/>
            </div>
        </>
    );
}

export default ActivityEmpty;