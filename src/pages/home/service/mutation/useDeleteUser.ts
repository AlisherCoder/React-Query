import { useMutation } from '@tanstack/react-query';
import { request } from '../../../../config/request';
import { useQueryClient } from '@tanstack/react-query';

const useDeleteUser = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => request.delete(`/products/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export default useDeleteUser;
