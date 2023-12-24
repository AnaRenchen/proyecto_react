import LogoHeader from "../imagenes/logo_header.jpg";

const Logo = (size) => {
  return <img className="image-fluid" width={size} src={LogoHeader} alt="" />;
};

export default Logo;
