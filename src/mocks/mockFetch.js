const roomsList = {
    data: [
      {
        number: 44761,
        status: true,
        wifi: false,
        location: "Salem",
        image: "https://loremflickr.com/640/480/city",
        price: "672.00",
        id: "1",
      },
    ],
};


export default async function mockFetch(url) {
    switch (url) {
        case "https://63afdf4f649c73f572c415b1.mockapi.io/api/rooms": {
            return {
                ok: true,
                status: 200,
                json: async () => roomsList,
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}