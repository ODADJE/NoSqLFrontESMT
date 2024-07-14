import React from 'react';
import { Outlet } from 'react-router-dom';
import Content from '../../components/Content';
import Drawer from '../../components/Drawer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Sidebar from '../../components/Sidebar';
import Wrapper from '../../components/Wrapper';

function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
      <Drawer>
        <Menu />
      </Drawer>
    </Wrapper>
  );
}

export default Dashboard;
