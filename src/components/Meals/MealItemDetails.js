const MealItemDetails = (props) => {
  return (
    <div className={props.className}>
      <span>{props.name}</span>
      <span>{props.description}</span>
      <span
        style={{
          color: "#b33a0a",
          fontWeight: "bold"
        }}
      >
        ${props.price}
      </span>
    </div>
  );
};

export default MealItemDetails;
