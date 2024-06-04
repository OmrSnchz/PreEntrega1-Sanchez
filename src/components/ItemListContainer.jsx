function ItemListContainer(props){

    console.log(props.greetings)
return(<>
    <button className="btn">{props.greetings}</button>
    </>
)


}

export default ItemListContainer; 
