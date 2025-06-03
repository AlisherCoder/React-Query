import {
  Button,
  Skeleton,
  Table,
  Popconfirm,
  notification,
  message,
} from 'antd';
import type { TableProps } from 'antd';
import { useCallback, useState } from 'react';
import ModalWrapper from '../../components/modal/Modal';
import { IoTrashOutline } from 'react-icons/io5';
import { FiEdit3 } from 'react-icons/fi';
import { useGetUser } from './service/query/useGetUser';
import useDeleteUser from './service/mutation/useDeleteUser';

export interface DataType {
  id: string;
  name: string;
  birthday: string;
  phone_number: string;
  image: string;
}

const Home = () => {
  const [updateUser, setUpdateUser] = useState<null | DataType>(null);
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, msgHolder] = message.useMessage();

  const { data, isLoading } = useGetUser();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    setUpdateUser(null);
  }, []);

  const handleUpdateUser = (user: DataType) => {
    setUpdateUser(user);
    showModal();
  };

  const { mutate } = useDeleteUser();

  const handleDelete = async (id: string) => {
    const timeout = setTimeout(async () => {
      mutate(id);
      success();
    }, 5000);

    api.info({
      message: `The student will be removed in 5 seconds.`,
      description: 'You can cancel the operation.',
      placement: 'topRight',
      duration: 5.01,
      showProgress: true,
      onClose: () => {
        clearTimeout(timeout);
      },
    });
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Student deleted successfully',
    });
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Fullname',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Birth',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Action',
      key: 'action',
      render: (user) => (
        <div className="flex gap-2">
          <Popconfirm
            title="Delete the student"
            description="Are you sure to delete this student?"
            onConfirm={() => handleDelete(user.id)}
            okText="Delete"
            cancelText="Cancel"
          >
            <Button>
              <IoTrashOutline />
            </Button>
          </Popconfirm>
          <Button onClick={() => handleUpdateUser(user)}>
            <FiEdit3 />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl">Students</h2>
          <Button color="green" onClick={showModal}>
            Add student
          </Button>
        </div>
        {isLoading ? (
          <Skeleton active />
        ) : (
          <Table<DataType>
            rowKey={'id'}
            columns={columns}
            dataSource={data?.data}
          />
        )}
      </div>

      {isModalOpen && (
        <ModalWrapper
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          updateUser={updateUser}
        />
      )}

      {contextHolder}
      {msgHolder}
    </div>
  );
};

export default Home;
