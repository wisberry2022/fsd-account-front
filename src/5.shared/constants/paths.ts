const apiVersion = 0;

export const Paths = {
  basicInfo: {
    supplier: {
      get: (id: number) => `/api/v${apiVersion}/basic-info/sply/${id}`,
      getAll: `/api/v${apiVersion}/basic-info/sply`,
      add: `/api/v${apiVersion}/basic-info/sply`,
      update: `/api/v${apiVersion}/basic-info/sply`,
      delete: `/api/v${apiVersion}/basic-info/sply`,
    },
    accountSubject: {
      get: (id: number) =>
        `/api/v${apiVersion}/basic-info/account-subject/${id}`,
      getAll: `/api/v${apiVersion}/basic-info/account-subject`,
      add: `/api/v${apiVersion}/basic-info/account-subject`,
      update: (id: number) =>
        `/api/v${apiVersion}/basic-info/account-subject/${id}`,
      delete: `/api/v${apiVersion}/basic-info/account-subject`,
      autoAdd: `/api/v${apiVersion}/basic-info/account-subject/auto`
    },
  },
};
