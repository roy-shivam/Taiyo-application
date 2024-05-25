import { AiOutlineUserAdd } from "react-icons/ai";

interface Props {
  openModal: () => void;
}

function CreateContactButton({ openModal }: Props) {
  return (
    <button
      onClick={openModal}
      className="h-12 px-4 flex items-center space-x-2 bg-green-400 text-black font-semibold rounded-md hover:scale-105 
        hover:shadow-md duration-150"
    >
      <AiOutlineUserAdd className="text-xl" />
      <h1>Create Contact</h1>
    </button>
    
  );
}

export default CreateContactButton;
