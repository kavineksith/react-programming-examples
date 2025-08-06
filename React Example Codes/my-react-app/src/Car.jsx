function Car(props) {
  return (
    <li className="list-group-item">
      I am a <span className="fw-bold">{props.brand}</span>
    </li>
  );
}

export default Car;