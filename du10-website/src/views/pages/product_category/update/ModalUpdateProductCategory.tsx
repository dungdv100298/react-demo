import React, { Suspense } from "react";
import { Button, Form, Input } from "antd";

import {
  useGetProductCategoryDetailQuery,
  useUpdateProductCategoryMutation,
} from "@apps/services/productCategoryService";
import AppModal from "@components/modal/AppModal";
import { FormValueProps } from "@globalTypes/globalTypes";

interface ModalUpdateProductCategoryProps {
  productCategoryId: undefined | number;
  isOpenUpdate: boolean;
  handleCloseModal: () => void;
  title: string;
}

const FormHorizontal = React.lazy(
  () => import(/* webpackPrefetch: true */ "@components/form/FormHorizontal"),
);

export default function ModalUpdateProductCategory({
  productCategoryId,
  isOpenUpdate,
  handleCloseModal,
  title,
}: ModalUpdateProductCategoryProps) {
  const [form] = Form.useForm();

  const { data: productCategoryDetail } =
    useGetProductCategoryDetailQuery(productCategoryId);

  const [updateProductCategory, { isLoading }] =
    useUpdateProductCategoryMutation();
  const onUpdateProductCategory = async (values: FormValueProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resultStore: any = await updateProductCategory({
      payload: values,
      productCategoryId,
    });
    if (resultStore?.data) {
      handleCloseModal();
    }
  };

  return (
    <AppModal
      title={title}
      isOpen={isOpenUpdate}
      handleCancel={handleCloseModal}
    >
      <Suspense fallback={null}>
        <FormHorizontal
          onFinish={onUpdateProductCategory}
          defaultForm={form}
          data={productCategoryDetail}
        >
          <>
            <Form.Item
              label="Product Category Name"
              name="name"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Category name cannot be empty.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item className="mb-0">
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
              </Button>
            </Form.Item>
          </>
        </FormHorizontal>
      </Suspense>
    </AppModal>
  );
}
