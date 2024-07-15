import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const PolicySidebar = () => {
    const location = useLocation();
    const { pathname } = location;

    return <div className="md:mt-0 flex ">
        <Link
            className={clsx("text-[16px] font-medium leading-[19px] mr-[12px]",
                pathname === "/privacy-policy" ? "text-[#00B1FF]" : "text-[#878D96]"
            )}
            to="/privacy-policy"
        >
            Privacy Policy
        </Link>
        <div className="border-r-[0.7px]  border-[#878D96] mr-[12px]" />
        <Link
            className={clsx("text-[16px] font-medium leading-[19px] ",
                pathname === "/cookie-policy" ? "text-[#00B1FF]" : "text-[#878D96]"
            )}
            to="/cookie-policy"
        >
            Cookie Policy
        </Link>
    </div>
}

export default PolicySidebar;