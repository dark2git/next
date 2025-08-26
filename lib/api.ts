// lib/api.ts

import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

// додаємо заголовок з токеном
axios.defaults.headers.common['Authorization'] =
  `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

export const getNotes = async () => {
  const res = await axios.get<NoteListResponse>('/notes');
  return res.data;
};
