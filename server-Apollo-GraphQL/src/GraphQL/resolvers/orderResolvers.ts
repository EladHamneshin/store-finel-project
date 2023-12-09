import ordersService from '../../services/ordersService.js';

interface ResolverArgs {
    order: any; // Replace 'any' with the appropriate type for 'order'
    debitCardDetails: any; // Replace 'any' with the appropriate type for 'debitCardDetails'
}

export const orderResolvers = {
    Mutation: {

        getOrderFromClient: async (_: any, { order }: ResolverArgs) => {
            try {
                const resOrder = await ordersService.sendToOmsAndDB(order);
                return resOrder;
            } catch (error) {
                throw new Error('An error occurred in the ordering process !!!');
            }
        },

        checkDebitCard: async (_: any, { debitCardDetails }: ResolverArgs) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (true) {
                        resolve({ message: 'Credit card details are valid' });
                    } else {
                        throw new Error('Invalid credit card details');
                    }
                }, 3000);
            });
        },
    },

    Query: {

        getOrdersFromServer: async (_: any, { id }: any) => {
            try {
                const data = await ordersService.getOrdersFromOms(id);
                return data;
            } catch (error) {
                throw new Error('Failed to retrieve orders from the server');
            }
        }

    }
};
