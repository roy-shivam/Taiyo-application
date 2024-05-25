import { useState } from "react";
import {
  updateContact,
  selectContacts,
} from "../../store/reducer/contactsReducer";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  id: number | undefined;
  closeEditModal: () => void;
}

function EditContact({ id, closeEditModal }: Props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const { firstName, lastName, status } = contacts.find((c) => c.id === id);

  const [contact, setContact] = useState({
    firstName: firstName,
    lastName: lastName,
    status: status,
  });

  const onChangeHandler = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setContact((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleUpdateContact = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: id,
        ...contact,
      })
    );
    closeEditModal();
  };

  return (
    <div className="absolute top-0 w-full h-full rounded-xl flex items-center justify-center bg-white px-5 flex-1 font-poppins z-50">
      <div>
        <h1 className="mx-auto h-12 my-10 pb-5 text-xl text-center font-bold text-gray-500">
          Edit Contact
        </h1>
        <form
          action="submit"
          className="flex w-80 mx-auto flex-col space-y-10 pb-5"
        >
          <div className="flex flex-col space-y-5">
            <div className="space-x-2">
              <label>First Name:</label>
              <input
                type="text"
                maxLength={24}
                name="firstName"
                placeholder={firstName}
                onChange={onChangeHandler}
                className="shadow-md rounded-md p-2"
              />
            </div>
            <div className="space-x-2">
              <label>Last Name:</label>
              <input
                type="text"
                maxLength={24}
                name="lastName"
                placeholder={lastName}
                onChange={onChangeHandler}
                className="shadow-md rounded-md p-2"
              />
            </div>
            <div className="flex">
              <h1 className="w-24">Status:</h1>
              <div className="flex flex-col">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    onChange={onChangeHandler}
                  />{" "}
                  Active
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    onChange={onChangeHandler}
                  />{" "}
                  Inactive
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={handleUpdateContact}
            className="h-12 max-w-[12rem] mx-auto px-3 flex items-center justify-center space-x-2 bg-green-500 text-black rounded-md hover:scale-105 
              hover:shadow-md duration-150"
          >
            <h1>Save Edited Contact</h1>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
