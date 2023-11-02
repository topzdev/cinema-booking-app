export const pageRoutes = {
  cinema: (() => {
    const path = "/cinema-manager";

    return {
      href: path,
      pages: {
        add: {
          href: `${path}/add`,
        },
        edit: (id: string | number) => ({ href: `${path}/${id}` }),
      },
    };
  })(),
  theater: (() => {
    const path = "/theater";

    return {
      href: path,
      pages: {
        add: {
          href: `${path}/add`,
        },
        edit: (id: string | number) => ({ href: `${path}/${id}` }),
      },
    };
  })(),
};
