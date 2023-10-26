

export const PORT = process.env.PORT || 6600;

export const ROUTES = {
  INDEX: "/",
  HEALTHCHECK: '/api/healthcheck',
  IMAGES: '/api/images',
}

export const destination = process.env.NODE_ENV === 'production' ? "./dist/images" : "./src/images";