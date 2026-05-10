const CityInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter destination city"
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "0.8rem",
        marginBottom: "1rem"
      }}
    />
  );
};

export default CityInput;
