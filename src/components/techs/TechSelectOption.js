import React, { useEffect } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import PropTypes from "./node_modules/prop-types";
import { getTechs } from "../../actions/techActions";

const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName} `}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOption.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
