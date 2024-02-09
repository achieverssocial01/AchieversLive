import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { axiosClient } from "../Utils/axiosClient";
import moment from "moment";

const Invoice = () => {
    const [showCard, setShowCard] = useState([]);
    const { user } = useSelector((state) => state.auth);

    const [myReffersData, setMyReffersData] = useState(null);

    const getMyReferalsInfo = async () => {
        try {
            const res = await axiosClient.get(`/getMyInvoiceInfo/${user?._id}`);
            console.log(res);
            setMyReffersData(res?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyReferalsInfo();
    }, []);

    const changePaymentStatus = async (status, id) => {
        const changePaymentStatus = await axiosClient.post(
            "/admin/payment/verify",
            { status, id: id }
        );
        console.log(changePaymentStatus.status);
        if (changePaymentStatus.status == "200") {
            getadminpendingrequest();
        }
    };

    return (
        <div className="w-full mb-8 min-h-[calc(100vh-41px)] md:min-h-[calc(100vh-112px)] mx-4 md:ml-[25px]">
            {/* This is for big screens */}
            <div className="hidden md:block bg-[#1A1C24] w-full">
                <div className="">
                    <div className="flex justify-between items-center mx-6">
                        <h1 className=" text-white font-montserrat text-xl leading-6 font-semibold">
                            Invoice Details
                        </h1>
                        <div className="flex items-center gap-1 w-[280px] h-fit  my-8 border-2  border-[#FFFFFF] rounded-3xl">
                            <IoSearch className="text-white h-5 ml-3 w-6" />
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className=" text-[#8B8989]  h-10 focus:outline-none font-lato text-sm  bg-[#1A1C24]"
                            />
                        </div>
                    </div>

                    <hr className=" w-full" />

                    <div className="flex flex-col text-white">
                        <div className="">
                            <div className="inline-block w-full py-2 sm:px-3">
                                <div className="overflow-hidden ">
                                    <table className="w-full  border-separate border-spacing-y-5 text-center text-white text-sm font-light">
                                        <thead className=" bg-[#4B006E] font-medium dark:border-neutral-500 h-11">
                                            <tr className=" ">
                                                <th
                                                    scope="col"
                                                    className=" rounded-l-lg"
                                                >
                                                    Invoice
                                                </th>
                                                <th scope="col" className="">
                                                    Sponsor
                                                </th>
                                                <th scope="col" className="">
                                                    Course
                                                </th>
                                                <th scope="col" className="">
                                                    Amount
                                                </th>
                                                <th scope="col" className="">
                                                    Payment Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" rounded-r-lg"
                                                >
                                                    Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {myReffersData?.length > 0 ? (
                                                myReffersData?.map(
                                                    (item, i) => (
                                                        <tr
                                                            key={i}
                                                            className=" dark:border-neutral-500  bg-[#0F100E]"
                                                        >
                                                            <td className="whitespace-nowrap   rounded-l-lg  font-medium">
                                                                {
                                                                    item?.transactionid
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap py-2">
                                                                {
                                                                    item
                                                                        ?.referaluserid
                                                                        ?.name
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap py-2">
                                                                ₹{" "}
                                                                {
                                                                    item
                                                                        ?.productid
                                                                        ?.title
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap py-2">
                                                                ₹{" "}
                                                                {
                                                                    item
                                                                        ?.productid
                                                                        ?.price
                                                                }
                                                            </td>
                                                            <td className="py-2 ">
                                                                <span className=" w-fit flex gap-2 mx-auto  items-center">
                                                                    <BsFillExclamationCircleFill className="text-[#E8B910]" />
                                                                    {
                                                                        item?.status
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td className="whitespace-nowrap py-2">
                                                                {moment(
                                                                    item?.date
                                                                ).format(
                                                                    "DD-MM-YYYY"
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )
                                            ) : (
                                                <tr className="text-center">
                                                    <td colSpan={7}>
                                                        {" "}
                                                        Nothing To Show
                                                    </td>
                                                </tr>
                                            )}
                                            {/* <tr className=" border-primary-200 bg-[#0F100E]  text-white">
                                                <td className="whitespace-nowrap  rounded-l-lg py-3 font-medium">
                                                    #ldhdh754759
                                                </td>
                                                <td className="whitespace-nowrap   py-2">
                                                    Payal Dhabarde
                                                </td>
                                                <td className="whitespace-nowrap  py-2">
                                                    Silver Package
                                                </td>
                                                <td className="whitespace-nowrap  py-2">
                                                    ₹ 1,899
                                                </td>
                                                <td className="whitespace-nowrap  py-2 flex gap-1">
                                                    <IoCheckmarkCircle className="w-5 h-5 text-[#207B25]" />
                                                    Pending
                                                </td>
                                                <td className="whitespace-nowrap  rounded-r-lg py-2">
                                                    12/12/2023
                                                </td>
                                            </tr>
                                            <tr className=" b h-7 p-2  text-white bg-[#0F100E]">
                                                <td className="whitespace-nowrap   rounded-l-lg py-3 font-medium">
                                                    #ldhdh754759
                                                </td>
                                                <td className="whitespace-nowrap   py-2">
                                                    Payal Dhabarde
                                                </td>
                                                <td className="whitespace-nowrap  py-2">
                                                    Silver Package
                                                </td>
                                                <td className="whitespace-nowrap  py-2">
                                                    ₹ 1,899
                                                </td>
                                                <td className="whitespace-nowrap  py-2 flex gap-1">
                                                    <img
                                                        src="/img/cancel.png"
                                                        className="w-4 h-4 "
                                                    />
                                                    Pending
                                                </td>
                                                <td className="whitespace-nowrap rounded-r-lg py-2">
                                                    12/12/2023
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for small screen */}
            <div className=" flex flex-col gap-4 md:hidden bg-[#1A1C24] p-4 w-full min-h-[calc(100vh-41px)]">
                <p className="text-white">Invoice Details</p>

                <div className="flex gap-1 px-[10px] border-b items-center w-full border-2  border-[#56575D] rounded-3xl">
                    <IoSearch size={20} className="text-white" />
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className=" text-[#8B8989] w-full h-7 focus:outline-none font-lato text-sm mr-[12px] bg-[#1A1C24]"
                    />
                </div>
                <hr />

                {myReffersData?.length > 0 ? (
                    myReffersData?.map((item, i) => (
                        <div key={i} className="relative bg-[#1A1C24] h-fit">
                            <div
                                onClick={() =>
                                    setShowCard(
                                        showCard.includes(i)
                                            ? showCard.filter(
                                                  (item) => item !== i
                                              )
                                            : [...showCard, i]
                                    )
                                }
                                className="flex justify-between items-center w-full p-3 rounded-t-[5px] relative text-white bg-[#4B006E]"
                            >
                                <p>
                                Invoice:{" "}
                                    <span className="font-Lato font-[500] text-base">
                                        {item?.user?.name}
                                    </span>
                                </p>
                                {showCard.includes(i) ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </div>
                            {showCard.includes(i) && (
                                <div className="w-full flex flex-col gap-4 p-4 bg-[#0F0E10] h-fit">
                                    <div className="text-white flex flex-wrap items-center gap-2">
                                        <p className="text-white">
                                        Invoice :{"  "}
                                        </p>

                                        <span className="font-Lato font-[400] text-base">
                                        {
                                                                    item?.transactionid
                                                                }
                                        </span>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                    <div className="text-white flex flex-wrap items-center gap-2">
                                        <p className="text-white">
                                        Sponsor :{"  "}
                                        </p>

                                        <span className="font-Lato font-[400] text-base">
                                        {
                                                                    item
                                                                        ?.referaluserid
                                                                        ?.name
                                                                }
                                        </span>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                    <div className="text-white flex items-center gap-2">
                                        <p className="text-white">
                                        Course :{"  "}
                                        </p>
                                        <span className="font-Lato font-[400] text-base">
                                            {" "}
                                                                {
                                                                    item
                                                                        ?.productid
                                                                        ?.title
                                                                }
                                        </span>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                    <div className="text-white flex items-center gap-2">
                                        <p className="text-white">
                                        Amount :{"  "}
                                        </p>
                                        <span className="font-Lato font-[400] text-base">
                                        ₹{" "}
                                                                {
                                                                    item
                                                                        ?.productid
                                                                        ?.price
                                                                }
                                        </span>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                    <div className="text-white flex items-center gap-2">
                                        <p className="text-white">
                                        Payment Status :{"  "}
                                        </p>
                                        <span className="font-Lato font-[400] text-base">
                                        {
                                                                        item?.status
                                                                    }
                                        </span>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                    <div className="text-white flex items-center gap-2">
                                        <p>Date</p>
                                        <p className="font-Lato font-[400] text-base">
                                            {moment(item?.date).format(
                                                "DD-MM-YYYY"
                                            )}
                                        </p>
                                    </div>
                                    <hr className="border border-[#FFFFFF42]" />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <h4>Nothing To Show</h4>
                )}
            </div>
        </div>
    );
};

export default Invoice;
