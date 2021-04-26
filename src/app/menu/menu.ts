import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'apps',
    type: 'section',
    title: 'MANAGEMENT',
    translate: 'MENU.SECTION',
    icon: 'package',
    children: [
    {
    id: 'books',
    title: 'Books',
    translate: 'MENU.BOOKS',
    type: 'item',
    icon: 'book-open',
    url: 'books'
  },
  {
    id: 'products',
    title: 'Products',
    translate: 'MENU.PRODUCTS',
    type: 'item',
    icon: 'package',
    url: 'products'
  },
  {
    id: 'meteo',
    title: 'Méteo',
    translate: 'MENU.METEO',
    type: 'item',
    icon: 'wind',
    url: 'meteo'
  }]
}
 
]
