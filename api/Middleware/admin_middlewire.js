const isOrginalAdmin = (req, res, next) => {
  const userDataString= localStorage.getItem('userData.role');
  const userData = JSON.parse(userDataString);
  console.log(userData);
    if (userData.role === 'admin') {
      return next(); 
    }

    return res.status(403).json({ error: 'Access denied. Admin role required.' });
 
  };
  
  module.exports = { isOrginalAdmin};