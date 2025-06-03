import { useMutation } from '@tanstack/react-query';
import { request } from '../../../../config/request';

export const useEditTodo = (id: number | undefined) => {
  return useMutation({
    mutationFn: (data) =>
      request.put(`/todos/${id}`, data).then((res) => res.data),
  });
};
