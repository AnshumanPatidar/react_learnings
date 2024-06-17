function Random() {
  let myNum = Math.random() * 100;

  // here we understand how to put inline css 
  return <p style={{ 'background-color': '#259654' }}>
    this is a random number : {Math.round(myNum)};
  </p>

}

export default Random;