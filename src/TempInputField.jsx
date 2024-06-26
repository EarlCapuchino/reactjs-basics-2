export default function TempInputField(props){
    return(
        <>
            <legend>Temperature Converter {props.unit}</legend>
            <input type="number" onChange={e => props.func(e.target.value)} value={props.value}/> {props.unit}
        </>
    );
}