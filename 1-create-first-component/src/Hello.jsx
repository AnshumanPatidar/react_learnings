function Hello() {

  let myNum = 25;
  let printNow = () => {
    return "Anshuman Patidar";
  }


  // we can use js into html and make it dynamic using {} this bracket as you can see in the below example
  return <h3>
    my roll number is : {myNum} , i am {printNow()} . I am good.
  </h3>
}

export default Hello;