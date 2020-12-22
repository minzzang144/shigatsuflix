const size = {
  deviceMobile: "480px",
  mobile: "720px",
  iphone: "737px",
  galaxy: "847px",
  tablet: "1024px",
  desktop: "1600px",
};

const theme = {
  deviceMobile: `(max-device-width: ${size.deviceMobile})`,
  mobile: `(max-width: ${size.mobile})`,
  iphone: `(max-device-height: ${size.iphone})`,
  galaxy: `(max-device-height: ${size.galaxy})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
