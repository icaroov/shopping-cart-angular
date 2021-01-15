export class Product {
  id: number;
  foodName: string;
  restaurant: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    foodName: string,
    restaurant = "",
    price = 0,
    imageUrl = "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/baking/image-thumb__40511__RecipeDetailsLightBox/bolo-pizza.jpg"
  ) {
    this.id = id;
    this.foodName = foodName;
    this.restaurant = restaurant;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
