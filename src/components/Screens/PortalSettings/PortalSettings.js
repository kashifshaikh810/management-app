import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import PortalSettingsMarkup from './PortalSettingsMarkup';
import {
  changePrimaryColor,
  changePrimaryHoverColor,
} from '../../Redux/Action/Actions';

const PortalSettings = props => {
  // primary color modal
  const [showPrimaryColorChangeModal, setShowPrimaryColorChangeModal] =
    useState(false);

  // primary color hover modal
  const [
    showPrimaryColorHoverChangeModal,
    setShowPrimaryColorHoverChangeModal,
  ] = useState(false);

  // redux
  const dispatch = useDispatch();
  const {primaryColor, primaryHoverColor} = useSelector(state => state.reduc);

  const primaryColorOnSelected = selectedColor => {
    dispatch(changePrimaryColor(selectedColor));
    setShowPrimaryColorChangeModal(false);
  };

  const primaryColorHoverOnSelected = selectedColor => {
    dispatch(changePrimaryHoverColor(selectedColor));
    setShowPrimaryColorHoverChangeModal(false);
  };

  return (
    <PortalSettingsMarkup
      {...props}
      showPrimaryColorChangeModal={showPrimaryColorChangeModal}
      setShowPrimaryColorChangeModal={setShowPrimaryColorChangeModal}
      primaryColorOnSelected={primaryColorOnSelected}
      primaryColor={primaryColor}
      showPrimaryColorHoverChangeModal={showPrimaryColorHoverChangeModal}
      setShowPrimaryColorHoverChangeModal={setShowPrimaryColorHoverChangeModal}
      primaryColorHoverOnSelected={primaryColorHoverOnSelected}
      primaryHoverColor={primaryHoverColor}
    />
  );
};

export default PortalSettings;
