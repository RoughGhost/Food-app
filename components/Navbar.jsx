import Image from "next/image";
import { Phone, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import Logo from "../public/img/custom_logo-removebg-preview.png";

const Navbar = () => {
  return (
    <div className="h-100 px-0 py-50 bg-red-600 flex align-center justify-between sticky t-0">
      <div className="flex align-center flex-intial">
        <div className="ml-2 bg-white rounded-full p-6 mx-2">
          <Phone className={{ width: "40px", height: "40px" }} />
        </div>
        <div className="ml-5 text-white mt-2">
          <div className="text-base font-medium">ORDER NOW</div>
          <div className="font-medium text-lg">0814560987</div>
        </div>
      </div>
      <div className="flex align-center list-none grow flex-auto">
        <ul className="p-0 flex align-center text-white ">
          <li className="m-7 font-medium">Homepage</li>
          <li className="m-7 font-medium">Products</li>
          <li className="m-7 font-medium">Menu</li>
          <Image src={Logo} alt="" width="160px" height="69px" />
          <li className="m-7 font-medium">Events</li>
          <li className="m-7 font-medium">Blog</li>
          <li className="m-7 font-medium">Contact</li>
        </ul>
      </div>
      <div className="justify-end grow">
        <div className="relative mt-5 ml-2">
          <Badge
            badgeContent={4}
            className=" flex align-center justify-center "
            color="primary"
          >
            <ShoppingCartOutlined color="#fff" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
