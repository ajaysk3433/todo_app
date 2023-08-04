import './list.css'
function List(props){
    function deleteHandeler(e,index){
        const arr = [...props.list]
        arr.splice(index,1);
        props.setList([...arr]);
        console.log(arr)

    }

    return(
        <div  className="list">
            {/* <input type="radio" /> */}
            <p>{props.todo }</p>
            <button onClick={(e)=> {deleteHandeler(e,props.index)}}>Delete</button>
        </div>
    )
}

export default List;