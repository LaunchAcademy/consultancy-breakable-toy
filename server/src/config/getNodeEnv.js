const getNodeEnv = () => {
  return process.env.NODE_ENV || "development"
}

export { getNodeEnv }
