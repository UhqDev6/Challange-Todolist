import ICActivityEmptyState from '../../assets/images/activity-empty-state.png';
const ActivityEmpty = ({addActivity}) => {
    return(
        <>
            <div data-cy='activity-empty-state' className="flex mx-auto justify-center mt-12 cursor-pointer" onClick={() => addActivity()}>
                <img src={ICActivityEmptyState} alt="activity empty state"/>
            </div>
        </>
    );
}

export default ActivityEmpty;