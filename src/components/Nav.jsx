import { FaTimes } from "react-icons/fa";
import NavProduct from "./NavProduct";
import NavSolution from "./NavSolution";
import NavResources from "./NavResources";

const Nav = ({ clickClose }) => {
  return (
    <>
      <section className="modal-sect">
        <FaTimes className="times-icon" onClick={clickClose} />
        <div className="nav-items-con">
          <NavProduct />
          <NavSolution />
          <NavResources />
        </div>
      </section>
    </>
  );
};

export default Nav;
