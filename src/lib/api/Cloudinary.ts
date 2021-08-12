import cloudinary from "cloudinary";

export const Cloudinary = {
  // eslint-disable-next-line
  upload: async (image: string) => {
    const res = await cloudinary.v2.uploader.upload(image, {
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      folder: "HS_Assets/",
    });

    return res.secure_url;
  },
};
