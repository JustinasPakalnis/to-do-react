/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const initialContext = {
  lightboxVisible: false,
  hideLightbox: () => {},
  showLightbox: () => {},
};

export const LightboxContext = createContext(initialContext);

export function LightboxContextWrapper(props) {
  const [lightboxVisible, setLightboxVisible] = useState(
    initialContext.lightboxVisible
  );
  const hideLightbox = () => setLightboxVisible(false);
  const showLightbox = () => setLightboxVisible(true);

  return (
    <LightboxContext.Provider
      value={{ lightboxVisible, hideLightbox, showLightbox }}
    >
      {props.children}
    </LightboxContext.Provider>
  );
}
