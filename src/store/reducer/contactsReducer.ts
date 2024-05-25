import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Contact {
    id: number| string | undefined;
    firstName: string,
    lastName: string,
    status: string
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
})

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contact.contacts;

export default contactsSlice.reducer;