import { useMutation } from '@tanstack/react-query';
import { request } from '../../../../config/request';
import type { User } from '../query/useGetUser';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data: User) =>
      request.post('/products', data).then((res) => res.data),
  });
};
