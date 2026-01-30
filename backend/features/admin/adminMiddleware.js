import { appConfig as config } from '../../config/config.js';

export const adminOnly = (req, res, next) => {
  const adminEmail = req.headers.email;
  const adminPassword = req.headers.password;

  const isAdmin1 =
    adminEmail === config.ADMIN_EMAIL_1 &&
    adminPassword === config.ADMIN_PASSWORD_1;
  
  const isAdmin2 =
    adminEmail === config.ADMIN_EMAIL_2 &&
    adminPassword === config.ADMIN_PASSWORD_2;

  const isLegacyAdmin = 
    adminEmail === config.ADMIN_EMAIL &&
    adminPassword === config.ADMIN_PASSWORD;

  if (isAdmin1 || isAdmin2 || isLegacyAdmin) {
    next();
  } else {
    res
      .status(401)
      .json({ success: false, message: 'Unauthorized: Admin access only' });
  }
};
