import React, { Suspense } from "react";
import { Button, Form, Input } from "antd";

import { useStoreProductCategoryMutation } from "@apps/services/productCategoryService";
import AppModal from "@components/modal/AppModal";
import { FormValueProps } from "@globalTypes/globalTypes";

interface ModalStoreProductCategoryProps {
  isOpenStore: boolean;
  handleCloseModal: () => void;
  title: string;
}

const FormHorizontal = React.lazy(
  () => import(/* webpackPrefetch: true */ "@components/form/FormHorizontal"),
);

export default function ModalStoreProductCategory({
  isOpenStore,
  handleCloseModal,
  title,
}: ModalStoreProductCategoryProps) {
  const [storeProductCategory, { isLoading }] =
    useStoreProductCategoryMutation();
  const onStoreProductCategory = async (values: FormValueProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resultStore: any = await storeProductCategory(values);
    if (resultStore?.data) {
      handleCloseModal();
    }
  };

  return (
    <AppModal
      title={title}
      isOpen={isOpenStore}
      handleCancel={handleCloseModal}
    >
      <Suspense fallback={null}>
        <FormHorizontal onFinish={onStoreProductCategory}>
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
