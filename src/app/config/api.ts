import { environment } from 'src/environments/environment'

export const baseUrl = environment.production 
? 'https://api.food.com.br' 
: 'http://localhost:3001'

export const productsUrl = `${baseUrl}/products`
export const cartUrl = `${baseUrl}/cart`