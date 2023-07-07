import { uniqueId } from '@/utils'
import type { Restaurant } from './types'

export const restaurantStatusList = ['Want to Try', 'Recommended', 'Do Not Recommend'] as const

export const dietList = ['Vegetarian', 'Pescetarian', 'Keto', ''] as const

export const defaultRestaurantValue: Restaurant = {
  id: uniqueId(),
  name: '',
  address: '',
  website: '',
  status: 'Want to Try'
}
