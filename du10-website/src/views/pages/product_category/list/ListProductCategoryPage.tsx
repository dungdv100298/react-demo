import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Table, { ColumnsType } from "antd/lib/table";

import {
  useDeleteProductCategorMutation,
  useGetProductCategoryQuery,
} from "@apps/services/productCategoryService";
import DataListLayout from "@components/layout/DataListLayout";
import BlockSkeleton from "@components/BlockSkeleton";
import { ProductCategoryProps } from "@globalTypes/globalTypes";
import { SCActionBox } from "./style";

const ModalStoreProductCategory = React.lazy(
  () =>
    import(/* webpackPrefetch: true */ "../store/ModalStoreProductCategory"),
);

const ModalUpdateProductCategory = React.lazy(
  () =>
    import(/* webpackPrefetch: true */ "../update/ModalUpdateProductCategory"),
);

export const columnProductCategory: ColumnsType<ProductCategoryProps> = [
  {
    title: "ID",
    dataIndex: "id",
    width: "60px",
  },
  {
    title: "Product Category Name",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "",
    width: "150px",
    render: () => (
      <SCActionBox>
        <Tooltip title="Chỉnh sửa danh mục">
          <Button
            className="btn-action"
            shape="circle"
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title="Xóa danh mục">
          <Button
            className="btn-action"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </SCActionBox>
    ),
  },
];

export default function ListProductCategoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "E-commerce management application - Product category management";
  }, []);
  const [perPage, setPerpage] = useState<number>(10);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const onChangePage = useCallback((page: number, pageSize: number) => {
    setPage(page);
    setPerpage(pageSize);
  }, []);

  const onSearch = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  const { data, isLoading, isFetching } = useGetProductCategoryQuery({
    per_page: perPage,
    page: page,
    keyword: keyword,
  });

  const [isOpenStore, setIsOpenStore] = useState(false);
  const openModalStoreProductCategory = useCallback(() => {
    setIsOpenStore(true);
  }, []);
  const closeModalStoreProductCategory = () => {
    setIsOpenStore(false);
  };

  const [productCategoryId, setProductCategoryId] = useState<
    undefined | number
  >(undefined);
  const openModalUpdateProductCategory = useCallback((id: number) => {
    setProductCategoryId(id);
  }, []);
  const closeModalUpdateProductCategory = () => {
    setProductCategoryId(undefined);
  };

  const [deleteProductCategor, { isLoading: isLoadingDelete }] =
    useDeleteProductCategorMutation();

  const handleDeleteProductCategory = (productCategoryId: string) => {
    deleteProductCategor(productCategoryId);

    // await deleteProductCategor();
  };

  const columnProductCategory: ColumnsType<ProductCategoryProps> = [
    {
      title: "ID",
      dataIndex: "id",
      width: "60px",
    },
    {
      title: "Product Category Name",
      dataIndex: "name",
    },
    {
      title: "",
      dataIndex: "",
      width: "150px",
      render: (record) => (
        <SCActionBox>
          <Button
            className="btn-action"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => openModalUpdateProductCategory(record.id)}
          />
          <Popconfirm
            placement="rightTop"
            title="Do you want to delete the product category?"
            onConfirm={() => handleDeleteProductCategory(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              className="btn-action"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              loading={isLoadingDelete}
            />
          </Popconfirm>
        </SCActionBox>
      ),
    },
  ];

  return (
    <DataListLayout
      pageName="Product category management"
      openModalStore={openModalStoreProductCategory}
      page={page}
      total={data?.total}
      onChangePage={onChangePage}
      onSearch={onSearch}
    >
      <>
        <BlockSkeleton loading={isLoading || isFetching}>
          <Table
            rowKey="id"
            columns={columnProductCategory}
            pagination={false}
            dataSource={data?.data}
            className="app_table"
          />
        </BlockSkeleton>

        {isOpenStore && (
          <Suspense fallback={null}>
            <ModalStoreProductCategory
              title="Create a new product category"
              isOpenStore={isOpenStore}
              handleCloseModal={closeModalStoreProductCategory}
            />
          </Suspense>
        )}

        {Boolean(productCategoryId) && (
          <Suspense fallback={null}>
            <ModalUpdateProductCategory
              productCategoryId={productCategoryId}
              title="Product category update"
              isOpenUpdate={Boolean(productCategoryId)}
              handleCloseModal={closeModalUpdateProductCategory}
            />
          </Suspense>
        )}
      </>
    </DataListLayout>
  );
}
