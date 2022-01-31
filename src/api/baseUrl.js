export default function getBaseUrl() {
  // const development = window.location.hostname === 'localhost';
  // return development ? ' http://localhost:4500/' : '/';
  return getQueryStrParamsByName('useMockApi') ? 'http://localhost:4500/' : '/';
}

const getQueryStrParamsByName = (name, url) => {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
