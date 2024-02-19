"use client";

import Link from "next/link";
import { treeType } from "../../types/treeType";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const DocTreeView = ({ navItems }: { navItems: treeType[] }) => {
  const pathname = usePathname();

  return (
    <div className="mb-10 flex flex-col  ">
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
                  "flex h-8 items-center  border-l-2 border-gray-400  pl-4 text-gray-800 hover:border-yellow-400 hover:text-yellow-400 dark:text-gray-200  lg:hidden",
                  {
                    " border-yellow-400 text-yellow-400 dark:text-yellow-400":
                      pathname === item.href,
                  },
                )}
              >
                {item.lable}
              </a>

              <Link
                href={item.href}
                passHref
                className={clsx(
                  "hidden h-8 items-center border-l-2 border-gray-400  pl-4 text-gray-800 hover:border-yellow-400 hover:text-yellow-400 dark:text-gray-200  lg:flex",
                  {
                    "  border-yellow-400 text-yellow-600 dark:text-yellow-400":
                      pathname === item.href,
                  },
                )}
              >
                {item.lable}
              </Link>
            </div>
          )}

          {item.children.length > 1 ? (
            <div className=" mt-2 flex flex-col">
              <DocTreeView navItems={item.children} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DocTreeView;
