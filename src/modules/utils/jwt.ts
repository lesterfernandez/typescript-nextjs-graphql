import jwt, { JwtPayload } from "jsonwebtoken";

if (!process.env.JWT_SECRET) {
  console.warn("NO JWT_SECRET DEFINED!");
}

export const createToken = (
  payload: string | object,
  options: jwt.SignOptions
) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      options,
      (err, encoded) => {
        if (err) return reject(err);
        return resolve(encoded as string);
      }
    );
  });
};

export const verifyToken = (token: string) => {
  return new Promise<JwtPayload>((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err, decoded) => {
        if (err) return reject(err);
        return resolve(decoded as JwtPayload);
      }
    );
  });
};
