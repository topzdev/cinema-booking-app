export const pageRoutes = {
  cinemaManager: (() => {
    const path = "/cinema-manager";

    return {
      href: path,
      pages: {
        add: {
          href: `${path}/add`,
        },
        view: (cinema_id: string | number) => ({
          href: `${path}/${cinema_id}`,
          pages: {
            theater: {
              add: {
                href: `${path}/${cinema_id}/theater/add`,
              },
              floorPlan: (theater_id: string | number) => ({
                href: `${path}/${cinema_id}/theater/${theater_id}/floor-plan`,
              }),

              updateInfo: (theater_id: string | number) => ({
                href: `${path}/${cinema_id}/theater/${theater_id}/edit`,
              }),
            },
          },
        }),
        edit: (cinema_id: string | number) => ({
          href: `${path}/${cinema_id}/edit`,
        }),
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
