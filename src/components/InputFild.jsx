import React, { useRef } from "react";

const InputFild = () => {
  const resetFrom = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target;
    const number = value.number.value.trim();
    const address = value.address.value.trim();
    const address2 = value.address2.value.trim();
  };

  const fromReset = () => {
    if (resetFrom.current) {
      resetFrom.current.reset();
    }
  };

  return (
    <div className=" mt-10">
      <form
        ref={resetFrom}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <span>Quantity of items</span>
        <input
          name="number"
          type="number"
          placeholder={0}
          className="input input-bordered input-primary w-full "
          required
        />
        <span>Item type</span>
        <select className="select select-accent w-full ">
          <option disabled selected>
            Pick a cloth
          </option>
          <option>Pant</option>
          <option>Jacket</option>
          <option>Shal</option>
          <option>Comball</option>
          <option>Shirt</option>
        </select>
        <span>Pickup location</span>
        <input
          name="address"
          type="text"
          placeholder="Pickup location"
          className="input input-bordered input-primary w-full "
          required
        />
        <span>Additional notes</span>
        <textarea
          name="address2"
          className="textarea textarea-primary"
          placeholder="Additional notes"
          required
        ></textarea>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-secondary w-fit mx-auto mt-4"
        >
          Submit
        </button>
      </form>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thank You</h3>
          <p className="py-4">We will reach your destination soon</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={fromReset} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default InputFild;
