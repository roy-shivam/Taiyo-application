import ContactCard from "./contactCard";
import { selectContacts } from "../../store/reducer/contactsReducer";
import { useSelector } from "react-redux";


interface Props {
  openEditModal: (id: number) => void;
}

function ContactList({ openEditModal }: Props) {
  const contacts = useSelector(selectContacts);
  return (
    <div className="flex-1 overflow-hidden mx-5">
      <h1 className="text-lg font-semibold text-gray-500">Contact List</h1>
      <div
        className="overflow-x-hidden justify-items-center mt-5 h-[26rem] grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 gap-5 overflow-y-scroll"
      >
        {contacts &&
          contacts.map((contact, id) => (
            <ContactCard
              key={id}
              contact={contact}
              openEditModal={openEditModal}
            />
          ))}
        {contacts?.length === 0 && (
          <h1 className="w-80 cursor-default text-center opacity-125 absolute my-auto mx-auto py-5 bg-accent1/40 rounded-xl">
            No Contact found. <br /> Please add contacts using <br />
            <span className="font-bold text-green-600">
              Create contact
            </span>{" "}
            button
          </h1>
        )}
      </div>
    </div>
  );
}

export default ContactList;
