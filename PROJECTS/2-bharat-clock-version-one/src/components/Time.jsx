function CurrTime() {

  let Time = new Date();

  return <h5>This is the current time: {Time.toLocaleDateString()} - {Time.toLocaleTimeString()}
  </h5>;

}

export default CurrTime;