const devConfig = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
}

const prodConfig = {
  baseURL: 'Your production url',
}

export const config = devConfig
