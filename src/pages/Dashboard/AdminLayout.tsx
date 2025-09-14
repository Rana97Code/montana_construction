import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { HomeFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, Modal } from "antd";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom"; // Import useNavigate
import { MdExitToApp } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
const { Header, Content, Sider } = Layout;
import logo from "../../assets/logo.png";
import { logout } from "../../store/auth/authSlice";
import { RootState } from "../../store/store";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const dashboardItems: MenuItem[] = [
	getItem(
		<Link
			to="/dashboard"
			className="px-4 py-2 text-sm font-semibold text-white rounded-xl"
		>
			Messages
		</Link>,
		"0",
		<HomeFilled />
	),
];

const AdminLayout = () => {
	const state = useSelector((state: RootState) => state.auth.user);

	const [collapsed, setCollapsed] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
		if (key === "2") {
			dispatch(logout());
			navigate("/admin/login");
		}

		if (key === "1") {
			setIsModalOpen(true);
		}
	};

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "Profile",
			icon: <FaRegUser />,
		},
		{
			key: "2",
			label: "Logout",
			icon: <MdExitToApp />,
		},
	];

	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					className="bg-white"
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<Link to="/" className="demo-logo-vertical">
						<img src={logo} alt="" className="p-4 mx-auto w-36" />
					</Link>
					<Menu
						className=" mt-[60px]"
						defaultSelectedKeys={["1"]}
						mode="inline"
						items={dashboardItems}
					/>
				</Sider>
				<Layout>
					<Header className="flex items-center justify-end p-0 px-8 bg-white">
						<p className="text-lg font-semibold text-black capitalize">{state?.userName}</p>
						<Dropdown
							className="px-3 py-2"
							menu={{ items, onClick: handleMenuClick }}
						>
							<a onClick={(e) => e.preventDefault()}>
								{state?.profilePicture ? (
									<img
										src={state?.profilePicture}
										alt="user"
										className="w-8 h-8 rounded-full"
									/>
								) : (
									<FaRegUser className="text-2xl text-white " />
								)}
							</a>
						</Dropdown>
					</Header>
					<Content className="mx-4">
						<Breadcrumb className="my-4"></Breadcrumb>
						<div
							style={{
								padding: 24,
								minHeight: 360,
							}}
						>
							<Outlet />
						</div>
					</Content>
				</Layout>
			</Layout>
			<Modal
				open={isModalOpen}
				closable={false}
				footer={[
					<Button key="ok" type="primary" onClick={handleOk}>
						OK
					</Button>,
				]}
			>
				<div className="space-y-2">
					{state?.profilePicture ? (
						<img
							src={state?.profilePicture}
							alt="user"
							className="w-20 h-20 rounded-full"
						/>
					) : (
						<FaRegUser className="text-2xl text-white " />
					)}
					<h4 className="text-2xl font-bold capitalize">{state?.userName}</h4>
					<p>
						<span className="font-semibold">Email:</span> {state?.email}
					</p>
					<p>
						<span className="font-semibold">Mobile:</span> {state?.mobile}
					</p>
				</div>
			</Modal>
		</>
	);
};
export default AdminLayout;
