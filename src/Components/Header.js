import React from "react";

function Header() {
  return (
    <div className="w-full h-[40px] bg-black text-white overflow-hidden whitespace-nowrap flex items-center">
      <div className="flex w-max animate-[announcement-scroll_10s_linear_infinite]">
        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          FREE SHIPPING ON ORDERS ABOVE PKR 5,000
        </span>

        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          CALL US AT: UAN 111-302-302
        </span>

        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK
        </span>

        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          FREE SHIPPING ON ORDERS ABOVE PKR 5,000
        </span>

        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          CALL US AT: UAN 111-302-302
        </span>

        <span className="inline-block pr-[120px] text-[15px] tracking-[1.5px]">
          FOR INTERNATIONAL WEBSITE VISIT WWW.BAROQUE.COM.PK
        </span>
      </div>

      <style>
        {`
         @keyframes announcement-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-33.33%);
            }
          }
         `}
      </style>
    </div>
  );
}

export default Header;
