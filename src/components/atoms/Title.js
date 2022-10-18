const Title = ({className = 'text-white text-sm font-semibold', data, text, children, ...props}) => {
    return(
        <>
            <p  {...props} className={`${className}`}>
                {text || children}
            </p>
        </>
    );
}

export default Title;