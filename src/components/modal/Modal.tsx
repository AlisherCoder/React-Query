import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import type { FormProps } from 'antd';
import type { DataType } from '../../pages/home';
import { useCreateUser } from '../../pages/home/service/mutation/useCreateUser';
type FieldType = {
  name: string;
  birthday: string;
  phone_number: string;
};

interface Props {
  isModalOpen?: boolean;
  handleCancel: () => void;
  updateUser?: undefined | null | DataType;
}

const ModalWrapper: React.FC<Props> = ({
  isModalOpen,
  handleCancel,
  updateUser,
}) => {
  const { mutate } = useCreateUser();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (updateUser) {
      // editUser({ id: updateUser.id, body: values }).then(() => handleCancel());
    } else {
      mutate(values);
    }
  };

  return (
    <Modal
      title={`${updateUser ? 'Update' : 'Create'} student`}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        name="basic"
        initialValues={updateUser || { remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Birth"
          name="birthday"
          rules={[
            { required: true, message: 'Please input your birth month!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Phone number"
          name="phone_number"
          rules={[
            { required: true, message: 'Please input your phone number!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            // loading={isLoading || updateLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default React.memo(ModalWrapper);
