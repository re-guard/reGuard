


const ChartLayout = (props) => {
    const { children } = props;

    return (
        <div className="grid sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            { children }
            { children }
            { children }
        </div>
    )
    
}

export default ChartLayout;