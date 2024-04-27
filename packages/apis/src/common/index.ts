import API from '../api.instance';

export const getCommonTest = (params: { id: number }) =>
  API.get<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>(`/todos/${params.id}`);
