import Link from "next/link";
import React from "react";

const datalist = [
  { title: "關於我們", path: "/about" },
  { title: "服務介紹", path: "/service" },
  { title: "產品介紹", path: "/product" },
  { title: "聯絡我們", path: "/contact" },
];

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] flex justify-between items-center bg-gray-400 px-10 ">
      <Link href="/">
        <div className="text-white cursor-pointer">ＸＸ五金行</div>
      </Link>
      <div className="flex items-center gap-4 text-white">
        {datalist.map((data, i) => (
          <Link key={i} href={data.path}>
            <h1 className="cursor-pointer">{data.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
