import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/request';

export const useGetSingleTodo = (id: string) => {
  return useQuery({
    queryKey: ['single-todo', id],
    queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
  });
};
