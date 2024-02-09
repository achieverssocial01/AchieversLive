import React, { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import ChangePassword from "./ChangePassword";
import { FaCircleExclamation } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../Utils/axiosClient";
import { login } from "../Store/authSlice";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [changePasswordComponent, setChangePasswordComponent] =
        useState(false);

    const [inputValue, setInputValue] = useState({
        id: user?._id,
        name: user?.name || "",
        phone: user?.phone || "",
        email: user?.email || "",
        gender: user?.gender || "",
        city: user?.city || "",
        state: user?.state || "",
        pincode: user?.pincode || "",
        address: user?.address || "",
    });

    const [edit, setEdit] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSumit = async (e) => {
        e.preventDefault();
        const response = await axiosClient.post("/updateuser", inputValue);

        if (response.status === 200) {
            console.log(response.data);
            dispatch(login(response.data));
            setEdit(true);
            window.location.reload();
        }
    };
    return (
        <>
            <div className="w-full mx-6">
                <div className="w-full bg-[#1A1C24]  p-5 rounded ">
                    <h4 className="font-montserrat text-white">
                        Sponsor Information
                    </h4>

                    <hr className="my-5" />

                    <div className="flex flex-col md:flex-row gap-[16px] justify-between text-white  ">
                        <h4>Name: {user?.name}</h4>
                        <h4 className="">Referral ID : {user?.referalID}</h4>
                    </div>
                </div>

                {!changePasswordComponent ? (
                    <div className="w-full bg-[#1A1C24] shadow-md p-4  mt-5  rounded ">
                        <div className="flex items-center justify-between text-white  ">
                            <h4 className="">Profile Information</h4>
                            <h4 className="block md:hidden text-[#FF6584]">
                                Referral ID
                            </h4>
                            <h4 className="hidden md:block">
                                Your Referral ID : {user?.referalID}
                            </h4>
                        </div>
                        <hr className="w-full my-4" />

                        <form
                            // onSubmit={handleSumit}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="username"
                                    >
                                        Name
                                    </label>

                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            value={inputValue.name}
                                            onChange={handleChange}
                                            required
                                            readOnly={edit}
                                            name="name"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="username"
                                            type="text"
                                            placeholder="Payal Dhabarde"
                                        />
                                        {!inputValue.name && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="number"
                                    >
                                        Phone Number
                                    </label>
                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.phone}
                                            onChange={handleChange}
                                            name="phone"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="number"
                                            type="number"
                                            placeholder="9811234564"
                                        />
                                                                                {!inputValue.phone && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}

                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>

                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.email}
                                            onChange={handleChange}
                                            name="email"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="email"
                                            type="email"
                                            placeholder="payal@gmail.com"
                                        />
                                        {!inputValue.email && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                       
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="gender"
                                    >
                                        Gender
                                    </label>
                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.gender}
                                            onChange={handleChange}
                                            name="gender"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="gender"
                                            type="text"
                                            placeholder="Add Gender"
                                        />
                                        {!inputValue.gender && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="city"
                                    >
                                        City
                                    </label>

                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.city}
                                            onChange={handleChange}
                                            name="city"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="city"
                                            type="text"
                                            placeholder="Add City"
                                        />
                                        {!inputValue.city && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                    </div>
                                </div>
                                {/* <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="birthday"
                                    >
                                        Birthday
                                    </label>
                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="birthday"
                                            type="text"
                                            placeholder="Add Birthday"
                                        />
                                        <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />
                                    </div>
                                </div> */}
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="state"
                                    >
                                        State
                                    </label>
                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.state}
                                            onChange={handleChange}
                                            name="state"
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="state"
                                            type="text"
                                            placeholder="Maharashtra"
                                        />
                                        {!inputValue.state && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                {/* <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="city"
                                    >
                                        City
                                    </label>

                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                                            id="city"
                                            type="text"
                                            placeholder="Add City"
                                        />
                                        <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />
                                    </div>
                                </div> */}
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="pincode"
                                    >
                                        Pincode
                                    </label>
                                    <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.pincode}
                                            onChange={handleChange}
                                            name="pincode"
                                            className="shadow bg-[#1A1C24] appearance-none  w-full text-white font-poppins text-xs leading-5 focus:outline-none  "
                                            id="pincode"
                                            type="pincode"
                                            placeholder="Add Pincode"
                                        />
                                        {!inputValue.pincode && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 w-full">
                                <div className="w-full">
                                    <label
                                        className="block text-gray-100 text-sm font-bold mb-2"
                                        htmlFor="address"
                                    >
                                        Address
                                    </label>
                                    <div className="flex bg-[#1A1C24] appearance-none border rounded-full py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                                        <input
                                            required
                                            readOnly={edit}
                                            value={inputValue.address}
                                            onChange={handleChange}
                                            name="address"
                                            className="shadow bg-[#1A1C24] appearance-none rerd  w-full  text-white font-poppins text-xs leading-5 focus:outline-none focus:border-none border-transperant"
                                            id="address"
                                            type="text"
                                            placeholder="Add Address"
                                        />
                                        {!inputValue.address && <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2" />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:gap-4">
                                {/* <Link to="/changePassword"> */}
                                <button
                                    onClick={() =>
                                        setChangePasswordComponent(true)
                                    }
                                    className="w-52 px-2 py-2 h-11 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white flex gap-2"
                                >
                                    <RiLockPasswordFill className=" ml-1 w-6 h-6" />
                                    Change Password
                                </button>
                                {/* </Link> */}
                                {edit ? (
                                    <button
                                        onClick={(e) =>{ e.preventDefault(); setEdit(false)}}
                                        className="w-36 h-11 px-2 py-2 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white flex gap-2 ml-1"
                                    >
                                        <FaPen className="ml-1 h-6 w-6" />
                                        Edit Profile
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSumit}
                                        className="w-fit h-11 px-4 py-2 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white flex gap-2 ml-1"
                                    >
                                        <FaPen className="ml-1 h-6 w-6" />
                                        Save Changes
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                ) : (
                    <ChangePassword
                        setChangePasswordComponent={setChangePasswordComponent}
                    />
                )}
                <div></div>
            </div>
        </>
    );
};

export default Profile;
