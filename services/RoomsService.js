class RoomsService {
    API_URL = 'https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms';
    LIMIT = 12;

    getLimit = () => this.LIMIT

    async fetchRooms(page) {
        try {
            const response = await fetch(`${this.API_URL}?limit=${this.LIMIT}&page=${page}`);
            if (!response.ok) {
                throw new Error('It failed to fetch the rooms');
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default new RoomsService;