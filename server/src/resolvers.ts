const resolvers = {
  Query: {
  categories: async (_: any, __: any, { dataSources }: any) => {
    return await dataSources.randomJokesAPI.getAllCategories();
  },
  category: async (_: any, { category }: any, { dataSources }: any) => {
    return await dataSources.randomJokesAPI.getRandomJokeByCategory(category);
  },
}
};

export default resolvers
