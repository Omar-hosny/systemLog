import React from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import PropTypes from "./node_modules/prop-types";
import { deleteTech } from "../../actions/techActions";
import M from "./node_modules/materialize-css/dist/js/materialize.min.js.js";

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: "Technition deleted !" });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
