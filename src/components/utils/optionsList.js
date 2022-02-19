function getOptions(props) {
    const options = props.map((o) => ({
        label: o.name,
        value: o._id
    }));
    return options;
}
export default getOptions;
