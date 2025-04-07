import React, { useState } from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Tooltip } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "",
      icon: <UserOutlined />,
      label: "Dashboard",
    },
    {
      key: "contributors",
      icon: <UserOutlined />,
      label: "Contributors",
    },
    {
      key: "volunteers",
      icon: <VideoCameraOutlined />,
      label: "Volunteers",
    },
    {
      key: "auction",
      icon: <UploadOutlined />,
      label: "Auction",
    },
    {
      key: "donation-transaction",
      icon: <UploadOutlined />,
      label: "Donation transaction",
    },
    {
      key: "podcast-stories",
      icon: <UploadOutlined />,
      label: "Podcast & stories",
    },
    {
      key: "subscribers",
      icon: <UploadOutlined />,
      label: "Subscribers",
    },
    {
      key: "my-team",
      icon: <UploadOutlined />,
      label: "My team",
    },
    {
      key: "faq",
      icon: <UploadOutlined />,
      label: "FAQs",
    },
    {
      key: "settings",
      icon: <UploadOutlined />,
      label: "Settings",
    },
  ];

  // 📍 When menu item is clicked
  const handleMenuClick = ({ key }) => {
    navigate(`/admin/dashboard/${key}`);
  };

  return (
    <>
      {/* dashboard header component */}
      <Header
        style={{
          background: colorBgContainer,
          backgroundColor: "#403730",
          color: "white",
          width: "100%",
          height: "65px",
          position: "fixed",
          padding: "0px 10px 0px 10px",
          margin: "0px",
        }}
      >
        <div className="flex justify-between">
          <div>one</div>
          <div className="flex justify-between gap-8">
            <div>two</div>
            <div>three</div>
            <div>four</div>
            <div>five</div>
          </div>
        </div>
      </Header>

      <Layout style={{ paddingTop: "65px", minHeight: "100vh" }}>
        <Sider
          style={{ backgroundColor: "#263234" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="w-[354px] h-screen fixed flex flex-col justify-between"
        >
          {/* sidebar parant div */}
          <div className="flex flex-col justify-between h-screen">
            <div>
              <Menu
                style={{ backgroundColor: "#263234" }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[""]}
                items={menuItems}
                onClick={handleMenuClick}
              />
            </div>
            {/* Bottom part: Logout */}

            <div className="px-4 py-4 mb-16">
              {collapsed ? (
                <Tooltip title="Log out" placement="right">
                  <button className="w-full text-[#DA453F] hover:text-white px-4 py-2 rounded hover:bg-primary transition-all duration-200 flex items-center justify-start h-10">
                    <LogoutOutlined className="shrink-0" />
                    <p className="opacity-0 w-0 overflow-hidden transition-all duration-300">
                      Log out
                    </p>
                  </button>
                </Tooltip>
              ) : (
                <button className="w-full text-[#DA453F] hover:text-white px-4 py-2 rounded hover:bg-primary transition-all duration-200 flex items-center justify-start h-10">
                  <LogoutOutlined className="shrink-0" />
                  <p className="opacity-100 pl-3 transition-all duration-300 whitespace-nowrap">
                    Log out
                  </p>
                </button>
              )}
            </div>
          </div>

          {/* Custom collapse button */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-14px",
              transform: "translateY(-200%)",
              zIndex: 10,
            }}
          >
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg
                width="14"
                height="66"
                viewBox="0 0 14 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L14 8V58L0 66V0Z" fill="#4B5557" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.32999 29.8701C8.51223 30.0523 8.51223 30.3478 8.32999 30.53L5.85997 33.0001L8.32999 35.4701C8.51223 35.6523 8.51223 35.9478 8.32999 36.13C8.14774 36.3123 7.85227 36.3123 7.67002 36.13L4.87002 33.33C4.68778 33.1478 4.68778 32.8523 4.87002 32.6701L7.67002 29.8701C7.85227 29.6878 8.14774 29.6878 8.32999 29.8701Z"
                  fill="#E9EBEB"
                />
              </svg>
            </button>
          </div>
        </Sider>

        <Layout
          style={{ margin: "0px 0px 0px 20px", backgroundColor: "#121818" }}
        >
          {/* content */}
          <Content
            style={{
              height: "auto",
              minHeight: "calc(100vh - 65px)",
              margin: "24px 16px",
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;
