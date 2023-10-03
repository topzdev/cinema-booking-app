export const pageRoutes = {
  cinema: (() => {
    const path = "/cinema";

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
