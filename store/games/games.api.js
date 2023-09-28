import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://demo.softswiss.net/api/games",
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "allowed_desktop",
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
