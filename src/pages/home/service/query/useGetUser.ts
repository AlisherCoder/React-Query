import { request } from '../../../../config/request';
import { useQuery } from '@tanstack/react-query';

export interface User {
  name: string;
  birthday: string;
  phone_number: string;
  id?: string;
}

export const useGetUser = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => request('/products').then((res) => res),
  });
};
