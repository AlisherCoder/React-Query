import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from '../../../../config/request';
import type { User } from '../query/useGetUser';

export const useCreateUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: User) =>
      request.post('/products', data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
