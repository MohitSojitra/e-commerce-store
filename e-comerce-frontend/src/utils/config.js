const devConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000",
};

const prodConfig = {
  baseURL: "Your production url",
};

export const config = devConfig;
