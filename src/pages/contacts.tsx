import { useState } from "react";
import CreateContactButton from "../components/contacts/createContactButton";
import CreateContactForm from "../components/contacts/createContactForm";
import ContactList from "../components/contacts/contactList";
import EditContact from "../components/contacts/editContact";

function Contacts() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [id, setId] = useState<number>();

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openEditModal = (id: number) => {
    setId(id);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-white relative m-3 flex flex-col justify-center items-center flex-1 rounded-xl shadow-xl">
        <div className="h-16 w-full pl-5 flex items-center text-left">
          <h1 className="text-2xl font-bold text-white-500">Contacts</h1>
        </div>
        {isEditModalOpen && (
          <EditContact id={id} closeEditModal={closeEditModal} />
        )}
        {isCreateModalOpen ? null : (
          <div className="h-24 flex justify-center items-center">
            <CreateContactButton openModal={openCreateModal} />
          </div>
        )}
        <div className="flex-1 w-full flex justify-center items-center">
          {isCreateModalOpen ? (
            <CreateContactForm closeModal={closeCreateModal} />
          ) : (
            <ContactList openEditModal={openEditModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
