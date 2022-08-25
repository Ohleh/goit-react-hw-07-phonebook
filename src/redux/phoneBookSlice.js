// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
//     ],
//     filter: '',
//   },
// };

// export const phoneBookSlice = createSlice({
//   name: 'phonebook',
//   initialState,
//   reducers: {
//     addContact: ({ contacts }, { payload }) => {
//       // state.contacts.items = [...state.contacts.items, action.payload];
//       contacts.items = [...contacts.items, payload];
//     },
//     removeContact: ({ contacts }, { payload: id }) => {
//       contacts.items = contacts.items.filter(contact => contact.id !== id);
//     },
//     findContact: ({ contacts }, { payload }) => {
//       contacts.filter = payload;
//     },
//   },
// });

// export const { addContact, removeContact, findContact } =
//   phoneBookSlice.actions; // експорт екшенів

// export default phoneBookSlice.reducer;
