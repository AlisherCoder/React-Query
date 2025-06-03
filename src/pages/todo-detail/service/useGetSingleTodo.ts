import { useQuery } from '@tanstack/react-query';
import { request } from '../../../config/request';
import type { todoT } from '../../home/service/query/useGetUser';

export const useGetSingleTodo = (id: string) => {
  return useQuery({
    queryKey: ['single-todo', id],
    queryFn: () => request.get<todoT>(`/todos/${id}`).then((res) => res.data),
  });
};
