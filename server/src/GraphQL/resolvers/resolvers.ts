

const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      // try {
      //   const user = await User.findById(id);
      //   return user;
      // } catch (error) {
      //   throw new Error('Failed to fetch user');
      // }
    },
    getAllUsers: async () => {
      // try {
      //   const users = await User.find();
      //   return users;
      // } catch (error) {
      //   throw new Error('Failed to fetch all users');
      // }
    },
    // נוספים לפי הצורך
  },
  Mutation: {
    createUser: async (_: any, { username }: { username: string }) => {
      // try {
      //   const user = await User.create({ username });
      //   return user;
      // } catch (error) {
      //   throw new Error('Failed to create user');
      // }
    },
    // נוספים לפי הצורך
  },
  // נוספים לפי הצורך
};

export default resolvers;

  