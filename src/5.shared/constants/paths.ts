const apiVersion = 0;

export const Paths = {
  basicInfo: {
    supplier: {
      get: (id: number) => `/api/v${apiVersion}/basic-info/sply/${id}`,
      getAll: `/api/v${apiVersion}/basic-info/sply`,
      add: `/api/v${apiVersion}/basic-info/sply`,
      update: `/api/v${apiVersion}/basic-info/sply`,
      delete: (id: number) => `/api/v${apiVersion}/basic-info/sply/${id}`,
    },
  },
};
