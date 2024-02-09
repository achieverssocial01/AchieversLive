import React, { useState } from "react";
import { PiHandsClapping } from "react-icons/pi";
import { SlActionRedo } from "react-icons/sl";

const SeeBlog = () => {
    const [blogData, setBlogData] = useState({
        img: "img/money.png",
        tag: "Money",
        title: "See What Earns You The Most Money",
        description:
            "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corrupti vel nam minima eos deserunt soluta beatae sed ipsum delectus, nulla eveniet nisi. Porro sunt iusto fugit inventore illum error unde eveniet cupiditate debitis consectetur, quas numquam, fuga cum magnam nostrum ad commodi? Provident non aliquid ratione ullam, incidunt ab itaque accusamus modi corrupti aliquam ipsa blanditiis cumque accusantium nostrum velit aspernatur est voluptates reprehenderit unde. Autem repellendus sed aut praesentium maxime similique distinctio quasi necessitatibus, odit voluptate nesciunt quod ipsa impedit pariatur molestias quia iure? Sint, tenetur. Iure similique laudantium voluptates fugit porro eos soluta numquam beatae repellat nemo earum neque repudiandae, modi ex corrupti! Obcaecati deserunt, perspiciatis reiciendis iste voluptates quo est numquam deleniti eius qui expedita neque consequuntur, rerum laborum. Harum, similique",
        views: 44,
        author: "Shashank Maraskar",
        publishDate: "1 August 2023",
        likes: 20,
        subHeading1: "Which courses should you buy?",
        para1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corrupti vel nam minima eos deserunt soluta beatae sed ipsum delectus, nulla eveniet nisi. Porro sunt iusto fugit inventore illum error unde eveniet cupiditate debitis consectetur, quas numquam, fuga cum magnam nostrum ad commodi? Provident non aliquid ratione ullam, incidunt ab itaque accusamus modi corrupti aliquam ipsa blanditiis cumque accusantium nostrum velit aspernatur est voluptates reprehenderit unde. Autem repellendus sed aut praesentium maxime similique distinctio quasi necessitatibus, odit voluptate nesciunt quod ipsa impedit pariatur molestias quia iure? Sint, tenetur. Iure similique laudantium voluptates fugit porro eos soluta numquam beatae repellat nemo earum neque repudiandae, modi ex corrupti! Obcaecati deserunt, perspiciatis reiciendis iste voluptates quo est numquam deleniti eius qui expedita neque consequuntur, rerum laborum. Harum, similique inventore. Fugiat expedita repudiandae neque laboriosam corrupti, labore quibusdam sit perspiciatis error minus nostrum tenetur asperiores similique natus porro incidunt pariatur alias omnis reiciendis? Laboriosam ipsum, quibusdam inventore cumque praesentium pariatur tempora quos perferendis nesciunt explicabo hic exercitationem eum corrupti vel iste tempore repudiandae eaque, similique non assumenda ad iusto natus modi. Saepe quasi nemo nesciunt aperiam cupiditate vel ducimus nulla, dolorem iste aut excepturi ab voluptatibus pariatur sed beatae rerum nihil non dolore iusto a nam quis? Modi sed aperiam quia inventore explicabo dolorum ea ab sint! Itaque ducimus, dolorum voluptates enim inventore quisquam impedit, placeat magnam dolor sed vero, nam libero nihil voluptas facere architecto. Perspiciatis sed id porro, perferendis consequuntur sit dolorum culpa ea, totam, sint enim rem iusto temporibus? Maiores natus accusamus dolore ratione aliquam sint delectus deserunt amet saepe aliquid voluptate ea quos nihil illum neque et fugit impedit quam debitis, laudantium facere modi? Tenetur repellendus libero quod minima, nostrum itaque iure aspernatur? Tempora, blanditiis cupiditate a neque ea qui quia distinctio veritatis iure placeat autem delectus. Non, id dolore.",
    });

    const [blogsData, setBlogsData] = useState([
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
        {
            img: "img/money.png",
            tag: "Money",
            title: "See What Earns You The Most",
            description:
                "Armed with just a yoga mat and some determination, here are 30 powerful fitness moves you can do without even stepping out of your room! Most of these focus on the chest and the core, while plenty act on muscles of the arms and legs.",
            views: 44,
        },
    ]);

    // const descriptionText = "Your long description text goes here. Replace this with your actual text.";

    //   const paragraphs = blogData?.description.split('\n').map((paragraph, index) => (
    //     <p key={index} className="mb-4">{paragraph}</p>
    //   ));

    return (
        <>
            <div className="w-full flex flex-col gap-[24px] md:gap-[45px] p-[16px] md:p-[50px]">
                <div className=" flex justify-between items-center text-white">
                    <div className="flex flex-col gap-[15px]">
                        <h1 className="text-3xl text-[1.5rem] md:w-[80%] font-bold leading-[29.26px] md:leading-9 font-montserrat text-white">
                            {blogData?.title}
                        </h1>
                        <p className="text-[#FF6584] font-lato  text-sm font-bold">
                            by {blogData?.author} | {blogData?.publishDate}
                        </p>
                    </div>

                    <div className="flex gap-1 ">
                        <PiHandsClapping className="mt-1" />
                        <span className="mb-1">{blogData?.likes} </span>
                        <SlActionRedo className="mt-1 ml-2" />
                    </div>
                </div>

                <hr className="" />
                <img
                    src={blogData?.img}
                    className=" w-full h-[189px] md:h-[427px] object-fill opacity-90 brightness-100"
                />

                <p className="text-white font-normal font-lato text-sm leading-6">
                    {blogData?.description}
                </p>

                <div className="flex flex-col gap-[22px] md:[25px]">
                    <h2 className=" font-raleway text-white text-[1.5rem] md:text-3xl w-[90%] md:w-[80%] font-bold leading-[29.26px] md:leading-9">
                        {blogData?.subHeading1}
                    </h2>

                    <p className="text-white  font-normal font-lato text-sm leading-6">
                        {blogData?.para1}
                    </p>
                </div>

                <hr className="" />

                <h2 className="font-montserrat text-white text-2xl leading-7  text-center">
                    More Blogs
                </h2>

                <div className="flex justify-center gap-[14px] md:gap-10 text-ellipsis overflow-hidden ">
                    {blogsData.slice(0, 4)?.map((blog, i) => (
                        <div key={i} className="w-[155px] h-[160px] md:w-[292.82px] shrink-0 md:h-[269.34px] flex flex-col gap-[10px]">
                            <img
                                src={blog?.img}
                                className="w-[155px] h-[99px] md:w-[292.82px] md:h-[206.34px]"
                            />
                            <span className="text-[#207B25] text-sm  font-bold leading-4 font-lato">
                                {blog?.tag}
                            </span>
                            <p className="text-white text-sm font-bold   leading-[21.13px] font-montserrat">
                                {blog?.title}
                            </p>
                        </div>
                    ))}

                    {/* <div className="w-[155px] h-[160px] md:w-[292.82px] shrink-0 md:h-[269.34px] flex flex-col gap-[10px]">
                        <img
                            src="img/money.png"
                            className="w-[155px] h-[99px] md:w-[292.82px] md:h-[206.34px]"
                        />
                        <span className="text-[#207B25] text-sm  font-bold leading-4 font-lato">
                            Money
                        </span>
                        <p className="text-white text-sm font-bold w-[90%] text-ellipsis leading-[21.13px] font-montserrat">
                            See What Earns You The Most Money
                        </p>
                    </div> */}
                </div>

                <button className="w-32 h-8 mx-auto  rounded-full bg-[#4B006E] font-lato leading-5 font-semibold text-sm text-white">
                    See All
                </button>
            </div>
        </>
    );
};

export default SeeBlog;
