import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/comments",
  }),
  endpoints: (builder) => ({
    getComments: builder.query<IComments[], void>({ query: () => "" }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
