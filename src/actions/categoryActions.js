import { SET_AVAILABLE_CATEGORIES } from "./types"

export const setAvailableCategories = (payload) => {
  return {
    type: SET_AVAILABLE_CATEGORIES,
    payload: payload,
  }
}