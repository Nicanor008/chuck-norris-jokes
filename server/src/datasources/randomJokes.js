import { RESTDataSource } from "apollo-datasource-rest";

class RandomJokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }

  // get all tv shows
  async getAllCategories() {
    const response = await this.get("categories/");
    return Array.isArray(response) ? response : [];
  }

  // get a single tv show
  async getRandomJokeByCategory(category) {
    const response = await this.get(`random?category=${category}`);
    return {
      icon_url: response.icon_url,
      value: response.value,
      id: response.id,
      url: response.url,
      categories: response.categories,
      created_at: response.created_at,
      updated_at: response.updated_at,
    };
  }
}

export default RandomJokesAPI
