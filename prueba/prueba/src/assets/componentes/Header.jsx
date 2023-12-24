import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col-md-1">
          <Logo size={80} />
        </div>
        <div className="col-md-9 d-flex align-items-center">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
