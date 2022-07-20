import Modal from "../../Layouts/Modal";
import Button from "../../Widgets/Button";
import { useState } from "react";
import "./MenuForm.css";

function MenuForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const descriptionChangeHandler = (event) =>
    setEnteredDescription(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle !== "" &&
      enteredAmount !== "" &&
      enteredDescription !== ""
    ) {
      const foodData = {
        title: enteredTitle,
        amount: enteredAmount,
        description: enteredDescription,
      };

      props.onComplete(foodData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDescription("");
    } else {
      console.log("empty");
    }
  };

  return (
    <Modal onClick={props.onClose}>
      <h3>Add Food</h3>
      <form onSubmit={submitHandler}>
        <div className="text_form">
          <div className="text_controls">
            <input
              type="text"
              placeholder="Food Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="text_controls">
            <input
              type="text"
              placeholder="Amount"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="text_controls desc">
            <textarea
              type="text"
              placeholder="Description"
              rows={3}
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
        </div>
        <center>
          <Button type="submit" className="form_btn">
            Add
          </Button>
        </center>
      </form>
    </Modal>
  );
}

export default MenuForm;
