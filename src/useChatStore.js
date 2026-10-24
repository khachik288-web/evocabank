import { create } from 'zustand';

// Звонками (call/callType/roomId/incomingCall) теперь занимается сам Zego
// (см. zego.js + callUtils.js) — стору больше не нужно хранить их состояние.
export const useChatStore = create((set) => ({
  isOpen: false,
  view: 'list', // 'list' | 'chat'
  activeChat: null, // { id, name, isGroup }

  setIsOpen: (isOpen) => set({ isOpen }),
  setView: (view) => set({ view }),

  openPrivateChat: (user) =>
    set({
      view: 'chat',
      activeChat: { id: user.uid, name: user.name || 'Անանուն', isGroup: false },
    }),

  openGroupChat: () =>
    set({
      view: 'chat',
      activeChat: { id: 'public_group', name: 'Խմբային չատ', isGroup: true },
    }),
}));
