const Label = ({ text, children, className, ...props}) => {
    return(
        <>
            <label className={`${className}`} {...props}>
                {text || children}
            </label>
        </>
    );
}


export default Label;