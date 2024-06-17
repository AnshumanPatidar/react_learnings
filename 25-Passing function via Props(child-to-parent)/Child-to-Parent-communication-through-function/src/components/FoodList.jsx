import style from "./FoodList.module.css";

const FoodList = ({ FoodItems, handelOnClick }) => {
  {
    /* Here "event" is not a normal object it is a sytheticBaseEvent because the OS may be different as react is used for making different OS application so react convert normal event object to sytheticBaseEvent toh ye kisi bhi event ko handle kr ske*/
  }
  {
    /* or kosis kre ke event ka code baahr arrow function ya normal function bna kr kre use kre inline code likhna avoid kree more efficiency ke liye  */
  }
  {
    /*on line 27 mene bss function ke reference pass kra h toh apn yesa bhi kr skte h fir bhi event object bnega jese ki jo function mene baahr banaaya h usme  */
  }
  return (
    <>
      <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={handelOnClick}
            >
              order
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodList;
