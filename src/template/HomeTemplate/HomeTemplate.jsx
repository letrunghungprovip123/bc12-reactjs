import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../assets/common/path";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
const HomeTemplate = () => {
  const { hoTen } = useSelector((state) => state.userSlice)
  const arrNavLink = [
    {
      to: path.homePage,
      content: "Home",
    },
    {
      to: path.baiTapDienThoai,
      content: "Điện thoại",
    },
    {
      to: path.demoRedux,
      content: "Redux",
    },
    {
      to: path.baiTapLacXiNgau,
      content: "Xí Ngầu",
    },
    {
      to: "/demo-useEffect",
      content: "Demo useEffect",
    },
    {
      to: "/demo-form-react",
      content:"Demo formReact",
    }
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" />
        <div>
          {arrNavLink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive, isPending }) => {
                  console.log(isActive);
                  return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
                }}
                to={item.to}
              >
                {item.content}
              </NavLink>
            );
          })}
        </div>
        <div className="text-white uppercase">{hoTen}</div>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Repo của Hưng
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
