import { useEffect } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { useAuthLoginMutation } from "@apps/services/authService";
import { PayloadLoginProps } from "@globalTypes/globalTypes";

import "./style.scss";

export default function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-commerce management application - SignIn";
  }, []);

  const [login, { isLoading }] = useAuthLoginMutation();
  const onFinish = (values: PayloadLoginProps) => {
    login(values);
  };

  return (
    <article id="login-page">
      <Row justify="center" className="w-100 mb-30">
        <Col span={6}>
          <Form
            name="normal_login"
            className="login-form"
            // initialValues={{
            //   remember: true,
            //   email: "super_admin@gmail.com",
            //   password: "super_admin@gmail.com",
            // }}
            onFinish={onFinish}
          >
            <div className="logo">
              <img src="/images/logo.png" alt="" />
            </div>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item className="text-center" noStyle>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
              >
                <b>Login</b>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </article>
  );
}
