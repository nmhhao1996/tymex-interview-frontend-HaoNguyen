import { Author } from "./author";

export enum Category {
  UpperBody = "Upper Body",
  LowerBody = "Lower Body",
  Hat = "Hat",
  Shoes = "Shoes",
  Accessory = "Accessory",
  Legendary = "Legendary",
  Mythic = "Mythic",
  Epic = "Epic",
  Rare = "Rare",
}

export enum Theme {
  Dark = "Dark",
  Light = "Light",
  Colorful = "Colorful",
  Halloween = "Halloween",
}

export enum Tier {
  Basic = "Basic",
  Premium = "Premium",
  Deluxe = "Deluxe",
}

export type Product = {
  id: number;
  title: string;
  category: Category;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: Theme;
  tier: Tier;
  imageId: number; // 1 -> 20 (integer)
  author: Author;
};
