import "./ListItem.css";

function ListItem(props) {
  return (
    <div onClick={() => props.onDelete(props.id)}>
      <li>{props.item}</li>
    </div>
  );
}

export default ListItem;
