import '../index.css'
function ListGroup() {
    let items = ["New York", "London", "Paris"]
    items = []
    return (
    <>
    <h1>List</h1>
    {/* If items.length is true, present the second value. If false, do nothing */}
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item) =>  <li key={item}>{item}</li>)}
    </ul>
    </>
    )
}

export default ListGroup