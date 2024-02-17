"use client";

import Link from "next/link";
import { treeType } from "../../types/treeType";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const DocTreeView = ({ navItems }: { navItems: treeType[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mb-10  ">
      {navItems.map((item) => (
        <div key={item.lable}>
          {item.parentId == null ? (
            <span className="text-sm text-gray-400 ">{item.lable}</span>
          ) : (
            //子集菜单
            <div>
              <a
                href={item.href}
                className={clsx(
                  "border-l-2 h-8 lg:hidden  flex items-center  text-gray-800 dark:text-gray-200 border-gray-400 pl-4 hover:text-yellow-600  hover:border-yellow-600",
                  {
                    "font-semibold text-yellow-600 dark:text-yellow-600 border-yellow-600":
                      pathname === item.href,
                  }
                )}
              >
                {item.lable}
              </a>

              <Link
                href={item.href}
                passHref
                className={clsx(
                  "border-l-2 h-8 hidden lg:flex items-center  text-gray-800 dark:text-gray-200 border-gray-400 pl-4 hover:text-yellow-600  hover:border-yellow-600",
                  {
                    "font-semibold text-yellow-600 dark:text-yellow-600 border-yellow-600":
                      pathname === item.href,
                  }
                )}
              >
                {item.lable}
              </Link>
            </div>
          )}

          {item.children.length > 1 ? (
            <div className=" flex flex-col mt-2">
              <DocTreeView navItems={item.children} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DocTreeView;
