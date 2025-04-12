import { registerAs } from "@nestjs/config";

export default registerAs("oauth", () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: "20s" },
    refreshTokenExpires: "1h",
  },
  google: {
    secret: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
}));
