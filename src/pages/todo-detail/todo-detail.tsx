import { useParams } from 'react-router';
import { useGetSingleTodo } from './service/useGetSingleTodo';

export const TodoDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleTodo(id as string);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <h1>{data?.description}</h1>
        </>
      )}
    </div>
  );
};
