import { atom } from 'recoil';

export const idState = atom({
  key: 'idState',
  default: 1
})

export const wordState = atom({
  key: 'wordState',
  default: ''
})

export const wordListState = atom({
  key: 'wordListState',
  default: []
})